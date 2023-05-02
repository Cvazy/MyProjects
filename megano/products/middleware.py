from django.contrib.auth.middleware import AuthenticationMiddleware
from .models import Basket


class MergeCartMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # Если пользователь только что авторизовался
        if request.user.is_authenticated and 'cart_id' in request.session:
            try:
                # Попытайтесь получить корзину авторизованного пользователя
                cart = Basket.objects.get(user=request.user)
            except Basket.DoesNotExist:
                # Если корзины нет, создайте новую
                cart = Basket(user=request.user)

            # Получите корзину неавторизованного пользователя
            guest_cart = Basket.objects.get(id=request.session['cart_id'])

            # Перенесите содержимое корзины неавторизованного пользователя в корзину авторизованного пользователя
            for item in guest_cart.cartitem_set.all():
                item.cart = cart
                item.save()

            # Удалите корзину неавторизованного пользователя
            guest_cart.delete()

            # Обновите ID корзины в сессии
            request.session['cart_id'] = cart.id
            request.session.modified = True

        return response

# class CartMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response
#
#     def __call__(self, request):
#         if request.user.is_authenticated:
#             try:
#                 cart_items = Basket.objects.filter(user=request.user)
#                 request.session['cart'] = {str(item.shop.id): item.quantity for item in cart_items}
#             except Basket.DoesNotExist:
#                 request.session['cart'] = {}
#         else:
#             request.session['cart'] = request.session.get('cart', {})
#
#         response = self.get_response(request)
#         return response
#
#     def process_response(self, request, response):
#         if request.user.is_authenticated:
#             cart_items = Basket.objects.filter(user=request.user)
#             cart_dict = {str(item.shop.id): item.quantity for item in cart_items}
#             for key, value in request.session['cart'].items():
#                 if key in cart_dict:
#                     cart_product = Basket.objects.get(user=request.user, product_id=key)
#                     cart_product.quantity += value
#                     cart_product.save()
#                 else:
#                     product = get_object_or_404(Products, pk=key)
#                     cart_product = Basket(user=request.user, shop=product, quantity=value)
#                     cart_product.save()
#
#             # Удаление сессии корзины
#             del request.session['cart']
#
#             # Объединение корзин, если пользователь уже был аутентифицирован
#             for key, value in cart_dict.items():
#                 if key not in request.session['cart']:
#                     request.session['cart'][key] = value
#
#         else:
#             # Добавление товаров из сессии в корзину для гостя
#             for key, value in request.session['cart'].items():
#                 product = get_object_or_404(Products, pk=key)
#                 try:
#                     cart_product = Basket.objects.get(user=None, product=product)
#                     cart_product.quantity += value
#                     cart_product.save()
#                 except Basket.DoesNotExist:
#                     cart_product = Basket(user=None, product=product, quantity=value)
#                     cart_product.save()
#
#             # Удаление сессии корзины
#             del request.session['cart']
#
#         return response
#
#
# class AnonymousCartMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response
#
#     def __call__(self, request):
#         cart = request.session.get('cart', {})
#         response = self.get_response(request)
#         if not request.user.is_authenticated:
#             response.set_cookie('anonymous_cart', cart)
#         return response

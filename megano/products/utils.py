from .models import Basket


def merge_carts(request):
    if request.user.is_authenticated:
        user_cart = Basket.objects.get(user_id=request.user.pk)
        anonymous_cart = Basket.objects.get(user=None, session_key=request.session.session_key)

        if not anonymous_cart:
            return

        if not user_cart:
            user_cart = anonymous_cart
        else:
            for item in anonymous_cart.items.all():
                if user_cart.items.filter(shop=item.shop).exists():
                    user_item = user_cart.items.filter(shop=item.shop).first()
                    user_item.quantity += item.quantity
                    user_item.save()
                else:
                    item.cart = user_cart
                    item.save()

        anonymous_cart.delete()
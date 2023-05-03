import os
import re

from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, HttpResponseRedirect, redirect, get_object_or_404
from django.contrib.sessions.backends.db import SessionStore
from django.contrib.auth.signals import user_logged_in
from django.dispatch import receiver
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.urls import reverse_lazy
from django.views.generic.base import View
from django.db.models import Q
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets, status

from products.forms import ReviewForm, OrderForm, OrderDeliveryForm, OrderPayForm
from products.models import Products, Basket, Category, Feature, Review, Tags, Order
from users.models import User
from .serializers import *


def index(request):
    context = {
        'index': Products.objects.filter(active=True, top_item=False).order_by('-index_sorted'),
        'top': Products.objects.filter(active=True, top_item=True).order_by('-index_sorted'),
    }

    if request.user:
        baskets = Basket.objects.filter(user_id=request.user.pk)
        total_sum = sum(basket.sum() for basket in baskets)
        context.update(dict(total_sum=total_sum))

    return render(request, 'products/index.html', context)


def cart_view(request):
    if request.user.is_authenticated:
        cart_items = Basket.objects.all()

    else:
        cart = request.session.get('cart', {})
        cart_items = []
        for product_id, quantity in cart.items():
            product = Products.objects.get(pk=product_id)
            cart_items.append({'product': product, 'quantity': quantity})

    context = {
        'cart_items': cart_items
    }

    if request.user:
        baskets = Basket.objects.filter(user_id=request.user.pk)
        total_sum = sum(basket.sum() for basket in baskets)
        context.update(dict(total_sum=total_sum))

    return render(request, 'products/cart.html', context)


def add_to_cart(request, product_id):
    product = Products.objects.get(pk=product_id)
    if request.user.is_authenticated:
        try:
            cart_product = Basket.objects.get(user=request.user, shop=product)
            cart_product.quantity += 1
            cart_product.save()
        except Basket.DoesNotExist:
            cart_product = Basket(user=request.user, shop=product, quantity=1, price=product.prices()['price'])
            cart_product.save()
    else:
        Basket.objects.create(shop_id=product.pk, price=product.price, quantity=1)
        cart = request.session.get('cart', {})
        cart[str(product_id)] = cart.get(str(product_id), 0) + 1
        request.session['cart'] = cart
    return redirect('shop:cart')


def remove_from_cart(request, product_id):
    product = Products.objects.get(pk=product_id)
    if request.user.is_authenticated:
        try:
            cart_product = Basket.objects.get(user=request.user, shop=product)
            if cart_product.quantity > 1:
                cart_product.quantity -= 1
                cart_product.save()
            else:
                cart_product.delete()
        except Basket.DoesNotExist:
            pass
    else:
        cart = request.session.get('cart', {})
        if str(product_id) in cart:
            if cart[str(product_id)] > 1:
                cart[str(product_id)] -= 1
            else:
                del cart[str(product_id)]
            request.session['cart'] = cart
    return redirect('shop:cart')


def basket_del(request, product_id):
    if request.user.is_authenticated:
        cart_items = Basket.objects.filter(user=request.user, shop_id=product_id)
        cart_items.delete()

    else:
        cart = request.session.get('cart', {})
        del cart[str(product_id)]
        request.session['cart'] = cart

    return redirect('shop:cart')


def product(request, pk):
    product = get_object_or_404(Products, pk=pk)

    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.product = product
            review.author = request.user
            review.save()
            return redirect('shop:product', pk=pk)
    else:
        form = ReviewForm()

    context = {
        'products': Products.objects.filter(pk=pk),
        'feature': Feature.objects.filter(product=pk),
        'reviews': Review.objects.filter(product_id=pk),
        'reviews_count': Review.objects.filter(product_id=pk).count(),
        'form': form,
    }

    if request.user:
        baskets = Basket.objects.filter(user_id=request.user.pk)
        total_sum = sum(basket.sum() for basket in baskets)
        context.update(dict(total_sum=total_sum))

    return render(request, 'products/product.html', context)


def shop(request, category_id=None, tag_id=None, page=1):
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')
    query = request.GET.get('q')

    context = {
        'categories': Category.objects.all(),
        'tags': Tags.objects.all(),
        'shop': Products.objects.filter(active=True).order_by('-index_sorted'),
        'min_price': min_price or 0,
        'max_price': max_price or 1000
    }

    if request.user:
        baskets = Basket.objects.filter(user_id=request.user.pk)
        total_sum = sum(basket.sum() for basket in baskets)
        context.update(dict(total_sum=total_sum))

    if category_id:
        shops = Products.objects \
            .order_by('-index_sorted') \
            .filter(category_id=category_id, active=True)

    elif query:
        shops = Products.objects.filter(Q(name__icontains=query) & Q(price__range=(min_price, max_price)))

    elif tag_id:
        shops = Products.objects \
            .order_by('-index_sorted') \
            .filter(tag_id=tag_id, active=True)

    elif min_price and max_price:
        shops = Products.objects.filter(price__range=(min_price, max_price))

    else:
        shops = Products.objects \
            .filter(active=True) \
            .order_by('-index_sorted')

    shops_paginator = Paginator(shops, 4).page(page)
    context.update({'shop': shops_paginator})

    return render(request, 'products/catalog.html', context)


def sale(request, page=1):
    context = {
        'sales': Products.objects.exclude(sale=0).filter(active=True).order_by('-index_sorted'),
    }

    if request.user:
        baskets = Basket.objects.filter(user_id=request.user.pk)
        total_sum = sum(basket.sum() for basket in baskets)
        context.update(dict(total_sum=total_sum))

    sales = Products.objects.exclude(sale=0).filter(active=True).order_by('-index_sorted')

    shops_paginator = Paginator(sales, 4).page(page)
    context.update({'sales': shops_paginator})

    return render(request, 'products/sale.html', context)


class OrderCreateView(LoginRequiredMixin, View):
    login_url = reverse_lazy('users:login')
    success_url = reverse_lazy('shop:order_success')

    def get(self, request, *args, **kwargs):
        if 'step' in request.session:
            step = int(request.session['step'])
        else:
            step = 1
            request.session['step'] = 1
        if step == 1:
            # Отображаем форму для ввода данных пользователя
            return render(request, 'products/step1.html')
        elif step == 2:
            # Отображаем форму для выбора способа доставки
            return render(request, 'products/step2.html')
        elif step == 3:
            # Отображаем форму для выбора способа оплаты
            return render(request, 'products/step3.html')
        elif step == 4:
            # Отображаем страницу с подтверждением заказа
            with open(r'C:\Users\79967\Desktop\freelance\megano\data.txt', 'r', encoding='utf-8') as file:
                data = file.readline()

            pattern = r"'(?:fio|email|phone|delivery_method|address|city|payment_method)': '([^']+)'"

            matches = re.findall(pattern, data)

            order = Order.objects.create(
                address=matches[4],
                user_id=request.user.id,
                delivery_method=matches[3],
                payment_method=matches[6],
                city=matches[5],
                status='Доставляется'
            )

            order.save()

            return render(request, 'products/order_confirm.html', {'order': order})

    def post(self, request, *args, **kwargs):
        step = int(request.session['step'])
        if step == 1:
            # Обрабатываем данные из первой формы
            request.session['fio'] = request.POST.get('fio')
            request.session['phone'] = request.POST.get('phone')
            request.session['email'] = request.POST.get('email')
            request.session['step'] = 2
            return redirect('order_create')
        elif step == 2:
            # Обрабатываем данные из второй формы
            request.session['delivery_method'] = request.POST.get('delivery_method')
            request.session['address'] = request.POST.get('address')
            request.session['city'] = request.POST.get('city')
            request.session['step'] = 3
            return redirect('order_create')
        elif step == 3:
            # Обрабатываем данные из третьей формы
            request.session['payment_method'] = request.POST.get('payment_method')
            request.session['step'] = 4
            return redirect('order_create')
        elif step == 4:
            # Перенаправляем пользователя на страницу с подтверждением заказа
            return redirect('order_confirm')


class OrderSuccessView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'products/order_success.html')


class OrderStepOneView(View):
    template_name = 'products/step1.html'

    def get(self, request, *args, **kwargs):
        # Создаем новую форму, передаем ее в шаблон и рендерим его
        form = OrderForm()
        return render(request, 'products/step1.html', {'form': form})

    def post(self, request, *args, **kwargs):
        # Извлекаем данные из формы и сохраняем их в сессии
        form = OrderForm(request.POST)
        if form.is_valid():
            order_data = form.cleaned_data
            request.session['order_data'] = order_data
            with open('data.txt', 'a', encoding='utf-8') as file:
                file.write(f"{request.session['order_data']}")
            return redirect('shop:order_step2')
        # Если форма невалидна, то возвращаем ошибки на страницу
        return render(request, 'products/step1.html', {'form': form})


class OrderStepTwoView(View):
    template_name = 'products/step2.html'

    def get(self, request, *args, **kwargs):
        # Если пользователь еще не заполнил первый шаг, возвращаем его на этот шаг
        if 'order_data' not in request.session:
            return redirect('shop:order_step1')
        # Создаем новую форму, передаем ее в шаблон и рендерим его
        form = OrderDeliveryForm()
        return render(request, 'products/step2.html', {'form': form})

    def post(self, request, *args, **kwargs):
        # Извлекаем данные из формы и сохраняем их в сессии
        form = OrderDeliveryForm(request.POST)
        if form.is_valid():
            order_data = form.cleaned_data
            request.session['order_data'] = order_data
            with open('data.txt', 'a', encoding='utf-8') as file:
                file.write(f"{request.session['order_data']}")
            return redirect('shop:order_step3')
        # Если форма невалидна, то возвращаем ошибки на страницу
        return render(request, 'products/step2.html', {'form': form})


class OrderStepThreeView(View):
    template_name = 'products/step3.html'

    def get(self, request):
        order_form = OrderPayForm()

        return render(request, 'products/step3.html', {
            'form': order_form,
        })

    def post(self, request):
        order_form = OrderPayForm(request.POST)

        if order_form.is_valid():
            order_data = order_form.cleaned_data
            request.session['order_data'] = order_data
            with open('data.txt', 'a', encoding='utf-8') as file:
                file.write(f"{request.session['order_data']}")

            return redirect('shop:order_confirm')

        return render(request, 'products/step3.html', {
            'form': order_form,
        })


class OrderConfirmView(View):
    template_name = 'products/order_confirm.html'

    def get(self, request):
        with open(r'C:\Users\79967\Desktop\freelance\megano\data.txt', 'r', encoding='utf-8') as file:
            data = file.readline()

        pattern = r"'(?:fio|email|phone|delivery_method|address|city|payment_method)': '([^']+)'"

        matches = re.findall(pattern, data)

        baskets = Basket.objects.filter(user=request.user)

        total_sum = sum(basket.sum() for basket in baskets)

        Order.objects.create(
            address=matches[4],
            user_id=request.user.id,
            delivery_method=matches[3],
            payment_method=matches[6],
            city=matches[5],
            status='Не оплачен',
            total_sum=sum(basket.sum() for basket in baskets)
        )

        context = {
            'fio': matches[0],
            'email': matches[1],
            'phone': matches[2],
            'delivery_method': matches[3],
            'address': matches[4],
            'city': matches[5],
            'payment_method': matches[6],
            'baskets': baskets,
            'all_count': baskets.count(),
            'total_sum': total_sum,
            'order_id': Order.objects.get(total_sum=sum(basket.sum() for basket in baskets)).pk
        }

        os.remove(r'C:\Users\79967\Desktop\freelance\megano\data.txt')

        return render(request, 'products/order_confirm.html', context)


def get_products_in_cart(cart):
    products_in_cart = [product for product in cart.cart.keys()]
    products = Products.objects.filter(pk__in=products_in_cart)
    serializer = BasketSerializer(products, many=True, context=cart.cart)
    return serializer


class BasketOfProductsView(APIView):
    def get(self, *args, **kwargs):
        cart = Basket(self.request)
        serializer = get_products_in_cart(cart)
        return Response(serializer.data)

    def post(self, *args, **kwargs):
        cart = Basket(self.request)
        product = get_object_or_404(Products, id=self.request.data.get('id'))
        cart.add(product=product, count=self.request.data.get('count'))
        serializer = get_products_in_cart(cart)
        return Response(serializer.data)

    def delete(self, *args, **kwargs):
        cart = Basket(self.request)
        product = get_object_or_404(Products, id=self.request.query_params.get('id'))
        count = self.request.query_params.get('count', False)
        cart.remove(product, count=count)
        serializer = get_products_in_cart(cart)
        return Response(serializer.data)


class CategoryView(APIView):
    def get(self, request):
        categories = []
        categories_tmp = Category.objects.filter(parent=None, active=True).prefetch_related('image', 'subcategories')
        for category in categories_tmp:
            categories.append({'id': category.id, 'name': category.name})
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class TagsView(APIView):
    def get(self, request):
        tags = Tags.objects.all()
        serializer = TagsSerializer(tags, many=True)
        return Response(serializer.data)


def sorting_catalog(request):
    category = request.GET.get('category')

    if category != '0':
        catalog = Category.objects.get(pk=category, active=True).products
    else:
        catalog = Products.objects.all()

    return catalog


def filter_catalog(request):
    category = request.query_params.get('category')
    name = request.query_params.get('filter[name]')
    available = request.query_params.get('filter[available]').capitalize()
    tag = request.query_params.get('tag', '').split(',')
    search = request.query_params.get('filter[search]', '')
    min_price = (request.query_params.get('filter[minPrice]'))
    max_price = (request.GET.get('filter[maxPrice]'))

    if category != '0':
        catalog = Category.objects.get(pk=category, active=True).products
    else:
        catalog = Products.objects.all()

    if available == 'True':
        if tag != ['']:
            catalog = catalog.filter(title__iregex=name, price__range=(min_price, max_price), count__gt=0,
                                     tags__in=tag).prefetch_related('images', 'tag')
        elif search:
            catalog = catalog.filter(title__iregex=search, price__range=(min_price, max_price),
                                     count__gt=0).prefetch_related('images')
        else:
            catalog = catalog.filter(title__iregex=name, price__range=(min_price, max_price),
                                     count__gt=0).prefetch_related('images')

    elif tag != ['']:
        catalog = catalog.filter(title__iregex=name, price__range=(min_price, max_price),
                                 tags__in=tag).prefetch_related('images', 'tag')
    else:
        catalog = catalog.filter(title__iregex=name, price__range=(min_price, max_price)).prefetch_related('images')
    return catalog


class CatalogView(APIView):
    def get(self, request, *args, **kwargs):
        shops = filter_catalog(request)
        products = sorting_catalog(request, shops)
        paginator = Paginator(products, 8)
        current_page = paginator.get_page(request.GET.get('page'))
        if len(products) % 8 == 0:
            lastPage = len(products) // 8
        else:
            lastPage = len(products) // 8 + 1
        for product in current_page:
            product.categoryName = product.category
        serializer = ProductSerializer(current_page, many=True)
        return Response({'items': serializer.data, 'currentPage': request.GET.get('page'), 'lastPage': lastPage})


class ProductPopularView(APIView):
    def get(self, request):
        products = Products.objects.filter(active=True).order_by('-rating')[:8].prefetch_related('images')
        for product in products:
            product.categoryName = product.category
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductDetailView(viewsets.ViewSet):
    def retrieve(self, request, pk):
        product = Products.objects.get(pk=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)


class ProductLimitedView(APIView):
    def get(self, request):
        products = Products.objects.filter(limited_edition=True, active=True)[:15].prefetch_related('images')
        for product in products:
            product.categoryName = product.category
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class OrdersView(viewsets.ModelViewSet):
    queryset = Order.objects.all().select_related('user').prefetch_related('products')
    serializer_class = OrderSerializer

    def submit_basket(self, request, *args, **kwargs):
        if request.user.pk:
            user = User.objects.get(pk=request.user.pk)
            fullName, email, phone = user.fullName, user.email, user.phone
        else:
            user = request.user
            fullName, email, phone = '', '', ''
        products = request.data
        totalCost = sum([product.get('count') * product.get('price') for product in products])
        data_of_order = {'user': user,
                         'products': products,
                         'fullName': fullName,
                         'email': email,
                         'phone': phone,
                         'totalCost': totalCost,
                         }
        serializer = self.get_serializer(data=data_of_order)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data)

    def active(self, request):
        order = self.queryset.last()
        cart = Basket(request).cart

        if cart:
            for product in order.products.all():
                product.count = cart.get(str(product.pk)).get('count')
        serializer = self.get_serializer(order)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        cart = Basket(request)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        for product in instance.products.all():
            product.count -= cart.cart.get(str(product.pk)).get('count')
            if product.count <= 0:
                product.active = False
            product.save()
        cart.clear()
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        queryset = Order.objects.filter(user_id=request.user.pk)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response({'orders': serializer.data})

    def details(self, request, pk):
        order = Order.objects.get(pk=pk)
        serializer = self.get_serializer(order)
        return Response(serializer.data)


import os
import re

from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect, get_object_or_404
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.urls import reverse_lazy
from django.views.generic.base import View
from django.db.models import Q
from rest_framework.generics import get_object_or_404

from products.forms import ReviewForm, OrderForm, OrderDeliveryForm, OrderPayForm
from products.models import Basket, OrderItem, Products, Review, Feature, Category, Tags, Order


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
        cart_items = Basket.objects.filter(user_id=request.user.pk)

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


def product(request, product_id):
    product = get_object_or_404(Products, pk=product_id)

    reviews = Review.objects.filter(product_id=product_id)

    num_reviews = 2 if len(reviews) > 3 else len(reviews)

    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.product = product
            review.author = request.user
            review.save()
            return redirect('shop:product', product_id=product_id)
    else:
        form = ReviewForm()

    context = {
        'products': Products.objects.filter(pk=product_id),
        'feature': Feature.objects.filter(product=product_id),
        'reviews': reviews,
        'reviews_count': Review.objects.filter(product_id=product_id).count(),
        'form': form,
    }

    if request.user:
        baskets = Basket.objects.filter(user_id=request.user.pk)
        total_sum = sum(basket.sum() for basket in baskets)
        context.update(dict(total_sum=total_sum))

    return render(request, 'products/product.html', context)


def load_more_reviews(request):
    if request.method == 'GET':
        product_id = request.GET.get('product_id')
        page_number = request.GET.get('page_number')
        reviews_per_page = request.GET.get('reviews_per_page')

        product = get_object_or_404(Products, pk=product_id)
        reviews = product.reviews.order_by('-created_date')[(int(page_number) - 1) * int(reviews_per_page) + 2:int(page_number) * int(reviews_per_page) + 2]

        if len(reviews) == 0:
            return JsonResponse({'has_next': False})

        reviews_html = ''
        for review in reviews:
            reviews_html += f'<div class="review"><p>{review.text}</p><p class="author">{review.author} - {review.created_date}</p></div>'

        return JsonResponse({'reviews_html': reviews_html, 'has_next': True})


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
            return render(request, 'products/step1.html')
        elif step == 2:
            return render(request, 'products/step2.html')
        elif step == 3:
            return render(request, 'products/step3.html')
        elif step == 4:
            with open(os.path.abspath('data.txt'), 'r', encoding='utf-8') as file:
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
            request.session['fio'] = request.POST.get('fio')
            request.session['phone'] = request.POST.get('phone')
            request.session['email'] = request.POST.get('email')
            request.session['step'] = 2
            return redirect('order_create')
        elif step == 2:
            request.session['delivery_method'] = request.POST.get('delivery_method')
            request.session['address'] = request.POST.get('address')
            request.session['city'] = request.POST.get('city')
            request.session['step'] = 3
            return redirect('order_create')
        elif step == 3:
            request.session['payment_method'] = request.POST.get('payment_method')
            request.session['step'] = 4
            return redirect('order_create')
        elif step == 4:
            return redirect('order_confirm')


class OrderSuccessView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'products/order_success.html')


class OrderStepOneView(View):
    template_name = 'products/step1.html'

    def get(self, request, *args, **kwargs):
        form = OrderForm()
        return render(request, 'products/step1.html', {'form': form})

    def post(self, request, *args, **kwargs):
        if os.path.exists(os.path.abspath('data.txt')):
            os.remove(os.path.abspath('data.txt'))
        form = OrderForm(request.POST)
        if form.is_valid():
            order_data = form.cleaned_data
            request.session['order_data'] = order_data
            with open('data.txt', 'a', encoding='utf-8') as file:
                file.write(f"{request.session['order_data']}")
            return redirect('shop:order_step2')
        return render(request, 'products/step1.html', {'form': form})


class OrderStepTwoView(View):
    template_name = 'products/step2.html'

    def get(self, request, *args, **kwargs):
        if 'order_data' not in request.session:
            return redirect('shop:order_step1')
        form = OrderDeliveryForm()
        return render(request, 'products/step2.html', {'form': form})

    def post(self, request, *args, **kwargs):
        form = OrderDeliveryForm(request.POST)
        if form.is_valid():
            order_data = form.cleaned_data
            request.session['order_data'] = order_data
            with open(os.path.abspath('data.txt'), 'a', encoding='utf-8') as file:
                file.write(f"{request.session['order_data']}")
            return redirect('shop:order_step3')
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
            with open(os.path.abspath('data.txt'), 'a', encoding='utf-8') as file:
                file.write(f"{request.session['order_data']}")

            return redirect('shop:order_confirm')

        return render(request, 'products/step3.html', {
            'form': order_form,
        })


class OrderConfirmView(View):
    template_name = 'products/order_confirm.html'

    def get(self, request):
        with open(os.path.abspath('data.txt'), 'r', encoding='utf-8') as file:
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

        for basket in baskets:
            OrderItem.objects.create(
                total=total_sum,
                items=basket,
                order_id=Order.objects.get(total_sum=sum(basket.sum() for basket in baskets)).pk
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

        return render(request, 'products/order_confirm.html', context)
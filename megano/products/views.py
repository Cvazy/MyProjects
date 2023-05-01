from django.shortcuts import render, HttpResponseRedirect, redirect
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.views.generic.base import View
from django.db.models import Q
from django.contrib import messages

from products.forms import ReviewForm
from products.models import Products, Basket, Category, Feature, Reviews, Tags


def index(request, user_id=None):
    baskets = Basket.objects.filter(user=request.user)

    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'index': Products.objects.filter(active=True).order_by('-index_sorted'),
        'total_sum': total_sum
    }

    if request.user:
        baskets = Basket.objects.filter(user=user_id)
        context.update(dict(baskets=baskets))

    return render(request, 'products/index.html', context)


@login_required
def cart(request):
    baskets = Basket.objects.filter(user=request.user)

    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'baskets': baskets,
        'total_sum': total_sum
    }

    return render(request, 'products/cart.html', context)


@login_required
def basket_add(request):
    current_page = request.META.get('HTTP_REFERER')
    shops = Products.objects.get(id=request.POST['product_id'])
    price = shops.price
    sale = shops.sale
    image = shops.image
    baskets = Basket.objects.filter(
        user=request.user,
        price=price,
        image=image,
        shop=shops.id,
        sale=sale
    )

    if not baskets.exists():
        Basket.objects.create(
            user=request.user,
            shop=shops,
            price=price,
            sale=sale,
            image=image,
            quantity=1
        )
        return HttpResponseRedirect(current_page)
    else:
        basket = baskets.first()
        basket.quantity += 1
        basket.save()
        return HttpResponseRedirect(current_page)


@login_required
def basket_min(request):
    current_page = request.META.get('HTTP_REFERER')
    shops = Products.objects.get(id=request.POST['product_id'])
    price = shops.price
    sale = shops.sale
    image = shops.image
    baskets = Basket.objects.filter(
        user=request.user,
        price=price,
        sale=sale,
        image=image,
        shop=shops.id
    )

    if not baskets.exists():
        Basket.objects.create(
            user=request.user,
            shop=shops,
            price=price,
            sale=sale,
            image=image,
            quantity=1
        )
        return HttpResponseRedirect(current_page)
    else:
        basket = baskets.first()
        if basket.quantity != 0:
            basket.quantity -= 1
            basket.save()

        return HttpResponseRedirect(current_page)


@login_required
def basket_del(request):
    shops = Products.objects.get(id=request.POST['product_id'])
    price = shops.price
    sale = shops.sale
    image = shops.image
    baskets = Basket.objects.filter(
        user=request.user,
        price=price,
        sale=sale,
        image=image,
        shop=shops.id
    )

    if not baskets.exists():
        Basket.objects.create(
            user=request.user,
            shop=shops,
            price=price,
            sale=sale,
            image=image,
            quantity=1
        )

        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

    else:
        baskets.delete()

        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def product(request, product_id=None, user_id=None):
    baskets = Basket.objects.filter(user=request.user)

    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'products': Products.objects.filter(pk=product_id),
        'feature': Feature.objects.filter(product=product_id),
        'reviews': Reviews.objects.filter(product_id=product_id),
        'reviews_count': Reviews.objects.filter(product_id=product_id).count(),
        'total_sum': total_sum
    }
    if request.user:
        baskets = Basket.objects.filter(user=user_id)
        context.update(dict(baskets=baskets))

    return render(request, 'products/product.html', context)


def shop(request, category_id=None, tag_id=None, page=1, user_id=None):
    baskets = Basket.objects.filter(user=request.user)
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')
    query = request.GET.get('q')

    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'categories': Category.objects.all(),
        'tags': Tags.objects.all(),
        'total_sum': total_sum,
        'shop': Products.objects.filter(active=True).order_by('-index_sorted'),
        'min_price': min_price or 0,
        'max_price': max_price or 1000
    }

    if request.user:
        baskets = Basket.objects.filter(user=user_id)
        context.update(dict(baskets=baskets))

    if category_id:
        shops = Products.objects\
            .order_by('-index_sorted')\
            .filter(category_id=category_id, active=True)

    elif query:
        shops = Products.objects.filter(Q(name__icontains=query) & Q(price__range=(min_price, max_price)))

    elif tag_id:
        shops = Products.objects\
            .order_by('-index_sorted')\
            .filter(tag_id=tag_id, active=True)

    elif min_price and max_price:
        shops = Products.objects.filter(price__range=(min_price, max_price))

    else:
        shops = Products.objects\
            .filter(active=True)\
            .order_by('-index_sorted')

    shops_paginator = Paginator(shops, 4).page(page)
    context.update({'shop': shops_paginator})

    return render(request, 'products/catalog.html', context)


class AddReview(View):
    def post(self, request, pk):
        form = ReviewForm(data=request.POST)
        good = Products.objects.get(id=pk)
        if form.is_valid():
            form = form.save(commit=False)
            form.product = good
            form.save()

        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


# def sale(request, category_id=None, page=1, user_id=None):
#     context = {
#         'categories': Category.objects.all(),
#         'shop_sale': Products.objects.filter(status_main=0).exclude(sale=0),
#         'products_count': Shop.objects.exclude(sale=0).filter(status_main=0),
#     }
#
#     print(context)
#
#     if request.user:
#         baskets = Basket.objects.filter(user=user_id)
#         context.update(dict(baskets=baskets))
#
#     if category_id:
#         shops_sale = Shop.objects\
#             .order_by('-order')\
#             .filter(category_id=category_id, status_main=0)\
#             .exclude(sale=0)
#     else:
#         shops_sale = Shop.objects\
#             .order_by('-order')\
#             .filter(status_main=0)\
#             .exclude(sale=0)
#
#     shops_sale_paginator = Paginator(shops_sale, 4).page(page)
#     context.update({'shop_sale': shops_sale_paginator})
#
#     return render(request, 'products/sale-shop.html', context)
#

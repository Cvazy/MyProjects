from django.shortcuts import render, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator

from .models import Category, Brands, Shop, Basket, BasketItem
from store import settings


def index(request, user_id=None):
    context = {
        'index': Shop.objects.exclude(status_main=0),
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
        'basket_item': BasketItem.objects.all(),
        'total_sum': total_sum,
    }

    if not baskets:
        return render(request, 'products/blank_cart.html')
    else:
        return render(request, 'products/cart.html', context)


@login_required
def basket_add(request):
    current_page = request.META.get('HTTP_REFERER')
    shops = Shop.objects.get(id=request.POST['product_id'])
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
    shops = Shop.objects.get(id=request.POST['product_id'])
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
    basket = Basket.objects.get(id=request.POST['id'])
    basket.delete()

    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def products(request, product_id=None, user_id=None):
    context = {
        'categories': Category.objects.all(),
        'products': Shop.objects.filter(pk=product_id, status_main=0),
        'similars': Shop.objects.order_by('-order', '?').filter(status_main=0)
    }
    if request.user:
        baskets = Basket.objects.filter(user=user_id)
        context.update(dict(baskets=baskets))

    return render(request, 'products/products.html', context)


def shop(request, category_id=None, page=1, user_id=None):
    context = {
        'categories': Category.objects.all(),
        'brands': Brands.objects.all(),
        'shop': Shop.objects.exclude(status_main=1),
        'products_count': Shop.objects.exclude(status_main=1),
    }

    if request.user:
        baskets = Basket.objects.filter(user=user_id)
        context.update(dict(baskets=baskets))

    if category_id:
        shops = Shop.objects.order_by('-order').filter(category_id=category_id, status_main=0)
    else:
        shops = Shop.objects.order_by('-order').filter(status_main=0)

    shops_paginator = Paginator(shops, 4).page(page)
    context.update({'shop': shops_paginator})

    return render(request, 'products/shop.html', context)


def sale(request, category_id=None, page=1, user_id=None):
    context = {
        'categories': Category.objects.all(),
        'brands': Brands.objects.all(),
        'shop_sale': Shop.objects.filter(status_main=0).exclude(sale=0),
        'products_count': Shop.objects.exclude(sale=0).filter(status_main=0),
    }

    print(context)

    if request.user:
        baskets = Basket.objects.filter(user=user_id)
        context.update(dict(baskets=baskets))

    if category_id:
        shops_sale = Shop.objects\
            .order_by('-order')\
            .filter(category_id=category_id, status_main=0)\
            .exclude(sale=0)
    else:
        shops_sale = Shop.objects\
            .order_by('-order')\
            .filter(status_main=0)\
            .exclude(sale=0)

    shops_sale_paginator = Paginator(shops_sale, 4).page(page)
    context.update({'shop_sale': shops_sale_paginator})

    return render(request, 'products/sale-shop.html', context)


@login_required
def set_language(request):
    lang = request.GET.get('l', 'en')
    request.session[settings.LANGUAGE_SESSION_KEY] = lang
    response = HttpResponseRedirect(request.META.get('HTTP_REFERER', '/'))
    response.set_cookie(settings.LANGUAGE_COOKIE_NAME, lang)

    return response
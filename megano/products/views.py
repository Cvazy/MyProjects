from django.shortcuts import render, HttpResponseRedirect, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.views.generic.base import View
from django.db.models import Q
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets, status

from products.forms import ReviewForm
from products.models import Products, Basket, Category, Feature, Reviews, Tags
from users.models import User
from .serializers import *


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


def order(request):
    baskets = Basket.objects.filter(user=request.user)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'baskets': baskets,
        'baskets_count': baskets.count(),
        'total_sum': total_sum,
    }

    return render(request, 'products/order.html', context)


class AddReview(View):
    def post(self, request, pk):
        form = ReviewForm(data=request.POST)
        good = Products.objects.get(id=pk)
        if form.is_valid():
            form = form.save(commit=False)
            form.product = good
            form.save()

        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


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



from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponseRedirect, render
from django.views.generic.base import TemplateView
from django.views.generic.list import ListView
from django.core.cache import cache

from .count import *
from .models import *


class IndexView(TemplateView):
    template_name = 'products/index.html'
    
    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data()
        context['titles'] = Index.objects.all()
        context['images'] = IndexImage.objects.filter(main_item=1)
        context['big_banner'] = IndexBanner.objects.last()
        context['banners'] = IndexBanner.objects.exclude(name='Indoore Plant')
        context['main_products'] = Products.objects.filter(main_index=True)
        context['bestseller_products'] = Products.objects.filter(main_index=True, bestseller_index=True)
        context['latest_products'] = Products.objects.filter(main_index=True, latest_index=True)
        context['achievements'] = Achievements.objects.all()

        return context


class CartView(TemplateView):
    template_name = 'products/cart.html'


class CompareView(TemplateView):
    template_name = 'products/compare.html'


class ProductListView(ListView):
    model = Products
    template_name = 'products/shop.html'
    paginate_by = 6
    
    def get_queryset(self):
        queryset = super(ProductListView, self).get_queryset()
        category_name = self.kwargs.get('category_name')
        return queryset.filter(category__name=category_name) if category_name else queryset

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super(ProductListView, self).get_context_data()
        context['categories'] = Categories.objects.all()
        context['tags'] = Tag.objects.all()
        context['prod_all'] = Products.objects.all().count()
        context['col_all'] = Color.objects.all().count()
        context['banner'] = IndexBanner.objects.last()

        return context


def products_sale(request):
    return render(request, 'products/single-product-sale.html')


def product(request, product_name):
    context = {
        'product': Products.objects.get(name=product_name),
    }

    return render(request, 'products/single-product-variable.html', context)


@login_required
def basket_add(request, product_id):
    product = Products.objects.get(id=product_id)
    baskets = Basket.objects.filter(user=request.user, product=product)

    if not baskets.exists():
        Basket.objects.create(user=request.user, product=product, quantity=1)
    else:
        item = baskets.first()
        item.quantity += 1
        item.save()

    return HttpResponseRedirect(request.META['HTTP_REFERER'])


def basket_minus(request, basket_id):
    product = Products.objects.get(id=basket_id)
    baskets = Basket.objects.filter(user=request.user, product=product)

    item = baskets.first()
    if item.quantity != 0:
        item.quantity -= 1
        item.save()
    else:
        item.delete()

    return HttpResponseRedirect(request.META['HTTP_REFERER'])


def basket_remove(request, basket_id):
    basket = Basket.objects.get(id=basket_id)
    basket.delete()

    return HttpResponseRedirect(request.META['HTTP_REFERER'])


def wishlist_add(request, product_id):
    product = Products.objects.get(id=product_id)
    wishlist = Basket.objects.filter(user=request.user, product=product)

    if not wishlist.exists():
        Wishlist.objects.create(user=request.user, product=product)
    else:
        item = wishlist.first()
        item.quantity += 1
        item.save()

    return HttpResponseRedirect(request.META['HTTP_REFERER'])


def wishlist_remove(request, product_id):
    wish_product = Wishlist.objects.get(product_id=product_id)
    wish_product.delete()

    return HttpResponseRedirect(request.META['HTTP_REFERER'])

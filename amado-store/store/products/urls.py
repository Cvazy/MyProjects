from django.urls import path

from .views import *

app_name = 'products'

urlpatterns = [
    path('shop/product:<product_id>/', products, name='index'),
    path('shop/', shop, name='shop'),
    path('shop/sale/', sale, name='sale-shop'),
    path('shop/category/<category_id>/', shop, name='category'),
    path('shop/category/sale/<category_id>/', sale, name='sale-category'),
    path('page/<page>/', shop, name='page'),
    path('basket/add/', basket_add, name='basket_add'),
    path('basket/min/', basket_min, name='basket_min'),
    path('basket/del/', basket_del, name='basket_del'),
    path('set-language/', set_language, name='set_language'),
]
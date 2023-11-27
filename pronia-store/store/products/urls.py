from django.urls import path

from .views import *

app_name = 'products'

urlpatterns = [
    path('', ProductListView.as_view(), name='index'),
    path('category/<category_name>/', ProductListView.as_view(), name='categories'),
    path('page/<int:page>/', ProductListView.as_view(), name='paginator'),
    path('cart/', CartView.as_view(), name='cart'),
    path('compare/', CompareView.as_view(), name='compare'),
    path('product/sale/', products_sale, name='sale'),
    path('product/<product_name>/', product, name='product'),

    path('product/wishlist/add/<int:product_id>/', wishlist_add, name='wishlist_add'),
    path('product/wishlist/remove/<int:product_id>/', wishlist_remove, name='wishlist_remove'),
    path('cart/add/<int:product_id>/', basket_add, name='basket_add'),
    path('cart/minus/<int:basket_id>/', basket_minus, name='basket_minus'),
    path('cart/remove/<int:basket_id>/', basket_remove, name='basket_remove')
]

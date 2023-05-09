from django.urls import path

from . import views
from .views import *

app_name = 'products'

urlpatterns = [
    path('', index, name='index'),
    path('cart/', views.cart_view, name='cart'),
    path('add-to-cart/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
    path('remove-from-cart/<int:product_id>/', views.remove_from_cart, name='remove_from_cart'),
    path('basket/del/<int:product_id>/', basket_del, name='basket_del'),
    path('catalog/', shop, name='catalog'),
    path('catalog/category/<int:category_id>', shop, name='category'),
    path('catalog/tag/<int:tag_id>', shop, name='tag'),
    path('catalog/page/<page>/', shop, name='page'),
    path('sale/', sale, name='sale'),
    path('catalog/sale/page/<page>/', sale, name='sale-page'),
    path('product/<int:product_id>', product, name='product'),
    path('product/<int:product_id>/reviews/load/', load_more_reviews, name='load_reviews'),
    path('create/', OrderCreateView.as_view(), name='order_create'),
    path('order/create/step1/', OrderStepOneView.as_view(), name='order_step1'),
    path('order/create/step2/', OrderStepTwoView.as_view(), name='order_step2'),
    path('order/create/step3/', OrderStepThreeView.as_view(), name='order_step3'),
    path('order/create/confirm/', OrderConfirmView.as_view(), name='order_confirm'),
    path('order/success/', OrderSuccessView.as_view(), name='order_success'),
]
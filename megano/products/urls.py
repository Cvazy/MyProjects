from django.urls import path
from django.views.generic import TemplateView
from rest_framework import routers

from . import views
from .views import *

app_name = 'products'

router = routers.SimpleRouter()
router.register(r'api/orders', OrdersView)

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
    path('product/<int:pk>', product, name='product'),
    path('api/basket/', BasketOfProductsView.as_view(), name='basket'),
    path('api/categories/', CategoryView.as_view()),
    path('api/tags/', TagsView.as_view()),
    path('api/catalog/', CatalogView.as_view()),
    path('api/products/popular/', ProductPopularView.as_view()),
    path('api/products/limited/', ProductLimitedView.as_view()),
    path('api/product/<int:pk>/', ProductDetailView.as_view({'get': 'retrieve'})),
    path('create/', OrderCreateView.as_view(), name='order_create'),
    path('success/', OrderSuccessView.as_view(), name='order_success'),
    path('order/create/step1/', OrderStepOneView.as_view(), name='order_step1'),
    path('order/create/step2/', OrderStepTwoView.as_view(), name='order_step2'),
    path('order/create/step3/', OrderStepThreeView.as_view(), name='order_step3'),
    path('order/create/confirm/', OrderConfirmView.as_view(), name='order_confirm'),
    path('order/success/', OrderSuccessView.as_view(), name='order_success'),
]+router.urls

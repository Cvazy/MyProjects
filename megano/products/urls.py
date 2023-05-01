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
    path('cart/', cart, name='cart'),
    path('catalog/', shop, name='catalog'),
    path('catalog/category/<int:category_id>', shop, name='category'),
    path('catalog/tag/<int:tag_id>', shop, name='tag'),
    path('catalog/page/<page>/', shop, name='page'),
    path('order/', order, name='order'),
    path('product/<int:product_id>', product, name='product'),
    path('sale/', TemplateView.as_view(template_name="products/sale.html"), name='sale'),
    path('review/<int:pk>', views.AddReview.as_view(), name="add_review"),
    path('basket/add/', basket_add, name='basket_add'),
    path('basket/min/', basket_min, name='basket_min'),
    path('basket/del/', basket_del, name='basket_del'),
    path('api/basket/', BasketOfProductsView.as_view(), name='basket'),
    path('api/categories/', CategoryView.as_view()),
    path('api/tags/', TagsView.as_view()),
    path('api/catalog/', CatalogView.as_view()),
    path('api/products/popular/', ProductPopularView.as_view()),
    path('api/products/limited/', ProductLimitedView.as_view()),
    path('api/product/<int:pk>/', ProductDetailView.as_view({'get': 'retrieve'})),
]+router.urls

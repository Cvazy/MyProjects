from django.urls import path
from django.views.generic import TemplateView

from . import views
from .views import *

app_name = 'products'

urlpatterns = [
    path('', index, name='index'),
    path('cart/', cart, name='cart'),
    path('catalog/', shop, name='catalog'),
    path('catalog/category/<int:category_id>', shop, name='category'),
    path('catalog/tag/<int:tag_id>', shop, name='tag'),
    path('catalog/page/<page>/', shop, name='page'),
    path('product/<int:product_id>', product, name='product'),
    path('sale/', TemplateView.as_view(template_name="products/sale.html"), name='sale'),
    path('review/<int:pk>', views.AddReview.as_view(), name="add_review"),
    path('basket/add/', basket_add, name='basket_add'),
    path('basket/min/', basket_min, name='basket_min'),
    path('basket/del/', basket_del, name='basket_del'),
]

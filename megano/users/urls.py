from django.urls import path

from .views import *

app_name = 'users'

urlpatterns = [
    path('account/', account, name='account'),
    path('history-order/', history_order, name='history-order'),
    path('order-detail/', one_order, name='order-detail'),
    path('order/', order, name='order'),
    path('profile/', profile, name='profile')
]
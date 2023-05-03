from django.urls import path

from .views import *

app_name = 'pages'

urlpatterns = [
    path('about/', about, name='about'),
    path('payment/<int:order_id>', payment, name='payment'),
    path('payment/<int:order_id>/good', payment_good, name='payment_good'),
    path('payment-someone/', payment_someone, name='payment-someone'),
    path('progress-payment/', progress_payment, name='progress-payment')
]
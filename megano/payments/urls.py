from django.urls import path
from .views import process_payment

app_name = 'payment'

urlpatterns = [
    path('process_payment/', process_payment, name='process_payment'),
]
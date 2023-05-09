from django.urls import path

from .views import *

app_name = 'users'

urlpatterns = [
    path('account/', account, name='account'),
    path('history-order/', history_order, name='history-order'),
    path('order-detail/<int:order_id>', one_order, name='order-detail'),
    path('profile/', profile, name='profile'),
    path('register/', register, name='register'),
    path('login/',  my_login, name='login'),
    path('logout/', MyLogoutView.as_view(), name='logout'),
    path('change-password/', change_password, name='change_password'),
    path('change-profile-image/', change_profile_image, name='change_profile_image')
]
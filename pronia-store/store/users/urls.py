from django.contrib.auth.decorators import login_required
from django.urls import path, include

from .views import *

app_name = 'users'

urlpatterns = [
    path('cart/checkout/', CheckoutView.as_view(), name='checkout'),
    path('contact/', ContactView.as_view(), name='contact'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('verify/<str:email>/<uuid:code>/', EmailVerificationView.as_view(), name='email_verification'),
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('logout/', logout, name='logout'),
    path('account/<int:pk>', login_required(UserProfileView.as_view()), name='account'),
    path('wishlist/', WishlistView.as_view(), name='wishlist'),
]

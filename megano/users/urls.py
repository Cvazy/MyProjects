from django.urls import path

from .views import *

app_name = 'users'

urlpatterns = [
    path('account/', account, name='account'),
    path('history-order/', history_order, name='history-order'),
    path('order-detail/', one_order, name='order-detail'),
    path('profile/', profile, name='profile'),
    path("api/payment/", PaymentView.as_view()),
    path("api/profile/", ProfileView.as_view({"get": 'retrieve', 'post': 'update'})),
    path("api/profile/avatar/", ProfileAvatarView.as_view({'post': 'update'})),
    path("api/profile/password/", UserChangePasswordView.as_view({'post': 'update'})),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', MyLoginView.as_view(), name='login'),
    path('logout/', MyLogoutView.as_view(), name='logout'),
]

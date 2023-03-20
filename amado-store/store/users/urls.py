from django.urls import path

from .views import authorization, registration, profile
from django.contrib.auth.views import LogoutView

app_name = 'users'

urlpatterns = [
    path('auth/', authorization, name='authorization'),
    path('register/', registration, name='registration'),
    path('profile/', profile, name='profile'),
    path('logout/', LogoutView.as_view(template_name="products/index.html"), name='logout'),
]
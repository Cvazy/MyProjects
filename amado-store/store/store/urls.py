from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from products.views import index, cart

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('cart/', cart, name='cart'),
    path('', include('products.urls', namespace='shop')),
    path('', include('products.urls', namespace='sale-shop')),
    path('users/', include('users.urls', namespace='users')),
]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
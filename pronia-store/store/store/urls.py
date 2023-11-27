from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from store.pages.views import *
from store.products.views import *
from store.users.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(), name='index'),
    path('shop/', include('products.urls', namespace='shop')),
    path('pages/', include('pages.urls', namespace='pages')),
    path('user/', include('users.urls', namespace='user')),
    path('accounts/', include('allauth.urls')),
]

if settings.DEBUG:
    urlpatterns.append(path("__debug__/", include("debug_toolbar.urls")))
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
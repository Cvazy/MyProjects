from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from content import views
from content.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
    path('api/search/', views.search_table),
    path('api/search/<pk>', views.search_table),
    path('api/<table>/search/', views.get_queryset),
    path('api/notes/', NotesAPIList.as_view()),
    path('api/notes/<pk>', NotesAPIView.as_view()),
    path('api/employees/', EmployeesAPIList.as_view()),
    path('api/employees/<pk>', EmployeesAPIView.as_view()),
    path('api/sidebar/', SidebarAPIList.as_view()),
    path('api/sidebar/<pk>', SidebarAPIView.as_view()),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
from django.urls import path

from .views import *

app_name = 'pages'

urlpatterns = [
    path('error/404', NotFoundView.as_view(), name='404'),
    path('about/', AboutView.as_view(), name='about'),
    path('blog/', blog, name='blog'),
    path('blog/detail/', blog_detail, name='blog-detail'),
    path('faq/', FAQView.as_view(), name='faq'),
]

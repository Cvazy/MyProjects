from django.shortcuts import render
from django.views.generic.base import TemplateView

from products.models import Achievements

from .models import *


class NotFoundView(TemplateView):
    template_name = 'pages/404.html'


class AboutView(TemplateView):
    template_name = 'pages/about.html'

    def get_context_data(self, **kwargs):
        context = super(AboutView, self).get_context_data()
        context['achievements'] = Achievements.objects.all()
        context['employees'] = OurTeam.objects.all()
        context['brands'] = Brands.objects.all()

        return context


def blog(request):
    return render(request, 'pages/blog.html')


def blog_detail(request):
    return render(request, 'pages/blog-detail.html')


class FAQView(TemplateView):
    template_name = 'pages/faq.html'

    def get_context_data(self, **kwargs):
        context = super(FAQView, self).get_context_data()
        context['general'] = FAQ.objects.filter(payment=False)
        context['payment'] = FAQ.objects.filter(payment=True)

        return context

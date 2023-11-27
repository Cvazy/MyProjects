from django.contrib import auth, messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
from django.contrib.messages.views import SuccessMessageMixin
from django.http import HttpResponseRedirect
from django.shortcuts import render, reverse
from django.urls import reverse_lazy
from django.views.generic.base import TemplateView
from django.views.generic.edit import CreateView, UpdateView

from products.models import Wishlist

from .form import UserLoginForm, UserProfileForm, UserRegistrationForm
from .models import User, EmailVerification


class CheckoutView(TemplateView):
    template_name = 'users/checkout.html'


class ContactView(TemplateView):
    template_name = 'users/contact.html'


class UserLoginView(LoginView):
    template_name = 'users/login.html'
    form_class = UserLoginForm
    redirect_authenticated_user = True

    def get_success_url(self):
        return reverse_lazy('index')


class UserRegistrationView(SuccessMessageMixin, CreateView):
    model = User
    template_name = 'users/register.html'
    form_class = UserRegistrationForm
    success_url = reverse_lazy('user:login')


def logout(request):
    auth.logout(request)
    return HttpResponseRedirect(reverse('index'))


class UserProfileView(UpdateView):
    model = User
    template_name = 'users/my-account.html'
    form_class = UserProfileForm

    def get_success_url(self):
        return reverse_lazy('user:account', args=(self.object.id,))


class EmailVerificationView(TemplateView):
    template_name = 'users/email_success.html'

    def get(self, request, *args, **kwargs):
        code = kwargs['code']
        user = User.objects.get(email=kwargs['email'])
        email_verifications = EmailVerification.objects.filter(user=user, code=code)

        if email_verifications.exists() and not email_verifications.first().is_expired():
            user.is_verified = True
            user.save()
            return super(EmailVerificationView, self).get(request, *args, **kwargs)
        else:
            return HttpResponseRedirect(reverse('index'))


class WishlistView(TemplateView):
    template_name = 'users/wishlist.html'

    def get_context_data(self, **kwargs):
        context = super(WishlistView, self).get_context_data()
        context['wishlist'] = Wishlist.objects.filter(user=self.request.user)

        return context

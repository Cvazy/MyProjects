import json

from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.views.generic.edit import UpdateView
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView, LogoutView
from django.views.generic import CreateView
from django.shortcuts import render, HttpResponseRedirect, redirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.permissions import IsAuthenticated

from products import settings
from products.models import Basket, Order
from users.forms import *
from .serializers import *


@login_required
def profile(request):
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    if request.method == 'POST':
        profile_form = ProfileForm(request.POST, instance=request.user)
        if profile_form.is_valid():
            profile_form.save()
            messages.success(request, 'Ваш профиль был успешно обновлен.')
            return redirect('users:account')
    else:
        profile_form = ProfileForm(instance=request.user)

    context = {
        'profile_form': profile_form,
        'baskets': baskets,
        'total_sum': total_sum,
    }

    def phone_split(self):
        return ' '.join([(self[0:3]), self[4:6], '-', self[7:8], '-', self[9:10]])

    return render(request, 'users/profile.html', context)


@login_required
def change_password(request):
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    if request.method == 'POST':
        form = CustomPasswordChangeForm(user=request.user, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your password was successfully updated!')
            return redirect('users:profile')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = CustomPasswordChangeForm(user=request.user)
    return render(request, 'users/change_password.html', {'form': form, 'total_sum': total_sum})


@login_required
def change_profile_image(request):
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    if request.method == 'POST':
        form = ProfileImageForm(request.POST, request.FILES, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your profile image was successfully updated!')
            return redirect('users:profile')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = ProfileImageForm(instance=request.user)
    return render(request, 'users/change_profile_image.html', {'form': form, 'total_sum': total_sum})


@login_required
def account(request):
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'baskets': baskets,
        'baskets_count': baskets.count(),
        'total_sum': total_sum,
        'user': request.user
    }

    return render(request, 'users/account.html', context)


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('shop:index')
    else:
        form = RegisterForm()

    return render(request, 'users/register.html', {'form': form})


class ProfileViewChange(UpdateView):
    model = User
    form_class = ProfileForm
    template_name = 'users/profile.html'
    success_url = reverse_lazy('users:profile')


@login_required
def one_order(request, order_id=None):
    order = Order.objects.filter(id=order_id)
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'order': order,
        'baskets': baskets,
        'baskets_count': baskets.count(),
        'total_sum': total_sum,
        'user': request.user
    }

    return render(request, 'users/oneorder.html', context)


@login_required
def history_order(request):
    orders = Order.objects.filter(user=request.user, pay_status=True)
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'baskets': baskets,
        'orders': orders,
        'baskets_count': baskets.count(),
        'total_sum': total_sum,
        'user': request.user
    }

    return render(request, 'users/historyorder.html', context)


class PaymentView(APIView):
    def post(self, request):
        order = Order.objects.get(pk=request.data.get('order'))
        number_of_cart = int(''.join(request.data.get('number').split()))
        if number_of_cart % 2 == 0 and number_of_cart % 10 != 0:
            order.status = settings.status[1]
        else:
            order.status = settings.status[2]
        order.save()
        return HttpResponse()


class RegisterView(CreateView):
    form_class = UserRegistrationForm
    template_name = "users/register.html"
    success_url = reverse_lazy('shop:index')

    def form_valid(self, form):
        response = super().form_valid(form)
        User.objects.create(username=form.cleaned_data.get('username'), fio=form.cleaned_data.get('fio'),
                            phone=form.cleaned_data.get('phone'), email=form.cleaned_data.get('email'))
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(self.request, username=username, password=password)
        login(self.request, user=user)
        return response


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return User.objects.get(user_id=self.request.user.pk)

    def retrieve(self, *args, **kwargs):
        user = User.objects.get(user_id=self.request.user.pk)
        serializer = self.serializer_class(user, many=False)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        if request.data.get('avatar') is not None:
            request.data['avatar'] = request.user.profiles.avatar
        return super().update(request, *args, **kwargs)


class ProfileAvatarView(viewsets.ModelViewSet):
    serializer_class = ProfileAvatarSerializer
    parser_classes = [FileUploadParser]
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return User.objects.get(user_id=self.request.user.pk)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    def perform_update(self, serializer):
        serializer.save(avatar=self.request.data['file'])


class UserChangePasswordView(viewsets.ModelViewSet):
    serializer_class = UserPasswordChangeSerializer
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        user = self.request.user
        serializer = self.get_serializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        user.set_password(serializer.validated_data['password'])
        user.save()
        login(request, user)
        return Response(serializer.data)


def my_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            if 'anonymous_cart' in request.COOKIES:
                anonymous_cart = request.COOKIES['anonymous_cart']
                anonymous_cart = json.loads(anonymous_cart)
                cart, _ = Basket.objects.get_or_create(user=user)
                cart.merge_with_anonymous_cart(anonymous_cart)
                response = HttpResponseRedirect('/cart/')
                response.delete_cookie('anonymous_cart')
                return response
            else:
                login(request, user)
                return HttpResponseRedirect('/cart/')
        else:
            return render(request, 'users/login.html', {'error': True})
    else:
        return render(request, 'users/login.html', {})


class MyLoginView(LoginView):
    template_name = 'users/login.html'
    next_page = reverse_lazy('users:profile')
    redirect_authenticated_user = True


class MyLogoutView(LogoutView):
    next_page = reverse_lazy('shop:index')

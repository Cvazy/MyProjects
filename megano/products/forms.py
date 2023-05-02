from django import forms
from django.shortcuts import redirect, render
from django.views import View

from .models import Review, Order


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ('text', 'rate')
        widgets = {
            'text': forms.Textarea(attrs={'rows': 5}),
        }


class OrderForm(forms.Form):
    PAYMENT_CHOICES = (
        ('card', 'Оплата картой'),
        ('cash', 'Оплата наличными'),
    )

    full_name = forms.CharField(
        label='ФИО',
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        max_length=100,
        required=True,
    )

    email = forms.EmailField(
        label='Email',
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        max_length=100,
        required=True,
    )

    phone_number = forms.CharField(
        label='Телефон',
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        max_length=20,
        required=True,
    )

    payment_method = forms.ChoiceField(
        label='Способ оплаты',
        choices=PAYMENT_CHOICES,
        widget=forms.RadioSelect,
        required=True,
    )


class OrderDeliveryForm(forms.Form):
    DELIVERY_CHOICES = (
        ('standard', 'Стандартная доставка'),
        ('express', 'Экспресс-доставка'),
    )

    delivery_method = forms.ChoiceField(
        label='Способ доставки',
        choices=DELIVERY_CHOICES,
        widget=forms.RadioSelect,
        required=True,
    )

    address = forms.CharField(
        label='Адрес',
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        max_length=200,
        required=True,
    )

    city = forms.CharField(
        label='Город',
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        max_length=100,
        required=True,
    )



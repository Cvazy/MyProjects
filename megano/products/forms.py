from django import forms

from .models import Reviews, Order


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Reviews
        fields = ('email', 'name', 'text', 'rate')


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['address'] #'delivery_type', 'payment_type',
        labels = {
            'delivery_type': 'Тип доставки',
            'payment_type': 'Способ оплаты',
            'address': 'Адрес',
        }


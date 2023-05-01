from django import forms
from django.contrib.auth.forms import UserChangeForm

from .models import User, Order


class UserProfileForm(UserChangeForm):
    fio = forms.CharField(widget=forms.TextInput(attrs={'readonly': True}))
    email = forms.CharField(widget=forms.EmailInput(attrs={'readonly': True}))
    phone = forms.CharField(widget=forms.TextInput())
    image = forms.ImageField(widget=forms.FileInput(), required=False)
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Введите текущий пароль'}))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Тут можно изменить пароль'}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Введите пароль повторно'}))

    class Meta:
        model = User
        fields = (
            'fio',
            'email',
            'image',
            'password',
            'password1',
            'password2'
        )

    def __init__(self, *args, **kwargs):
        super(UserProfileForm, self).__init__(*args, **kwargs)
        for field_item, field in self.fields.items():
            field.widget.attrs['class'] = 'form-input'
        self.fields['image'].widget.attrs['class'] = 'Profile-file form-input'


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['delivery_type', 'payment_type', 'address']
        labels = {
            'delivery_type': 'Тип доставки',
            'payment_type': 'Способ оплаты',
            'address': 'Адрес',
        }
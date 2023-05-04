import re

import phonenumbers
from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm, UsernameField, PasswordChangeForm
from django.core.exceptions import ValidationError
from django.contrib.auth import password_validation
from django.core.validators import RegexValidator

from .models import User
from products.models import Order


class UserProfileForm(UserChangeForm):
    fio = forms.CharField(widget=forms.TextInput())
    email = forms.CharField(widget=forms.EmailInput())
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


class RegisterForm(UserCreationForm):
    fio = forms.CharField(required=True, label='Ф.И.О.', widget=forms.TextInput)
    email = forms.CharField(required=True, label='Адрес электронной почты', widget=forms.EmailInput)
    phone = forms.CharField(required=True, label='Номер телефона', widget=forms.TextInput, max_length=18)

    class Meta:
        model = User
        fields = ['username', 'fio', 'phone', 'email', 'password1', 'password2']


# class RegisterForm(UserCreationForm):
#     fio = forms.CharField(required=True, label='Ф.И.О.', widget=forms.TextInput)
#     email = forms.CharField(required=True, label='Адрес электронной почты', widget=forms.EmailInput)
#     phone = forms.CharField(
#         max_length=18,
#         required=True,
#         label='Номер телефона',
#         widget=forms.TextInput(attrs={'placeholder': '+7 (___) ___-__-__'}),
#     )
#
#     def clean_phone(self):
#         phone = self.cleaned_data['phone']
#         phone_regex = re.compile(r'^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$')
#         if not phone_regex.match(phone):
#             raise ValidationError('Введен некорректный номер телефона.')
#         return phone
#
#     class Meta:
#         model = User
#         fields = ['username', 'fio', 'phone', 'email', 'password1', 'password2']


class UserRegistrationForm(UserCreationForm):
    fio = forms.CharField(required=True, label='Ф.И.О.', widget=forms.TextInput)
    phone = forms.CharField(required=True, label='Номер телефона', widget=forms.TextInput)
    password1 = forms.CharField(required=True, label='Пароль', widget=forms.PasswordInput,
                                help_text=password_validation.password_validators_help_text_html())
    password2 = forms.CharField(required=True, label='Подтвердите пароль', widget=forms.PasswordInput)
    email = forms.CharField(required=True, label='Адрес электронной почты', widget=forms.EmailInput)

    error_messages = {
        "password_mismatch": "Пароли не совпадают! Введите одинаковые пароли!",
        "phone_exists": "Пользователь с таким номером телефона уже существует!",
        "email_exists": "Пользователь с таким email уже существует!",
    }

    class Meta:
        model = User
        fields = ("username", 'fio', 'email', 'phone', 'password1', 'password2')
        field_classes = {"username": UsernameField}


class ProfileImageForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['image']


class CustomPasswordChangeForm(PasswordChangeForm):
    error_css_class = 'error'
    old_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'type': 'password'}))
    new_password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'type': 'password'}))
    new_password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'type': 'password'}))

    class Meta:
        model = User
        fields = ['old_password', 'new_password1', 'new_password2']


class ProfileForm(forms.ModelForm):
    fio = forms.CharField(max_length=100, required=True)
    email = forms.EmailField(required=True)
    phone = forms.CharField(max_length=18, required=True)

    class Meta:
        model = User
        fields = ['fio', 'email', 'phone']

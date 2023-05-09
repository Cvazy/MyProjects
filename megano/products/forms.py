from django import forms

from .models import Review


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ('text', 'rate')
        widgets = {
            'text': forms.Textarea(attrs={'rows': 5}),
        }


class OrderForm(forms.Form):
    fio = forms.CharField(
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

    phone = forms.CharField(max_length=18, widget=forms.TextInput(attrs={'class': 'form-control'}), required=True)


class OrderPayForm(forms.Form):
    PAYMENT_CHOICES = (
        ('card', 'Оплата картой'),
        ('cash', 'Оплата наличными'),
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
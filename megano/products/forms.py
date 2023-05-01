from django import forms

from .models import Reviews


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Reviews
        fields = ('email', 'name', 'text', 'rate')

    # name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Ваше имя'}))
    # text = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Отзыв'}))
    # email = forms.CharField(widget=forms.EmailInput(attrs={'placeholder': 'Email'}))
    # rate = forms.IntegerField(widget=forms.NumberInput())

    # def __init__(self, *args, **kwargs):
    #     super(ReviewForm, self).__init__(*args, **kwargs)
    #     for field_item, field in self.fields.items():
    #         field.widget.attrs['class'] = 'form-input'
    #     self.fields['text'].widget.attrs['class'] = 'form-textarea'

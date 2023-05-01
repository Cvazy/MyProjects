from django.db import models
from django.contrib.auth.models import AbstractUser

from phonenumber_field.modelfields import PhoneNumberField


class User(AbstractUser):
    image = models.ImageField(upload_to='users_images', blank=True)
    phone = PhoneNumberField(unique=True, null=True, blank=False, default=None)
    fio = models.CharField(max_length=255, blank=True)
    email = models.EmailField(max_length=255, null=True)


class Order(models.Model):
    DELIVERY_CHOICES = [
        ('pickup', 'Самовывоз'),
        ('delivery', 'Доставка'),
    ]
    PAYMENT_CHOICES = [
        ('cash', 'Наличными'),
        ('card', 'Картой'),
    ]
    delivery_type = models.CharField(choices=DELIVERY_CHOICES, max_length=10)
    payment_type = models.CharField(choices=PAYMENT_CHOICES, max_length=10)
    address = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.id}: {self.delivery_type}, {self.payment_type}, {self.address}'

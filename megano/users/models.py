from django.db import models
from django.contrib.auth.models import AbstractUser

from phonenumber_field.modelfields import PhoneNumberField


class User(AbstractUser):
    image = models.ImageField(upload_to='users_images', blank=True)
    phone = PhoneNumberField(unique=True, null=True, blank=False, default=None)
    fio = models.CharField(max_length=255, blank=True)
    email = models.EmailField(max_length=255, null=True)
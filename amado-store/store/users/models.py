from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    image = models.ImageField(upload_to='users_images', blank=True)
    town = models.CharField(max_length=255, blank=True)
    address = models.CharField(max_length=255, null=True)
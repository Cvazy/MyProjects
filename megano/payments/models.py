from django.db import models


class Payment(models.Model):
    order_number = models.CharField(max_length=50)
    card_number = models.CharField(max_length=16)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    status = models.CharField(max_length=20, default='created')


class Order(models.Model):
    order_number = models.CharField(max_length=100)
    payment_status = models.CharField(max_length=100)
    price = models.PositiveIntegerField(default=0)

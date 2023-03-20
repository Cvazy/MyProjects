from django.db import models

from users.models import User


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Shop(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=1, default=0)
    sale = models.IntegerField(blank=True, default=0)
    image = models.ImageField(upload_to='items', blank=True, null=True)
    main_image = models.ImageField(upload_to='main', blank=True)
    status_main = models.IntegerField(default=0, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Shop'

    def __str__(self):
        return self.name

    def prices(self):
        return {
            'old_price': self.price,
            'price': float(self.price * (100 - self.sale) / 100),
            'discount': self.sale
        }


class ShopImage(models.Model):
    product = models.ForeignKey(Shop, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='items', blank=True)

    class Meta:
        verbose_name_plural = 'ShopImages'

    def __str__(self):
        return f'Image for {self.product.name}'


class Brands(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = 'Brands'

    def __str__(self):
        return self.name


class Basket(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    price = models.PositiveIntegerField(default=0)
    sale = models.IntegerField(blank=True, default=0)
    quantity = models.PositiveIntegerField(default=0, blank=True, null=True)
    image = models.ImageField(upload_to='cart_image', blank=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Cart'

    def __str__(self):
        return f'Cart for {self.user.username} | Product {self.shop.name}'

    def sum(self):
        return self.quantity * (float(self.price * (100 - self.sale) / 100))


class BasketItem(models.Model):
    item = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = 'Items'

    def __str__(self):
        return self.item
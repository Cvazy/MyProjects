from django.db import models

from users.models import User


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Tags(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = 'Tags'

    def __str__(self):
        return self.name


class Products(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=1, default=0)
    index_sorted = models.PositiveIntegerField(default=0)
    active = models.BooleanField(default=False)
    sale = models.IntegerField(blank=True, default=0)
    image = models.ImageField(upload_to='products')
    description = models.TextField()
    short_description = models.CharField(max_length=255, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    tag = models.ForeignKey(Tags, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.name

    def prices(self):
        return {
            'old_price': self.price,
            'price': float(self.price * (100 - self.sale) / 100),
            'discount': self.sale
        }


class Feature(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = 'Feature'

    def __str__(self):
        return self.name


class ProductsImages(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products', blank=True)

    class Meta:
        verbose_name_plural = 'ProductsImages'

    def __str__(self):
        return f'Image for {self.product.name}'


class Basket(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shop = models.ForeignKey(Products, on_delete=models.CASCADE)
    price = models.PositiveIntegerField(default=0)
    short_description = models.CharField(max_length=255, null=True)
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


class Reviews(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=100)
    text = models.TextField(max_length=2000)
    rate = models.PositiveIntegerField()
    product = models.ForeignKey(Products, on_delete=models.CASCADE, default=None)

    class Meta:
        verbose_name_plural = "Reviews"

    def __str__(self):
        return f"{self.name} - {self.product}"


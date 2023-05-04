from django.db import models
from products import settings
from django.utils import timezone
from django.contrib.sessions.models import Session

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
    top_item = models.BooleanField(default=False)
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
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    shop = models.ForeignKey(Products, on_delete=models.CASCADE, null=True, blank=True)
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

    @classmethod
    def merge_carts(cls, anonymous_cart, user_cart):
        # Объединение корзин авторизованного и неавторизованного пользователя
        if anonymous_cart and user_cart:
            # Обновляем записи в корзине с null user на user_id авторизованного пользователя
            anonymous_cart.update(user=user_cart.user)

            # Получаем записи из корзины пользователя
            user_cart_items = user_cart.cart_set.all()

            # Объединяем корзины и группируем по продукту
            merged_carts = {}
            for item in anonymous_cart:
                key = item.product.id
                if key not in merged_carts:
                    merged_carts[key] = item.quantity
                else:
                    merged_carts[key] += item.quantity
            for item in user_cart_items:
                key = item.product.id
                if key not in merged_carts:
                    merged_carts[key] = item.quantity
                else:
                    merged_carts[key] += item.quantity

            # Создаем новые записи в корзине пользователя
            for key, value in merged_carts.items():
                product = Products.objects.get(id=key)
                cart_item, created = Basket.objects.get_or_create(
                    user=user_cart.user,
                    product=product,
                    defaults={'quantity': value}
                )
                if not created:
                    cart_item.quantity += value
                    cart_item.save()

            # Удаляем записи в корзине с null user
            anonymous_cart.delete()

        # Если у пользователя нет корзины, возвращаем корзину неавторизованного пользователя
        elif anonymous_cart:
            return anonymous_cart

        # Если нет корзины неавторизованного пользователя, возвращаем корзину пользователя
        else:
            return user_cart


class Review(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='reviews')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    rate = models.PositiveIntegerField()

    class Meta:
        verbose_name_plural = "Reviews"

    def __str__(self):
        return f"{self.author} - {self.product}"


class Order(models.Model):
    DELIVERY_CHOICES = (
        ('standard', 'Стандартная доставка'),
        ('express', 'Экспресс-доставка'),
    )

    PAYMENT_CHOICES = (
        ('card', 'Оплата картой'),
        ('cash', 'Оплата наличными'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    delivery_method = models.CharField(choices=DELIVERY_CHOICES, max_length=10, default=None)
    total_sum = models.PositiveIntegerField(default=0)
    address = models.CharField(max_length=100)
    pay_status = models.BooleanField(default=False)
    city = models.CharField(max_length=50)
    session_key = models.CharField(max_length=50, null=True, blank=True)
    payment_method = models.CharField(choices=PAYMENT_CHOICES, max_length=10, default=None)
    status = models.CharField(max_length=100, null=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f"Заказ {self.id} - {self.user.fio}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    items = models.ForeignKey(Basket, on_delete=models.CASCADE)
    total = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "OrderItem"

    def __str__(self):
        return f"{self.order} - {self.items}"
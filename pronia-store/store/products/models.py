from django.db import models

from users.models import User


class Categories(models.Model):
    name = models.CharField(max_length=32)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'{self.name}'


class Color(models.Model):
    name = models.CharField(max_length=32)

    class Meta:
        verbose_name_plural = 'Color'

    def __str__(self):
        return f'{self.name}'


class Tag(models.Model):
    name = models.CharField(max_length=32)

    class Meta:
        verbose_name_plural = 'Tags'

    def __str__(self):
        return f'{self.name}'


class Products(models.Model):
    name = models.CharField(max_length=128)
    price = models.DecimalField(max_digits=6, decimal_places=1)
    description = models.TextField(blank=True, null=True)
    size = models.CharField(max_length=32)
    stock = models.BooleanField(default=False)
    image = models.ImageField(upload_to='products_images')
    main_index = models.BooleanField(default=False)
    bestseller_index = models.BooleanField(default=False)
    latest_index = models.BooleanField(default=False)
    created_data = models.DateField(auto_now_add=True)
    color = models.ForeignKey(Color, on_delete=models.CASCADE)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'Товар {self.name}'


class ShopImage(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products_images', blank=True)

    class Meta:
        verbose_name_plural = 'ShopImages'

    def __str__(self):
        return f'Картинка для {self.product.name}'


class Index(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()
    dop_description = models.TextField(blank=True, null=True)
    client_index = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'Index'

    def __str__(self):
        return f'Заголовок {self.title}'


class IndexImage(models.Model):
    main_item = models.ForeignKey(Index, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='main_images', blank=True)

    class Meta:
        verbose_name_plural = 'IndexImages'

    def __str__(self):
        return 'Картинка для главной страницы'


class IndexBanner(models.Model):
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=64)
    image = models.ImageField(upload_to='main_images')

    class Meta:
        verbose_name_plural = 'IndexBanner'

    def __str__(self):
        return 'Баннер для главной страницы'


class Achievements(models.Model):
    count = models.PositiveIntegerField()
    name = models.CharField(max_length=16)

    class Meta:
        verbose_name_plural = 'Achievements'

    def __str__(self):
        return f'{self.name} Под видео'


class BasketQuerySet(models.QuerySet):
    def total_sum(self):
        return sum(basket.sum() for basket in self)

    def total_quantity(self):
        return sum(basket.quantity for basket in self)


class Basket(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=0)

    objects = BasketQuerySet.as_manager()

    def __str__(self):
        return f'Товар {self.product.name} для {self.user}'

    def sum(self):
        return self.product.price * self.quantity


class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Wishlist'

    def __str__(self):
        return f'{self.product.name} для {self.user}'


class Compare(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Compare'

    def __str__(self):
        return f'Сравнение для {self.user}'
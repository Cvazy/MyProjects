from django.db import models


class OurTeam(models.Model):
    name = models.CharField(max_length=64)
    position = models.CharField(max_length=64)
    image = models.ImageField(upload_to='about_images')

    def __str__(self):
        return f'Сотрудник {self.name}'


class Brands(models.Model):
    image = models.ImageField(upload_to='about_images')

    class Meta:
        verbose_name_plural = 'Brands'

    def __str__(self):
        return 'Бренд'


class FAQ(models.Model):
    question = models.CharField(max_length=128)
    answer = models.TextField()
    payment = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'FAQ'

    def __str__(self):
        return f'Вопрос {self.question}'


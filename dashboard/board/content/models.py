from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
# from .weather_def import rewrite_weather_bd


class DbLimitException(BaseException):
    pass


class User(AbstractUser):
    pass


class Sidebar(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='sb-image', blank=True)

    class Meta:
        verbose_name_plural = 'Sidebar'

    def __str__(self):
        return self.name


class Notes(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = 'Notes'

    def __str__(self):
        return self.name


class Weather(models.Model):
    temperature = models.DecimalField(decimal_places=2, max_digits=100, blank=False, default=0)
    wind = models.DecimalField(decimal_places=2, max_digits=200, blank=False, default=0)
    humidity = models.IntegerField(blank=False, default=0)
    pressure = models.IntegerField(blank=False, default=0)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Time create')
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Weather'

    def __str__(self):
        return 'Weather'

    def save(self, *args, **kwargs):
        total_records = Weather.objects.count()
        if total_records > 7:
            pass
            # rewrite_weather_bd()
        else:
            super().save(*args, **kwargs)


class WeatherImage(models.Model):
    weather = models.ForeignKey(Weather, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='weather-image', blank=True)

    class Meta:
        verbose_name_plural = 'WeatherImage'

    def __str__(self):
        return f'Image for {self.weather}'


class Modal(models.Model):
    image = models.ImageField(upload_to='modal-image', blank=True)

    class Meta:
        verbose_name_plural = 'Modal'

    def __str__(self):
        return 'ModalImage'


class Employees(models.Model):
    employee = models.CharField(max_length=255)
    phone = PhoneNumberField(unique=True, null=False, blank=False)

    class Meta:
        verbose_name_plural = 'Employees'

    def __str__(self):
        return self.employee
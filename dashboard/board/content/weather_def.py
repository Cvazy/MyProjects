import datetime
from .models import Weather


def save_weather_bd(res):
    Weather.objects.create(temperature=res['main']['temp'], wind=res['wind']['speed'],
                           pressure=res['main']['pressure'], humidity=res['main']['humidity'],
                           created_at=datetime.datetime.now().strftime("%d-%m-%Y"))


def update_weather_bd(res):
    Weather.objects.all().update(temperature=res['main']['temp'], wind=res['wind']['speed'],
                                 pressure=res['main']['pressure'], humidity=res['main']['humidity'])


def rewrite_weather_bd():
    Weather.objects.first().delete()
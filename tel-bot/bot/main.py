import datetime
import requests
from config import weather_api_token


def get_weather(city, weather_token):
    code_to_smile = {
        "Clear": "Ясно \U00002600",
        "Clouds": "Облачно \U00002601",
        "Rain": "Дождь \U00002614",
        "Drizzle": "Дождь \U00002614",
        "Thunderstorm": "Гроза \U000026A1",
        "Snow": "Снег \U0001F328",
        "Mist": "Туман \U0001F32B"
    }

    try:
        response = requests.get(
            f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={weather_token}&units=metric'
        )
        data = response.json()

        city = data['name']
        temp = data['main']['temp']
        humidity = data['main']['humidity']
        pressure = data['main']['pressure']
        wind = data['wind']['speed']
        sunrise = datetime.datetime.fromtimestamp(data['sys']['sunrise'])
        sunset = datetime.datetime.fromtimestamp(data['sys']['sunset'])
        len_day = sunset-sunrise
        weather = data['weather'][0]['main']
        if weather in code_to_smile:
            weather_description = code_to_smile[weather]
        else:
            weather_description = 'Не понятно, что там с погодой, выгляни в окошко'

        print(
            f'***{datetime.datetime.now().strftime("%Y-%m-%d %H-%M")}*** \n'
            f'Погода в городе: {city} \n'
            f'На улице {weather_description}\n'
            f'Температура {temp}℃ \n'
            f'Влажность воздуха {humidity}% \n'
            f'Атмосферное давление {pressure} mm.rt.st \n'
            f'Скорость ветра {wind} m/s \n'
            f'Время рассвета {sunrise} \n'
            f'Время заката {sunset} \n'
            f'Продолжительность дня {len_day} \n'
            '***Хорошего дня*** \n'
        )

    except:
        print('Проверьте правильность введённого города \n')


def get_ticket(currency, coin):
    response = requests.get(url=f'https://yobit.net/api/3/ticker/{coin}_{currency}?ignore_invalid=1')

    high = response.json()[f'{coin}_{currency}']['high']
    low = response.json()[f'{coin}_{currency}']['low']
    avg = response.json()[f'{coin}_{currency}']['avg']
    vol = response.json()[f'{coin}_{currency}']['vol']
    last = response.json()[f'{coin}_{currency}']['last']
    buy = response.json()[f'{coin}_{currency}']['buy']
    sell = response.json()[f'{coin}_{currency}']['sell']

    print(
        f'Статистика за по {coin} последние 24 часа: \n'
        f'Макcимальная цена: {round(high, 2)}$ \n'
        f'Минимальная цена: {round(low, 2)}$ \n'
        f'Средняя цена: {round(avg, 2)}$ \n'
        f'Объем торгов: {round(vol, 2)}$ \n'
        f'Цена последней сделки: {round(last, 2)}$ \n'
        f'Цена покупки: {round(buy, 2)}$ \n'
        f'Цена продажи: {round(sell, 2)}$ \n'
    )


def get_depth(currency, coin, limit):
    response = requests.get(url=f'https://yobit.net/api/3/depth/{coin}_{currency}?limit={limit}&ignore_invalid=1')

    bids = response.json()[f'{coin}_{currency}']['bids']

    total_bids_amount = 0
    for item in bids:
        price = item[0]
        coin_amount = item[1]
        total_bids_amount += price * coin_amount

    print(f'Общая сумма предложений: {round(total_bids_amount, 2)} $ \n')


def get_trades(currency, coin, limit):
    response = requests.get(url=f'https://yobit.net/api/3/trades/{coin}_{currency}?limit={limit}&ignore_invalid=1')

    total_trade_ask = 0
    total_trade_bid = 0

    for item in response.json()[f"{coin}_{currency}"]:
        if item["type"] == "ask":
            total_trade_ask += item["price"] * item["amount"]
        else:
            total_trade_bid += item["price"] * item["amount"]

    print(
        f'[-] Всего {coin} продано на сумму: {round(total_trade_ask, 2)} $\n'
        f'[+] Всего {coin} куплено на сумму: {round(total_trade_bid, 2)} $'
    )


def main():
    city = input('Введите Ваш город: ')
    get_weather(city, weather_api_token)
    currency = input('Введите валюту, в которой хотите получать данные: ')
    coin = input('Введите криптовалюту, о которой хотите получать данные: ')
    get_ticket(currency, coin)
    limit = input('Введите глубины поиска информации от 150 до 2000 предложений: ')
    get_depth(currency, coin, limit)
    get_trades(currency, coin, limit)


if __name__ == '__main__':
    main()
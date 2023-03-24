import datetime
import requests
import sqlite3

from aiogram import types, Bot, executor, Dispatcher
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher.filters.state import StatesGroup, State
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton
from aiogram.dispatcher import FSMContext

from config import *
from sql import db_start, create_user, edit_data


async def on_startup(_):
    await db_start()

storage = MemoryStorage()
bot = Bot(tg_bot_token)
db = Dispatcher(bot, storage=storage)


class TgBotStates(StatesGroup):
    city = State()
    weather = State()
    coin = State()
    currency = State()
    limit = State()


def get_kb():
    kb = ReplyKeyboardMarkup(resize_keyboard=True)
    kb.add(KeyboardButton('/weather'))
    kb.add(KeyboardButton('/states'))
    kb.add(KeyboardButton('/ticket'))
    kb.add(KeyboardButton('/depth'))
    kb.add(KeyboardButton('/trades'))
    kb.add(KeyboardButton('/cancel'))
    return kb


@db.message_handler(commands=['start'])
async def cmd_start(message: types.Message):
    await message.answer(
        '\U0001F60A Приветики! \U0001F60A \n'
        'Я твой новый бот. Я умею узнавать погоду, а также слежу за криптовалютой \n'
        '/weather Узнать сегодняшнюю погоду \U0001F9D0 \n'
        '/states Указать значения для coin, currency, limit \U0001F911 \n'
        '/ticket Получить статистику по крипте \n'
        '/depth Общая сумма предложений по крипте \n'
        '/trades Информация о купле/продаже по крипте \n'
        '/cancel Сброс текущего состояния бота \U0001F97A',
        reply_markup=get_kb()
    )

    await create_user(user_id=message.from_user.id)


@db.message_handler(commands=['cancel'], state='*')
async def cmd_cancel(message: types.Message, state: FSMContext):
    if state is None:
        return

    await state.finish()
    await message.reply(
        'Состояние сброшено',
        reply_markup=get_kb()
    )


@db.message_handler(commands=['weather'])
async def start_weather(message: types.Message):
    await message.reply('Укажи город, в котором нужно узнать погоду')
    await TgBotStates.city.set()


@db.message_handler(state=TgBotStates.city)
async def set_city(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data['city'] = message.text

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
            f'https://api.openweathermap.org/data/2.5/weather?q={data["city"]}&appid={weather_api_token}&units=metric'
        )
        weather_data = response.json()

        temp = weather_data['main']['temp']
        humidity = weather_data['main']['humidity']
        pressure = weather_data['main']['pressure']
        wind = weather_data['wind']['speed']
        sunrise = datetime.datetime.fromtimestamp(weather_data['sys']['sunrise'])
        sunset = datetime.datetime.fromtimestamp(weather_data['sys']['sunset'])
        len_day = sunset-sunrise
        weather = weather_data['weather'][0]['main']

        if weather in code_to_smile:
            weather_description = code_to_smile[weather]
        else:
            weather_description = '\U0001F62E Не понятно, что там с погодой, выгляни в окошко \U0001F62E'

        await message.answer(f'Ух-ты пухты, а вот и погода в городе {data["city"]} \n')

        await message.answer(
            f'***{datetime.datetime.now().strftime("%Y-%m-%d %H-%M")}*** \n'
            f'На улице {weather_description}\n'
            f'Температура {temp}℃ \n'
            f'Влажность воздуха {humidity}% \n'
            f'Атмосферное давление {pressure} mm Hg \n'
            f'Скорость ветра {wind} m/s \n'
            f'Время рассвета {sunrise} \n'
            f'Время заката {sunset} \n'
            f'Продолжительность дня {len_day} \n'
            '\U0001F609 Хорошего дня \U0001F609 \n'
        )

    except:
        await message.answer('\U0001F928 Проверьте правильность введённого города \U0001F928 \n')

    await state.finish()


@db.message_handler(commands=['states'])
async def start_cript(message: types.Message):
    await message.reply(
        'Введите криптовалюту, о которой хотите получать данные '
        'в формате "btc", "doge", "etc" и т.д.'
        'Сокращения по всем криптовалютам можешь найти по ссылке: \n'
        'https://www.ifcmarkets.com/ru/cryptocurrency-abbreviations'
    )
    await TgBotStates.coin.set()


@db.message_handler(state=TgBotStates.coin)
async def get_coin(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data['coin'] = message.text

    await message.reply(
        'Введите валюту, в которой хотите получать данные '
        'в формате "usd" "eur" и т.д.'
    )
    await TgBotStates.next()


@db.message_handler(state=TgBotStates.currency)
async def get_currency(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data['currency'] = message.text

    await message.reply(
        'Введите глубины поиска информации от 150 до 2000 предложений'
    )

    await TgBotStates.next()


@db.message_handler(state=TgBotStates.limit)
async def get_limit(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data['limit'] = message.text

    await message.answer('Данные успешно сохранены, что с ними сделать? \n'
                         '/ticket Получить статистику по крипте \n'
                         '/depth Общая сумма предложений по крипте \n'
                         '/trades Информация о купле/продаже по крипте'
                         )

    await edit_data(state, user_id=message.from_user.id)
    await state.finish()


@db.message_handler(commands=['ticket'])
async def ticket(message: types.Message):
    bd = sqlite3.connect('bot.db')
    cursor = bd.cursor()
    sqlite_select_query = "SELECT * from users"
    cursor.execute(sqlite_select_query)
    records = cursor.fetchall()
    for data in records:
        response = requests.get(url=f'https://yobit.net/api/3/ticker/{data[1]}_{data[2]}?ignore_invalid=1')

        high = response.json()[f'{data[1]}_{data[2]}']['high']
        low = response.json()[f'{data[1]}_{data[2]}']['low']
        avg = response.json()[f'{data[1]}_{data[2]}']['avg']
        vol = response.json()[f'{data[1]}_{data[2]}']['vol']
        last = response.json()[f'{data[1]}_{data[2]}']['last']
        buy = response.json()[f'{data[1]}_{data[2]}']['buy']
        sell = response.json()[f'{data[1]}_{data[2]}']['sell']

        await message.answer(
            f'Статистика за по {data[1]} последние 24 часа: \n'
            f'Макcимальная цена: {round(high, 2)}$ \n'
            f'Минимальная цена: {round(low, 2)}$ \n'
            f'Средняя цена: {round(avg, 2)}$ \n'
            f'Объем торгов: {round(vol, 2)}$ \n'
            f'Цена последней сделки: {round(last, 2)}$ \n'
            f'Цена покупки: {round(buy, 2)}$ \n'
            f'Цена продажи: {round(sell, 2)}$ \n'
        )


@db.message_handler(commands=['depth'])
async def depth(message: types.Message):
    bd = sqlite3.connect('bot.db')
    cursor = bd.cursor()
    sqlite_select_query = "SELECT * from users"
    cursor.execute(sqlite_select_query)
    records = cursor.fetchall()
    for data in records:
        response = requests.get(url=f'https://yobit.net/api/3/depth/{data[1]}_{data[2]}?limit={data[3]}&ignore_invalid=1')

        bids = response.json()[f'{data[1]}_{data[2]}']['bids']

        total_bids_amount = 0
        for item in bids:
            price = item[0]
            coin_amount = item[1]
            total_bids_amount += price * coin_amount

        await message.answer(f'Общая сумма предложений: {round(total_bids_amount, 2)} $ \n')


@db.message_handler(commands=['trades'])
async def trades(message: types.Message):
    bd = sqlite3.connect('bot.db')
    cursor = bd.cursor()
    sqlite_select_query = "SELECT * from users"
    cursor.execute(sqlite_select_query)
    records = cursor.fetchall()
    for data in records:
        response = requests.get(url=f'https://yobit.net/api/3/trades/{data[1]}_{data[2]}?limit={data[3]}&ignore_invalid=1')

        total_trade_ask = 0
        total_trade_bid = 0

        for item in response.json()[f'{data[1]}_{data[2]}']:
            if item["type"] == "ask":
                total_trade_ask += item["price"] * item["amount"]
            else:
                total_trade_bid += item["price"] * item["amount"]

        await message.answer(
            f'[-] Всего {data[1]} продано на сумму: {round(total_trade_ask, 2)} $\n'
            f'[+] Всего {data[1]} куплено на сумму: {round(total_trade_bid, 2)} $'
        )


if __name__ == '__main__':
    executor.start_polling(db, skip_updates=True, on_startup=on_startup)
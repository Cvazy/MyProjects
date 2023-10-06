import random
import logging
import asyncio

from aiogram.dispatcher import FSMContext

from config import TOKEN
from links.tg_link import tg_link
from links.game_link import game_link
from links.chanel_links import *
from links.obigrish import *
from coefficients.coefficients import by, to

from aiogram.dispatcher.filters import Text
from aiogram import Bot, Dispatcher, types, executor
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher.filters.state import State, StatesGroup
from aiogram.types import ReplyKeyboardMarkup, InlineKeyboardMarkup, InlineKeyboardButton

bot = Bot(token=TOKEN)

storage = MemoryStorage()

dp = Dispatcher(bot, storage=storage)

logging.basicConfig(level=logging.INFO)

is_action_aviator_locked = False
is_action_moon_locked = False
is_action_crash_locked = False
is_action_crash_x_locked = False
is_action_f777_locked = False
is_action_mriya_locked = False

aviator_photo_sent = False
to_the_moon_photo_sent = False
crash_photo_sent = False
crash_x_photo_sent = False
f777_photo_sent = False
mriya_photo_sent = False


class UserStates(StatesGroup):
    Aviator = State()
    TotheMoon = State()
    Crash = State()
    F777 = State()
    Mriya = State()
    Crash_X = State()


class RegStates(StatesGroup):
    Russia = State()
    KZ = State()
    UZ = State()


def get_start_keyboard_ru():
    keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
    buttons = [
        '📔 Инструкция 📔',
        '❓ Как играть ❓',
        '🎮 Наши игры 🎮',
        '🚀 Наш Канал 🚀',
        '📝 Схемы обыгрыша 📝',
        '📨 Тех.Поддержка 📨',
    ]

    for button in buttons:
        keyboard.add(button)

    return keyboard


def get_start_keyboard_kz():
    keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
    buttons = [
        '📔 Нұсқаулық 📔',
        '❓ Қалай ойнауға болады ❓',
        '🎮 Біздің ойындар 🎮',
        '🚀 Біздің арна 🚀',
        '📝 Ұтыс схемалары 📝',
        '📨 Техникалық қолдау 📨',
    ]

    for button in buttons:
        keyboard.add(button)

    return keyboard


def get_start_keyboard_uz():
    keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
    buttons = [
        "📔 Ko'rsatmalar 📔",
        "❓ Qanday o'ynash kerak ❓",
        "🎮 Bizning o'yinlar 🎮",
        "🚀 Bizning kanalimiz 🚀",
        "📝 G'alaba sxemalari 📝",
        "📨 Texnik Yordam 📨",
    ]

    for button in buttons:
        keyboard.add(button)

    return keyboard


def get_keyboard():
    kb = InlineKeyboardMarkup(row_width=2)
    urlButton = InlineKeyboardButton(text='📨 Тех.Поддержка 📨', url=tg_link)
    urlButton2 = InlineKeyboardButton(text='🚀 Наш Канал 🚀', url=chanel_link_ru)
    urlButton3 = InlineKeyboardButton(text='📔 Инструкция 📔', callback_data='instruction')
    urlButton4 = InlineKeyboardButton(text='💵 Поддержать Проект 💵', url=tg_link)
    kb.add(urlButton, urlButton2, urlButton3, urlButton4)

    return kb


def get_game_keyboard():
    game_kb = InlineKeyboardMarkup(row_width=1)
    Aviator = InlineKeyboardButton(text='🛫 Aviator 🛫', callback_data='Aviator')
    LuckyJet = InlineKeyboardButton(text='💸 LuckyJet 💸', callback_data='LuckyJet')
    SpeedCash = InlineKeyboardButton(text='🏎 Speed&Cash 🏎', callback_data='SpeedCash')
    SpaceMan = InlineKeyboardButton(text='🌌 SpaceMan 🌌', callback_data='SpaceMan')
    JetX = InlineKeyboardButton(text='🚀 JetX 🚀', callback_data='JetX')
    AirJet = InlineKeyboardButton(text='📈 AirJet 📈', callback_data='AirJet')

    game_kb.add(Aviator, LuckyJet, SpeedCash, SpaceMan, JetX, AirJet)

    return game_kb


@dp.message_handler(commands="start", state="*")
async def start_func(message: types.Message):
    reg_kb = InlineKeyboardMarkup(row_width=1)
    Russia = InlineKeyboardButton(text='🇷🇺 Россия 🇷🇺', callback_data='Russia')
    KZ = InlineKeyboardButton(text='🇰🇿 Kazakhstan 🇰🇿', callback_data='KZ')
    UZ = InlineKeyboardButton(text="🇺🇿 Uzbekistan 🇺🇿", callback_data='UZ')

    reg_kb.add(Russia, KZ, UZ)

    await message.answer("AVIAHACKERBOT🔐 \n \n"
                         "Это новейшая нейросеть, которая выдаёт выигрышный коэффициент "
                         "рассчитаный на математическом анализе и не имеет аналогов. \n \n"
                         "This is the newest neural network that gives out a winning coefficient "
                         "calculated on mathematical analysis and has no analogues. \n \n")
    await message.answer("Из какой вы страны? \n \n What country are you from?", reply_markup=reg_kb)


@dp.callback_query_handler(text='Russia', state="*")
async def russia(call: types.CallbackQuery, state: FSMContext):
    await state.finish()
    await call.message.answer("Хорошо, я определил, что ты из России 🇷🇺"
                              "Работаем через Нейросеть по ссылке: \n"
                              "Ссылка для России: https://is.gd/h7rTUU \n \n",
                              reply_markup=get_start_keyboard_ru())
    await RegStates.Russia.set()


@dp.callback_query_handler(text='KZ', state="*")
async def russia(call: types.CallbackQuery, state: FSMContext):
    await state.finish()
    await call.message.answer("Жарайды, мен сізнің Қазақстаннан екеніңізді анықтадым. 🇰🇿 \n \n"
                              "Біз сілтеме бойынша нейрондық желі арқылы жұмыс істейміз: \n"
                              "Қазақстан үшін сілтеме: https://is.gd/h7rTUU \n \n",
                              reply_markup=get_start_keyboard_kz())
    await RegStates.KZ.set()


@dp.callback_query_handler(text='UZ', state="*")
async def russia(call: types.CallbackQuery, state: FSMContext):
    await state.finish()
    await call.message.answer("Yaxshi, men siz O'zbekistondan ekanligingizni aniqladim. 🇺🇿 \n \n"
                              "Biz neyron tarmoq orqali havola orqali ishlaymiz: \n"
                              "O'zbekiston uchun havola: https://is.gd/h7rTUU \n \n",
                              reply_markup=get_start_keyboard_uz())
    await RegStates.UZ.set()


@dp.message_handler(Text(equals="🚀 Наш Канал 🚀"), state=RegStates.Russia)
async def chanel(message: types.Message):
    chanel_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(text='🚀 Наш Канал 🚀',
                                                                           url=chanel_link_ru))
    await message.answer("Переходите в наш канал, там много интересного.",
                         reply_markup=chanel_kb)


@dp.message_handler(Text(equals="🚀 Біздің арна 🚀"), state=RegStates.KZ)
async def chanel(message: types.Message):
    chanel_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(text='🚀 Біздің арна 🚀',
                                                                           url=chanel_link_kz))
    await message.answer("Біздің арнаға өтіңіз, онда көптеген қызықты нәрселер бар.",
                         reply_markup=chanel_kb)


@dp.message_handler(Text(equals="🚀 Bizning kanalimiz 🚀"), state=RegStates.UZ)
async def chanel(message: types.Message):
    chanel_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(text='🚀 Bizning kanalimiz 🚀',
                                                                           url=chanel_link_uz))
    await message.answer("Bizning kanalimizga o'ting, juda ko'p qiziqarli narsalar mavjud.",
                         reply_markup=chanel_kb)


@dp.message_handler(Text(equals="📝 Схемы обыгрыша 📝"), state=RegStates.Russia)
async def chanel(message: types.Message):
    chanel_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(text='📝 Схемы обыгрыша 📝',
                                                                           url=obigrish_link_ru))
    await message.answer("Переходите в наш канал, там много схем обыгрыша.",
                         reply_markup=chanel_kb)


@dp.message_handler(Text(equals="📝 Ұтыс схемалары 📝"), state=RegStates.KZ)
async def chanel(message: types.Message):
    chanel_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(text='📝 Ұтыс схемалары 📝',
                                                                           url=obigrish_link_kz))
    await message.answer("Біздің арнаға өтіңіз, көптеген ұтыс схемалары бар.",
                         reply_markup=chanel_kb)


@dp.message_handler(Text(equals="📝 G'alaba sxemalari 📝"), state=RegStates.UZ)
async def chanel(message: types.Message):
    chanel_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(text="📝 G'alaba sxemalari 📝",
                                                                           url=obigrish_link_uz))
    await message.answer("Bizning kanalimizga o'ting, ko'p g'alaba sxemalari mavjud.",
                         reply_markup=chanel_kb)


@dp.message_handler(Text(equals="📨 Тех.Поддержка 📨"), state=RegStates.Russia)
async def help(message: types.Message):
    help_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(text='📨 Тех.Поддержка 📨',
                                                                         url=tg_link))
    await message.answer("Обращайтесь по всем возникающим вопросам напрямую к нашему специалисту.",
                         reply_markup=help_kb)


@dp.message_handler(Text(equals="📨 Техникалық қолдау 📨"), state=RegStates.KZ)
async def help(message: types.Message):
    help_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(text='📨 Техникалық қолдау 📨',
                                                                         url=tg_link))
    await message.answer("Барлық туындаған сұрақтар бойынша тікелей біздің маманға хабарласыңыз.",
                         reply_markup=help_kb)


@dp.message_handler(Text(equals="📨 Texnik Yordam 📨"), state=RegStates.UZ)
async def help(message: types.Message):
    help_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(text='📨 Texnik Yordam 📨',
                                                                         url=tg_link))
    await message.answer("Yuzaga keladigan barcha savollar uchun to'g'ridan-to'g'ri mutaxassisimizga murojaat qiling.",
                         reply_markup=help_kb)


@dp.message_handler(Text(equals="📔 Инструкция 📔"), state=RegStates.Russia)
async def send_instruction_menu(message: types.Message):
    instr_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(
        text='📔 Инструкция 📔', url="https://telegra.ph/Instrukciya-09-18-10"))
    await message.answer("Ознакомитесь с инструкцией в нашей статье.",
                         reply_markup=instr_kb)


@dp.message_handler(Text(equals="📔 Нұсқаулық 📔"), state=RegStates.KZ)
async def send_instruction_menu(message: types.Message):
    instr_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(
        text='📔 Нұсқаулық 📔', url="https://telegra.ph/Nұsқaulyқ-10-04"))
    await message.answer("Нұсқаулықты біздің мақалада қараңыз.",
                         reply_markup=instr_kb)


@dp.message_handler(Text(equals="📔 Ko'rsatmalar 📔"), state=RegStates.UZ)
async def send_instruction_menu(message: types.Message):
    instr_kb = InlineKeyboardMarkup(row_width=1).add(InlineKeyboardButton(
        text="📔 Ko'rsatmalar 📔", url="https://telegra.ph/Korsatmalar-10-04"))
    await message.answer("Bizning maqolamizdagi ko'rsatmalarni ko'rib chiqing.",
                         reply_markup=instr_kb)


@dp.message_handler(Text(equals="❓ Как играть ❓"), state=RegStates.Russia)
async def send_instruction_menu(message: types.Message):
    with open('video/IMG_7484.MP4', 'rb') as video:
        await message.answer_video(video)


@dp.message_handler(Text(equals="❓ Қалай ойнауға болады ❓"), state=RegStates.KZ)
async def send_instruction_menu(message: types.Message):
    with open('video/IMG_7484.MP4', 'rb') as video:
        await message.answer_video(video)


@dp.message_handler(Text(equals="❓ Qanday o'ynash kerak ❓"), state=RegStates.UZ)
async def send_instruction_menu(message: types.Message):
    with open('video/IMG_7632.mp4', 'rb') as video:
        await message.answer_video(video)


@dp.message_handler(Text(equals="🎮 Наши игры 🎮"), state=RegStates.Russia)
async def start_func(message: types.Message):
    await message.answer("Доступные игры",
                         reply_markup=get_game_keyboard())


@dp.message_handler(Text(equals="🎮 Біздің ойындар 🎮"), state=RegStates.KZ)
async def start_func(message: types.Message):
    await message.answer("Қол жетімді ойындар",
                         reply_markup=get_game_keyboard())


@dp.message_handler(Text(equals="🎮 Bizning o'yinlar 🎮"), state=RegStates.UZ)
async def start_func(message: types.Message):
    await message.answer(" Mavjud o'yinlar.",
                         reply_markup=get_game_keyboard())


@dp.callback_query_handler(text='Aviator', state=RegStates.Russia)
async def send_photo(call: types.CallbackQuery):
    game_kb_aviator = InlineKeyboardMarkup(row_width=2)
    Aviator = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='Aviator_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_aviator.add(Aviator, game)

    photo = open('img/aviator.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption='Вы выбрали игру Aviator. \n'
                                            'Укажите полученный коэффициент в игре. \n \n'
                                            f'⏳ Ваш коэффициент: x{random.uniform(by, to):.1f} \n \n'
                                            'Следующий коэффициент можно получить через 60 секунд.',
                                    reply_markup=game_kb_aviator)


@dp.callback_query_handler(text='Aviator', state=RegStates.KZ)
async def send_photo(call: types.CallbackQuery):
    game_kz = InlineKeyboardMarkup(row_width=2)
    Aviator = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='Aviator_BTN_KZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 Ойынға өтіңіз", url=game_link)
    game_kz.add(Aviator, game)

    photo = open('img/aviator.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Сіз Aviator ойынын таңдадыңыз. \n"
                                            "Алынған коэффициентті ойында көрсетіңіз. \n \n"
                                            f"⏳ Сіздің коэффициентіңіз: x{random.uniform(by, to):.1f} \n \n"
                                            "Келесі коэффициентті 60 секундтан кейін алуға болады.",
                                    reply_markup=game_kz)


@dp.callback_query_handler(text='Aviator', state=RegStates.UZ)
async def send_photo(call: types.CallbackQuery):
    game_uz_aviator = InlineKeyboardMarkup(row_width=2)
    Aviator = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='Aviator_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_uz_aviator.add(Aviator, game)

    photo = open('img/aviator.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Siz Aviator o'yinini tanladingiz. \n"
                                            "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                            f"⏳ Sizning koeffitsientingiz: x{random.uniform(by, to):.1f} \n \n"
                                            "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                    reply_markup=game_uz_aviator)


@dp.callback_query_handler(text='LuckyJet', state=RegStates.Russia)
async def send_photo(call: types.CallbackQuery):
    game_kb = InlineKeyboardMarkup(row_width=2)
    LuckyJet = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='LuckyJet_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb.add(LuckyJet, game)

    photo = open('img/lucky-jet.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption='Вы выбрали игру LuckyJet. \n'
                                            'Укажите полученный коэффициент в игре. \n \n'
                                            f'⏳ Ваш коэффициент: x{random.uniform(by, to):.1f} \n \n'
                                            'Следующий коэффициент можно получить через 60 секунд.',
                                    reply_markup=game_kb)


@dp.callback_query_handler(text='LuckyJet', state=RegStates.KZ)
async def send_photo(call: types.CallbackQuery):
    game_kz = InlineKeyboardMarkup(row_width=2)
    LuckyJet = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='LuckyJet_BTN_KZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 Ойынға өтіңіз", url=game_link)
    game_kz.add(LuckyJet, game)

    photo = open('img/lucky-jet.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Сіз LuckyJet ойынын таңдадыңыз. \n"
                                            "Алынған коэффициентті ойында көрсетіңіз. \n \n"
                                            f"⏳ Сіздің коэффициентіңіз: x{random.uniform(by, to):.1f} \n \n"
                                            "Келесі коэффициентті 60 секундтан кейін алуға болады.",
                                    reply_markup=game_kz)


@dp.callback_query_handler(text='LuckyJet', state=RegStates.UZ)
async def send_photo(call: types.CallbackQuery):
    game_uz_aviator = InlineKeyboardMarkup(row_width=2)
    Aviator = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='LuckyJet_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_uz_aviator.add(Aviator, game)

    photo = open('img/lucky-jet.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Siz LuckyJet o'yinini tanladingiz. \n"
                                            "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                            f"⏳ Sizning koeffitsientingiz: x{random.uniform(by, to):.1f} \n \n"
                                            "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                    reply_markup=game_uz_aviator)


@dp.callback_query_handler(text='SpeedCash', state=RegStates.Russia)
async def send_photo(call: types.CallbackQuery):
    game_kb_crash = InlineKeyboardMarkup(row_width=2)
    SpeedCash = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='SpeedCash_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_crash.add(SpeedCash, game)

    photo = open('img/speed.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption='Вы выбрали игру Speed&Cash. \n'
                                            'Укажите полученный коэффициент в игре. \n \n'
                                            f'⏳ Ваш коэффициент: x{random.uniform(by, to):.1f} \n \n'
                                            'Следующий коэффициент можно получить через 60 секунд.',
                                    reply_markup=game_kb_crash)


@dp.callback_query_handler(text='SpeedCash', state=RegStates.KZ)
async def send_photo(call: types.CallbackQuery):
    game_kz = InlineKeyboardMarkup(row_width=2)
    SpeedCash = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='SpeedCash_BTN_KZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 Ойынға өтіңіз", url=game_link)
    game_kz.add(SpeedCash, game)

    photo = open('img/speed.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Сіз SpeedCash ойынын таңдадыңыз. \n"
                                            "Алынған коэффициентті ойында көрсетіңіз. \n \n"
                                            f"⏳ Сіздің коэффициентіңіз: x{random.uniform(by, to):.1f} \n \n"
                                            "Келесі коэффициентті 60 секундтан кейін алуға болады.",
                                    reply_markup=game_kz)


@dp.callback_query_handler(text='SpeedCash', state=RegStates.UZ)
async def send_photo(call: types.CallbackQuery):
    game_uz = InlineKeyboardMarkup(row_width=2)
    SpeedCash = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='SpeedCash_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_uz.add(SpeedCash, game)

    photo = open('img/speed.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Siz SpeedCash o'yinini tanladingiz. \n"
                                            "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                            f"⏳ Sizning koeffitsientingiz: x{random.uniform(by, to):.1f} \n \n"
                                            "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                    reply_markup=game_uz)


@dp.callback_query_handler(text='SpaceMan', state=RegStates.Russia)
async def send_photo(call: types.CallbackQuery):
    game_kb_777 = InlineKeyboardMarkup(row_width=2)
    SpaceMan = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='SpaceMan_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_777.add(SpaceMan, game)

    photo = open('img/spaceman.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption='Вы выбрали игру SpaceMan. \n'
                                            'Укажите полученный коэффициент в игре. \n \n'
                                            f'⏳ Ваш коэффициент: x{random.uniform(by, to):.1f} \n \n'
                                            'Следующий коэффициент можно получить через 60 секунд.',
                                    reply_markup=game_kb_777)


@dp.callback_query_handler(text='SpaceMan', state=RegStates.KZ)
async def send_photo(call: types.CallbackQuery):
    game_kz = InlineKeyboardMarkup(row_width=2)
    SpaceMan = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='SpaceMan_BTN_KZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 Ойынға өтіңіз", url=game_link)
    game_kz.add(SpaceMan, game)

    photo = open('img/spaceman.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Сіз SpaceMan ойынын таңдадыңыз. \n"
                                            "Алынған коэффициентті ойында көрсетіңіз. \n \n"
                                            f"⏳ Сіздің коэффициентіңіз: x{random.uniform(by, to):.1f} \n \n"
                                            "Келесі коэффициентті 60 секундтан кейін алуға болады.",
                                    reply_markup=game_kz)


@dp.callback_query_handler(text='SpaceMan', state=RegStates.UZ)
async def send_photo(call: types.CallbackQuery):
    game_uz = InlineKeyboardMarkup(row_width=2)
    SpaceMan = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='SpaceMan_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_uz.add(SpaceMan, game)

    photo = open('img/spaceman.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Siz SpaceMan o'yinini tanladingiz. \n"
                                            "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                            f"⏳ Sizning koeffitsientingiz: x{random.uniform(by, to):.1f} \n \n"
                                            "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                    reply_markup=game_uz)


@dp.callback_query_handler(text='JetX', state=RegStates.Russia)
async def send_photo(call: types.CallbackQuery):
    game_kb_mriya = InlineKeyboardMarkup(row_width=2)
    JetX = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='JetX_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_mriya.add(JetX, game)

    photo = open('img/jetx.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption='Вы выбрали игру JetX. \n'
                                            'Укажите полученный коэффициент в игре. \n \n'
                                            f'⏳ Ваш коэффициент: x{random.uniform(by, to):.1f} \n \n'
                                            'Следующий коэффициент можно получить через 60 секунд.',
                                    reply_markup=game_kb_mriya)


@dp.callback_query_handler(text='JetX', state=RegStates.KZ)
async def send_photo(call: types.CallbackQuery):
    game_kz = InlineKeyboardMarkup(row_width=2)
    JetX = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='JetX_BTN_KZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 Ойынға өтіңіз", url=game_link)
    game_kz.add(JetX, game)

    photo = open('img/jetx.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Сіз JetX ойынын таңдадыңыз. \n"
                                            "Алынған коэффициентті ойында көрсетіңіз. \n \n"
                                            f"⏳ Сіздің коэффициентіңіз: x{random.uniform(by, to):.1f} \n \n"
                                            "Келесі коэффициентті 60 секундтан кейін алуға болады.",
                                    reply_markup=game_kz)


@dp.callback_query_handler(text='JetX', state=RegStates.UZ)
async def send_photo(call: types.CallbackQuery):
    game_uz = InlineKeyboardMarkup(row_width=2)
    JetX = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='JetX_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_uz.add(JetX, game)

    photo = open('img/jetx.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Siz JetX o'yinini tanladingiz. \n"
                                            "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                            f"⏳ Sizning koeffitsientingiz: x{random.uniform(by, to):.1f} \n \n"
                                            "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                    reply_markup=game_uz)


@dp.callback_query_handler(text='AirJet', state=RegStates.Russia)
async def send_photo(call: types.CallbackQuery):
    game_kb_crash_x = InlineKeyboardMarkup(row_width=2)
    AirJet = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='AirJet_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_crash_x.add(AirJet, game)

    photo = open('img/airjet.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption='Вы выбрали игру AirJet. \n'
                                            'Укажите полученный коэффициент в игре. \n \n'
                                            f'⏳ Ваш коэффициент: x{random.uniform(by, to):.1f} \n \n'
                                            'Следующий коэффициент можно получить через 60 секунд.',
                                    reply_markup=game_kb_crash_x)


@dp.callback_query_handler(text='AirJet', state=RegStates.KZ)
async def send_photo(call: types.CallbackQuery):
    game_kz = InlineKeyboardMarkup(row_width=2)
    AirJet = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='AirJet_BTN_KZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 Ойынға өтіңіз", url=game_link)
    game_kz.add(AirJet, game)

    photo = open('img/airjet.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Сіз AirJet ойынын таңдадыңыз. \n"
                                            "Алынған коэффициентті ойында көрсетіңіз. \n \n"
                                            f"⏳ Сіздің коэффициентіңіз: x{random.uniform(by, to):.1f} \n \n"
                                            "Келесі коэффициентті 60 секундтан кейін алуға болады.",
                                    reply_markup=game_kz)


@dp.callback_query_handler(text='AirJet', state=RegStates.UZ)
async def send_photo(call: types.CallbackQuery):
    game_uz = InlineKeyboardMarkup(row_width=2)
    Crash_X = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='AirJet_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_uz.add(Crash_X, game)

    photo = open('img/airjet.jfif', 'rb')

    await call.message.answer_photo(photo=photo,
                                    caption="Siz AirJet o'yinini tanladingiz. \n"
                                            "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                            f"⏳ Sizning koeffitsientingiz: x{random.uniform(by, to):.1f} \n \n"
                                            "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                    reply_markup=game_uz)


@dp.callback_query_handler(lambda call: call.data == 'Aviator_BTN', state=RegStates.Russia)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_aviator_locked

    game_kb_aviator = InlineKeyboardMarkup(row_width=2)
    Aviator = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='Aviator_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_aviator.add(Aviator, game)

    if is_action_aviator_locked:
        await call.answer("Подождите 60 секунд перед повторной попыткой.")
    else:
        is_action_aviator_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Ваш коэффициент: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Вы выбрали игру Aviator. \n'
                                                'Укажите полученный коэффициент в игре. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Следующий коэффициент можно получить через 60 секунд.',
                                        reply_markup=game_kb_aviator)

        await asyncio.sleep(60)
        is_action_aviator_locked = False


@dp.callback_query_handler(lambda call: call.data == 'Aviator_BTN_KZ', state=RegStates.KZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_aviator_locked

    game_kb_aviator = InlineKeyboardMarkup(row_width=2)
    Aviator = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='Aviator_BTN_KZ')
    game = InlineKeyboardButton(text='👨🏼‍💻 Ойынға өтіңіз', url=game_link)
    game_kb_aviator.add(Aviator, game)

    if is_action_aviator_locked:
        await call.answer("Қайта әрекет жасамас бұрын 60 секунд күтіңіз.")
    else:
        is_action_aviator_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Сіздің коэффициентіңіз: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Сіз Aviator ойынын таңдадыңыз. \n'
                                                'Алынған коэффициентті ойында көрсетіңіз. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Келесі коэффициентті 60 секундтан кейін алуға болады.',
                                        reply_markup=game_kb_aviator)

        await asyncio.sleep(60)
        is_action_aviator_locked = False


@dp.callback_query_handler(lambda call: call.data == 'Aviator_BTN_UZ', state=RegStates.UZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_aviator_locked

    game_kb_aviator = InlineKeyboardMarkup(row_width=2)
    Aviator = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='Aviator_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_kb_aviator.add(Aviator, game)

    if is_action_aviator_locked:
        await call.answer("Qayta urinishdan oldin 60 soniya kuting.")
    else:
        is_action_aviator_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Sizning koeffitsientingiz: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption="Siz Aviator o'yinini tanladingiz. \n"
                                                "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                                f"{coefficient_text} \n \n"
                                                "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                        reply_markup=game_kb_aviator)

        await asyncio.sleep(60)
        is_action_aviator_locked = False


@dp.callback_query_handler(lambda call: call.data == 'LuckyJet_BTN', state=RegStates.Russia)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_moon_locked

    game_kb_moon = InlineKeyboardMarkup(row_width=2)
    LuckyJet = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='LuckyJet_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_moon.add(LuckyJet, game)

    if is_action_moon_locked:
        await call.answer("Подождите 60 секунд перед повторной попыткой.")
    else:
        is_action_moon_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Ваш коэффициент: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Вы выбрали игру LuckyJet. \n'
                                                'Укажите полученный коэффициент в игре. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Следующий коэффициент можно получить через 60 секунд.',
                                        reply_markup=game_kb_moon)

        await asyncio.sleep(60)
        is_action_moon_locked = False


@dp.callback_query_handler(lambda call: call.data == 'LuckyJet_BTN_KZ', state=RegStates.KZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_moon_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    LuckyJet = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='LuckyJet_BTN_KZ')
    game = InlineKeyboardButton(text='👨🏼‍💻 Ойынға өтіңіз', url=game_link)
    game_kb.add(LuckyJet, game)

    if is_action_moon_locked:
        await call.answer("Қайта әрекет жасамас бұрын 60 секунд күтіңіз.")
    else:
        is_action_moon_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Сіздің коэффициентіңіз: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Сіз LuckyJet ойынын таңдадыңыз. \n'
                                                'Алынған коэффициентті ойында көрсетіңіз. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Келесі коэффициентті 60 секундтан кейін алуға болады.',
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_moon_locked = False


@dp.callback_query_handler(lambda call: call.data == 'LuckyJet_BTN_UZ', state=RegStates.UZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_moon_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    LuckyJet = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='LuckyJet_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_kb.add(LuckyJet, game)

    if is_action_moon_locked:
        await call.answer("Qayta urinishdan oldin 60 soniya kuting.")
    else:
        is_action_moon_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Sizning koeffitsientingiz: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption="Siz LuckyJet o'yinini tanladingiz. \n"
                                                "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                                f"{coefficient_text} \n \n"
                                                "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_moon_locked = False


@dp.callback_query_handler(lambda call: call.data == 'SpeedCash_BTN', state=RegStates.Russia)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_crash_locked

    game_kb_crash = InlineKeyboardMarkup(row_width=2)
    SpeedCash = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='SpeedCash_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_crash.add(SpeedCash, game)

    if is_action_crash_locked:
        await call.answer("Подождите 60 секунд перед повторной попыткой.")
    else:
        is_action_crash_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Ваш коэффициент: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Вы выбрали игру Speed&Cash. \n'
                                                'Укажите полученный коэффициент в игре. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Следующий коэффициент можно получить через 60 секунд.',
                                        reply_markup=game_kb_crash)
        await asyncio.sleep(60)
        is_action_crash_locked = False


@dp.callback_query_handler(lambda call: call.data == 'SpeedCash_BTN_KZ', state=RegStates.KZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_crash_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    SpeedCash = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='SpeedCash_BTN_KZ')
    game = InlineKeyboardButton(text='👨🏼‍💻 Ойынға өтіңіз', url=game_link)
    game_kb.add(SpeedCash, game)

    if is_action_crash_locked:
        await call.answer("Қайта әрекет жасамас бұрын 60 секунд күтіңіз.")
    else:
        is_action_crash_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Сіздің коэффициентіңіз: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Сіз SpeedCash ойынын таңдадыңыз. \n'
                                                'Алынған коэффициентті ойында көрсетіңіз. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Келесі коэффициентті 60 секундтан кейін алуға болады.',
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_crash_locked = False


@dp.callback_query_handler(lambda call: call.data == 'SpeedCash_BTN_UZ', state=RegStates.UZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_crash_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    SpeedCash = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='SpeedCash_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_kb.add(SpeedCash, game)

    if is_action_crash_locked:
        await call.answer("Qayta urinishdan oldin 60 soniya kuting.")
    else:
        is_action_crash_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Sizning koeffitsientingiz: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption="Siz SpeedCash o'yinini tanladingiz. \n"
                                                "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                                f"{coefficient_text} \n \n"
                                                "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_crash_locked = False


@dp.callback_query_handler(lambda call: call.data == 'SpaceMan_BTN', state=RegStates.Russia)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_crash_x_locked

    game_kb_crash_x = InlineKeyboardMarkup(row_width=2)
    SpaceMan = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='SpaceMan_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_crash_x.add(SpaceMan, game)

    if is_action_crash_x_locked:
        await call.answer("Подождите 60 секунд перед повторной попыткой.")
    else:
        is_action_crash_x_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Ваш коэффициент: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Вы выбрали игру SpaceMan. \n'
                                                'Укажите полученный коэффициент в игре. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Следующий коэффициент можно получить через 60 секунд.',
                                        reply_markup=game_kb_crash_x)

        await asyncio.sleep(60)
        is_action_crash_x_locked = False


@dp.callback_query_handler(lambda call: call.data == 'SpaceMan_BTN_KZ', state=RegStates.KZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_crash_x_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    SpaceMan = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='SpaceMan_BTN_KZ')
    game = InlineKeyboardButton(text='👨🏼‍💻 Ойынға өтіңіз', url=game_link)
    game_kb.add(SpaceMan, game)

    if is_action_crash_x_locked:
        await call.answer("Қайта әрекет жасамас бұрын 60 секунд күтіңіз.")
    else:
        is_action_crash_x_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Сіздің коэффициентіңіз: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Сіз SpaceMan ойынын таңдадыңыз. \n'
                                                'Алынған коэффициентті ойында көрсетіңіз. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Келесі коэффициентті 60 секундтан кейін алуға болады.',
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_crash_x_locked = False


@dp.callback_query_handler(lambda call: call.data == 'SpaceMan_BTN_UZ', state=RegStates.UZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_crash_x_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    SpaceMan = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='SpaceMan_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_kb.add(SpaceMan, game)

    if is_action_crash_x_locked:
        await call.answer("Qayta urinishdan oldin 60 soniya kuting.")
    else:
        is_action_crash_x_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Sizning koeffitsientingiz: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption="Siz SpaceMan o'yinini tanladingiz. \n"
                                                "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                                f"{coefficient_text} \n \n"
                                                "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_crash_x_locked = False


@dp.callback_query_handler(lambda call: call.data == 'JetX_BTN', state=RegStates.Russia)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_f777_locked

    game_kb_777 = InlineKeyboardMarkup(row_width=2)
    JetX = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='JetX_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_777.add(JetX, game)

    if is_action_f777_locked:
        await call.answer("Подождите 60 секунд перед повторной попыткой.")
    else:
        is_action_f777_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Ваш коэффициент: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Вы выбрали игру JetX. \n'
                                                'Укажите полученный коэффициент в игре. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Следующий коэффициент можно получить через 60 секунд.',
                                        reply_markup=game_kb_777)

        await asyncio.sleep(60)
        is_action_f777_locked = False


@dp.callback_query_handler(lambda call: call.data == 'JetX_BTN_KZ', state=RegStates.KZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_f777_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    JetX = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='JetX_BTN_KZ')
    game = InlineKeyboardButton(text='👨🏼‍💻 Ойынға өтіңіз', url=game_link)
    game_kb.add(JetX, game)

    if is_action_f777_locked:
        await call.answer("Қайта әрекет жасамас бұрын 60 секунд күтіңіз.")
    else:
        is_action_f777_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Сіздің коэффициентіңіз: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Сіз JetX ойынын таңдадыңыз. \n'
                                                'Алынған коэффициентті ойында көрсетіңіз. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Келесі коэффициентті 60 секундтан кейін алуға болады.',
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_f777_locked = False


@dp.callback_query_handler(lambda call: call.data == 'JetX_BTN_UZ', state=RegStates.UZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_f777_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    JetX = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='JetX_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_kb.add(JetX, game)

    if is_action_f777_locked:
        await call.answer("Qayta urinishdan oldin 60 soniya kuting.")
    else:
        is_action_f777_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Sizning koeffitsientingiz: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption="Siz JetX o'yinini tanladingiz. \n"
                                                "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                                f"{coefficient_text} \n \n"
                                                "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_f777_locked = False


@dp.callback_query_handler(lambda call: call.data == 'AirJet_BTN', state=RegStates.Russia)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_mriya_locked

    game_kb_mriya = InlineKeyboardMarkup(row_width=2)
    AirJet = InlineKeyboardButton(text='⏳ Следующий Коэффициент', callback_data='AirJet_BTN')
    game = InlineKeyboardButton(text='👨🏼‍💻 Перейти в Игру', url=game_link)
    game_kb_mriya.add(AirJet, game)

    if is_action_mriya_locked:
        await call.answer("Подождите 60 секунд перед повторной попыткой.")
    else:
        is_action_mriya_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Ваш коэффициент: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Вы выбрали игру AirJet. \n'
                                                'Укажите полученный коэффициент в игре. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Следующий коэффициент можно получить через 60 секунд.',
                                        reply_markup=game_kb_mriya)

        await asyncio.sleep(60)
        is_action_mriya_locked = False


@dp.callback_query_handler(lambda call: call.data == 'AirJet_BTN_KZ', state=RegStates.KZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_mriya_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    AirJet = InlineKeyboardButton(text='⏳ Келесі коэффициент', callback_data='AirJet_BTN_KZ')
    game = InlineKeyboardButton(text='👨🏼‍💻 Ойынға өтіңіз', url=game_link)
    game_kb.add(AirJet, game)

    if is_action_mriya_locked:
        await call.answer("Қайта әрекет жасамас бұрын 60 секунд күтіңіз.")
    else:
        is_action_mriya_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Сіздің коэффициентіңіз: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption='Сіз AirJet ойынын таңдадыңыз. \n'
                                                'Алынған коэффициентті ойында көрсетіңіз. \n \n'
                                                f'{coefficient_text} \n \n'
                                                'Келесі коэффициентті 60 секундтан кейін алуға болады.',
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_mriya_locked = False


@dp.callback_query_handler(lambda call: call.data == 'AirJet_BTN_UZ', state=RegStates.UZ)
async def send_next_coefficient(call: types.CallbackQuery):
    global is_action_mriya_locked

    game_kb = InlineKeyboardMarkup(row_width=2)
    AirJet = InlineKeyboardButton(text='⏳ Keyingi koeffitsient', callback_data='AirJet_BTN_UZ')
    game = InlineKeyboardButton(text="👨🏼‍💻 O'yinga o'ting", url=game_link)
    game_kb.add(AirJet, game)

    if is_action_mriya_locked:
        await call.answer("Qayta urinishdan oldin 60 soniya kuting.")
    else:
        is_action_mriya_locked = True

        current_coefficient = random.uniform(by, to)
        coefficient_text = f'⏳ Sizning koeffitsientingiz: x{current_coefficient:.1f}'

        await call.message.edit_caption(caption="Siz AirJet o'yinini tanladingiz. \n"
                                                "O'yinda olingan koeffitsientni ko'rsating. \n \n"
                                                f"{coefficient_text} \n \n"
                                                "Keyingi koeffitsientni 60 soniyadan keyin olish mumkin.",
                                        reply_markup=game_kb)

        await asyncio.sleep(60)
        is_action_mriya_locked = False


if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
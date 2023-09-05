import logging
from aiogram import Bot, Dispatcher, types, executor
from aiogram.dispatcher.filters import BoundFilter
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher.filters.state import State, StatesGroup
from aiogram.types import ReplyKeyboardMarkup, InlineKeyboardMarkup, InlineKeyboardButton

from config import TOKEN
from db_main import db_start, create_author_profile, create_subscriber_profile

logging.basicConfig(level=logging.INFO)

bot = Bot(token=TOKEN)
storage = MemoryStorage()
dp = Dispatcher(bot, storage=storage)


async def on_startup(_):
    await db_start()


class UserStates(StatesGroup):
    AUTHOR = State()
    SUBSCRIBER = State()


help_kb = InlineKeyboardMarkup(row_width=2)
yes_btn = InlineKeyboardButton(text='Да', callback_data='Отлично')
no_btn = InlineKeyboardButton(text='Нет', callback_data='Нужна помощь')
help_kb.row(yes_btn, no_btn)

need_help_kb = InlineKeyboardMarkup()
need_help_btn = InlineKeyboardButton(text='Нажмите', url='https://www.google.ru/')
need_help_kb.add(need_help_btn)


@dp.callback_query_handler(text='Отлично', state=UserStates.SUBSCRIBER)
async def help_yes(callback: types.CallbackQuery):
    await callback.message.answer('Отлично!')


@dp.callback_query_handler(text='Нужна помощь', state=UserStates.SUBSCRIBER)
async def help_no(callback: types.CallbackQuery):
    await callback.message.answer(
        'Что-то не так? Помощь рядом. Нажмите на кнопку и расскажите, что случилось.',
        reply_markup=need_help_kb
    )


def get_keyboard(user=None):
    keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
    if user == 'SUBSCRIBER':
        buttons = [
            '👨‍🎨 Автор',
            '🕰 История',
            '❓ Помощь',
            '💰 Посты',
            '🗓 Подписки'
        ]

        keyboard.row(buttons[0], buttons[1])
        keyboard.row(buttons[2], buttons[3], buttons[4])
    else:
        buttons = [
            '😎 Подписчик',
            '🙏 Гид',
            '❓ FAQ',
            '💬 Поддержка',
        ]

        keyboard.row(buttons[0], buttons[1])
        keyboard.row(buttons[2], buttons[3])

    return keyboard


async def switch_sub(message):
    await message.answer(
        'Вы поменяли режим: теперь вы автор канала. '
        'Воспользуйтесь командой /guide чтобы перейти на следующий шаг.',
        reply_markup=get_keyboard()
    )
    await UserStates.AUTHOR.set()


async def switch_author(message):
    await message.answer(
        'Вы поменяли режим: теперь вы подписчик и можете просматривать '
        'вашу историю донатов авторам с помощью команды /history '
        'или написать нам в поддержку через команду /support. '
        'Если вы автор канала и хотите получать донаты от читателей, '
        'поменяйте режим ещё раз с помощью команды /switch_role.',
        reply_markup=get_keyboard('SUBSCRIBER')
    )

    await UserStates.SUBSCRIBER.set()


@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    await create_subscriber_profile(subscriber_id=message.from_user.id)

    await message.answer(
        f"Отлично! Мы рады, что вы с нами. "
        f"Сейчас вы подписчик и можете просматривать вашу историю донатов авторам "
        f"с помощью команды /history или написать нам в поддержку через команду /support. "
        f"Если вы автор канала и хотите получать донаты от читателей, "
        f"поменяйте режим ещё раз с помощью команды /switch_role.",
        reply_markup=get_keyboard('SUBSCRIBER')
    )
    await UserStates.SUBSCRIBER.set()


@dp.message_handler(commands=['switch_role'], state=UserStates.SUBSCRIBER)
async def switch_role_sub(message: types.Message):
    await switch_sub(message=message)


@dp.message_handler(commands=['switch_role'], state=UserStates.AUTHOR)
async def switch_role_autor(message: types.Message):
    await switch_author(message=message)


@dp.message_handler(content_types=types.ContentTypes.TEXT, state=UserStates.SUBSCRIBER)
async def handle_message_subscriber(message: types.Message):
    if message.text == '👨‍🎨 Автор':
        await switch_sub(message=message)
    elif message.text == '💰 Посты':
        await message.answer(
            'Вы не совершали платежей.'
        )
    elif message.text in ['🗓 Подписки', '/subscriptions']:
        await message.answer(
            'У вас нет активных подписок.'
        )
    elif message.text == '❓ Помощь':
        await message.answer(
            'Вот несколько полезных команд: '
            '/history открывает список ваших предыдущих платежей. '
            '/subscriptions позволяет управлять активными подписками. '
            '/switch_role меняет ваш режим взаимодействия с ботом. '
        )

        await message.answer(
            'Вы нашли то, что искали?',
            reply_markup=help_kb
        )
    elif message.text in ['🕰 История', '/history']:
        await message.answer(
            'Кому вы отправляли деньги \n \nВы ещё никому не отправляли деньги.'
        )
    elif message.text == '/support':
        await message.answer(
            'Что-то не так? Помощь рядом. Нажмите на кнопку и расскажите, что случилось.',
            reply_markup=need_help_kb
        )


@dp.message_handler(content_types=types.ContentTypes.TEXT, state=UserStates.AUTHOR)
async def handle_message_author(message: types.Message):
    if message.text == '😎 Подписчик':
        await switch_author(message=message)
    elif message.text in ['🙏 Гид', '/guide']:
        await message.answer(
            'Откройте ваш канал > Редактировать канал > Администраторы > Добавить администратора @DonCriptBot '
            'и дать ему права публиковать сообщения и удалять чужие сообщения. '
            'Бот не будет ничего публиковать и удалять без вашего разрешения.'
        )
        await message.reply(str(message.new_chat_members))
    elif message.text == '❓ FAQ':
        await message.answer(
            '• Как создать кнопку "Пожертвовать"? \n'
            '• Как настроить подписки? \n'
            '• Как создать инвойс? \n'
            '• Как работает инвойс? \n'
            '• Что еще за комиссии и лимиты? \n'
            '• Как я могу получить свои деньги? \n'
            '• Какие есть ограничения для контента? \n'
            '• Как настроить бот? \n'
            '\n'
            '/guide сориентирует вас по процессу подключения к сервису. \n'
            '/my_profile открывает страницу с настройками и позволяет их изменить. '
            'Вы также можете проверить ваш баланс с помощью этой команды. \n'
            '/status показывает ваш текущий статус. \n'
            '/support поможет связаться с нашей службой поддержки. \n'
            '/switch_role позволяет изменить режим взаимодействия с ботом. \n'
            '/channels показывает каналы, в которые вы добавили бот. \n'
        )
    elif message.text in ['💬 Поддержка', '/support']:
        await message.answer(
            'Что-то не так? Помощь рядом. Нажмите на кнопку и расскажите, что случилось.',
            reply_markup=need_help_kb
        )
    elif message.text == '/status':
        await message.answer(
            'Ваш статус: Активен👌'
        )
    elif message.text == '/my_profile':
        await message.answer(
            'Ваши активные каналы: \n"Test" \nБаланс: 0'
        )
    elif message.text == '/channels':
        await message.answer(
            'Ваши активные каналы: \n"Test"'
        )


@dp.my_chat_member_handler()
async def on_bot_added_to_channel(update: types.ChatMemberUpdated):
    if update.from_user.is_bot and update.new_chat_member.status == "administrator":
        user_state = await dp.storage.get_data(user=update.from_user.id)
        if user_state.get("state") == UserStates.AUTHOR:
            channel_title = update.chat.title
            await update.bot.send_message(update.chat.id, f"Бот был добавлен в канал: {channel_title}")


if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True, on_startup=on_startup)

import sqlite3 as sq


async def db_start():
    global db, cur

    db = sq.connect('bot.db')
    cur = db.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS users(user_id TEXT PRIMARY KEY, coin CHAR, currency CHAR, lim INT);")

    db.commit()


async def create_user(user_id):
    user = cur.execute("SELECT 1 FROM users WHERE user_id == '{key}'".format(key=user_id)).fetchone()
    if not user:
        cur.execute("INSERT INTO users VALUES(?, ?, ?, ?)", (user_id, '', '', ''))
        db.commit()


async def edit_data(state, user_id):
    async with state.proxy() as data:
        cur.execute("UPDATE users SET coin = '{}', currency = '{}', lim = '{}' WHERE user_id == '{}'".format(
            data['coin'], data['currency'], data['limit'], user_id))
        db.commit()
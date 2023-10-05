import sqlite3 as sq

async def db_start():
    global db, cur

    db = sq.connect('tg_data.db')
    cur = db.cursor()

    cur.execute("CREATE TABLE IF NOT EXISTS author(author_id INT PRIMARY KEY, balance INT)")
    cur.execute("CREATE TABLE IF NOT EXISTS subscriber(subscriber_id INT PRIMARY KEY)")
    cur.execute("CREATE TABLE IF NOT EXISTS payments(payment_id INT PRIMARY KEY, subscriber_id INT, sum_don INT)")
    cur.execute("CREATE TABLE IF NOT EXISTS chanel(chanel_id INT PRIMARY KEY, author_id INT, cost INT, name TEXT)")
    cur.execute("CREATE TABLE IF NOT EXISTS subscriptions("
                "subscriptions_id INT PRIMARY KEY, sub_id INT, chanel_id INT, status TEXT, date_start DATA, date_end DATA"
                ")")

    db.commit()


async def create_author_profile(author_id):
    user = cur.execute("SELECT 1 FROM author WHERE author_id == '{key}'".format(key=author_id)).fetchone()
    if not user:
        cur.execute("INSERT INTO author VALUES(?, ?)", (author_id, ''))
        db.commit()


async def create_subscriber_profile(subscriber_id):
    user = cur.execute("SELECT 1 FROM subscriber WHERE subscriber_id = ?", (subscriber_id,)).fetchone()
    if not user:
        cur.execute("INSERT INTO subscriber VALUES(?)", (subscriber_id,))
        db.commit()

import requests
from time import sleep
from celery import shared_task
from django.core.exceptions import ObjectDoesNotExist

from .models import Payment, Order


@shared_task
def process_payment(order_id, card_number, amount):
    # Имитация обработки платежа
    sleep(10)

    # Имитация успешной оплаты для четных номеров заказов, заканчивающихся не на 0
    if order_id % 2 == 0 and str(order_id)[-1] != '0':
        status = 'success'
    # Имитация ошибки оплаты для четных номеров заказов, заканчивающихся на 0
    elif order_id % 2 == 0 and str(order_id)[-1] == '0':
        status = 'error'
    else:
        status = 'pending'

    # Сохранение информации об оплате в базу данных
    payment = Payment(order_id=order_id, card_number=card_number, amount=amount, status=status)
    payment.save()


@shared_task
def process_payment(order_id):
    try:
        order = Order.objects.get(id=order_id)
        url = ''
        data = {'order_number': order.order_number,
                'card_number': order.card_number,
                'amount': order.amount}
        response = requests.post(url, data=data)
        if response.status_code == 200:
            order.payment_status = 'PAID'
            order.save()
        else:
            order.payment_status = 'ERROR'
            order.save()
    except ObjectDoesNotExist:
        pass



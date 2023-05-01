import random

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .tasks import process_payment
from .models import Payment, Order


@csrf_exempt
def add_payment_to_queue(request):
    if request.method == 'POST':
        order_id = request.POST.get('order_id')
        card_number = request.POST.get('card_number')
        amount = request.POST.get('amount')
        process_payment.delay(order_id, card_number, amount)
        return JsonResponse({'message': f'Order {order_id} added to payment queue'})
    else:
        return JsonResponse({'error': 'Invalid request method'})


@csrf_exempt
def get_payment_status(request):
    if request.method == 'POST':
        order_id = request.POST.get('order_id')
        try:
            payment = Payment.objects.get(order_id=order_id)
            return JsonResponse({'status': payment.status})
        except Payment.DoesNotExist:
            return JsonResponse({'error': f'Payment for order {order_id} does not exist'})
    else:
        return JsonResponse({'error': 'Invalid request method'})


def process_order(request):
    if request.method == 'POST':
        order_number = request.POST.get('order_number')
        card_number = request.POST.get('card_number')
        amount = request.POST.get('amount')
        order = Order.objects.create(order_number=order_number,
                                     card_number=card_number,
                                     amount=amount)
        process_payment.apply_async(args=[order.id])
        return JsonResponse({'success': True})


@csrf_exempt
def process_payment(request):
    if request.method == 'POST':
        order_number = request.POST.get('order_number')
        card_number = request.POST.get('card_number')
        amount = request.POST.get('amount')

        if int(order_number) % 2 == 0 and not order_number.endswith('0'):
            status = 'success'
        else:
            if int(order_number) % 2 == 0 and order_number.endswith('0'):
                status = random.choice(['card_error', 'insufficient_funds'])
            else:
                status = 'card_error'

        payment = Payment.objects.create(
            order_number=order_number,
            card_number=card_number,
            amount=amount,
            status=status
        )

        return JsonResponse({'status': status})
    else:
        return JsonResponse({'error': 'Invalid request method'})
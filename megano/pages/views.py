from django.shortcuts import render

from products.models import Basket, Order


def about(request):
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
    }

    return render(request, 'pages/about.html', context)


def payment(request, order_id):
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
        'user': request.user,
        'order_id': order_id
    }

    return render(request, 'pages/payment.html', context)


def payment_good(request, order_id):
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
        'order_id': order_id
    }

    Order.objects.filter(id=order_id).update(pay_status=True, status='Доставляется')

    return render(request, 'pages/good.html', context)


def payment_someone(request):
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
    }

    return render(request, 'pages/paymentsomeone.html', context)


def progress_payment(request):
    baskets = Basket.objects.filter(user_id=request.user.pk)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
    }

    return render(request, 'pages/progressPayment.html', context)
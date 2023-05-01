from django.shortcuts import render

from products.models import Basket


def about(request):
    baskets = Basket.objects.filter(user=request.user)

    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
    }

    return render(request, 'pages/about.html', context)


def payment(request):
    baskets = Basket.objects.filter(user=request.user)

    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
        'user': request.user
    }

    return render(request, 'pages/payment.html', context)


def payment_someone(request):
    baskets = Basket.objects.filter(user=request.user)

    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
    }

    return render(request, 'pages/paymentsomeone.html', context)


def progress_payment(request):
    baskets = Basket.objects.filter(user=request.user)

    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
    }

    return render(request, 'pages/progressPayment.html', context)
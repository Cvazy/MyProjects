from django.shortcuts import render

from products.models import Basket, Category


def header(request):
    baskets = Basket.objects.filter(user=request.user)

    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'total_sum': total_sum,
        'categories': Category.objects.all()
    }

    return render(request, 'base/header.html', context)
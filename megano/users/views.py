from django.shortcuts import render, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse

from products.models import Basket
from users.forms import UserProfileForm, OrderForm


@login_required
def profile(request):
    baskets = Basket.objects.filter(user=request.user)

    total_sum = sum(basket.sum() for basket in baskets)

    if request.method == 'POST':
        form = UserProfileForm(data=request.POST, files=request.FILES, instance=request.user)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('users:profile'))
    else:
        form = UserProfileForm(instance=request.user)

    context = {
        'form': form,
        'baskets': baskets,
        'total_sum': total_sum,
    }

    def phone_split(self):
        return ' '.join([(self[0:3]), self[4:6], '-', self[7:8], '-', self[9:10]])

    return render(request, 'users/profile.html', context)


def order(request):
    baskets = Basket.objects.filter(user=request.user)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'baskets': baskets,
        'baskets_count': baskets.count(),
        'total_sum': total_sum,
    }

    return render(request, 'users/order.html', context)


# @login_required
# def order(request):
#     baskets = Basket.objects.filter(user=request.user)
#     total_sum = sum(basket.sum() for basket in baskets)
#
#     context = {
#         'baskets': baskets,
#         'baskets_count': baskets.count(),
#         'total_sum': total_sum
#     }
#
#     if request.method == 'POST':
#         delivery_type = request.POST.get('delivery_type')
#         payment_type = request.POST.get('payment_type')
#         address = request.POST.get('address')
#         city = request.POST.get('city')
#         order = Order.objects.create(
#             delivery_type=delivery_type,
#             payment_type=payment_type,
#             address=address,
#             city=city,
#         )
#
#         context['order'] = order
#         context['order_id'] = order.id
#
#     return render(request, 'users/order.html', context)


@login_required
def account(request):
    baskets = Basket.objects.filter(user=request.user)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'baskets': baskets,
        'baskets_count': baskets.count(),
        'total_sum': total_sum,
        'user': request.user
    }

    return render(request, 'users/account.html', context)


@login_required
def one_order(request):
    baskets = Basket.objects.filter(user=request.user)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'baskets': baskets,
        'baskets_count': baskets.count(),
        'total_sum': total_sum,
        'user': request.user
    }

    return render(request, 'users/oneorder.html', context)


@login_required
def history_order(request):
    baskets = Basket.objects.filter(user=request.user)
    total_sum = sum(basket.sum() for basket in baskets)

    context = {
        'baskets': baskets,
        'baskets_count': baskets.count(),
        'total_sum': total_sum,
        'user': request.user
    }

    return render(request, 'users/historyorder.html', context)
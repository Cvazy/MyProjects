from products.models import Basket


def basket_count():
    count = 0
    list_count = [count['quantity'] for count in Basket.objects.all().values('quantity')]
    for i in list_count:
        count += i
    return count

from .basket_count_items import basket_count
from .models import Basket


def baskets(request):
    user = request.user
    return {
        'baskets': Basket.objects.filter(user=user) if user.is_authenticated else []
    }


def count(request):
    return {
        'count': basket_count()
    }
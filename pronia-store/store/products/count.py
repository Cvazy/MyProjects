from .models import Products


def category_count(category_name):
    count = Products.objects.filter(category__name=category_name)

    return count


def color_count(color_name):
    count = Products.objects.filter(color__name=color_name)

    return count

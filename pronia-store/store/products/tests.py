from http import HTTPStatus

from django.test import TestCase
from django.urls import reverse

from .models import Index, IndexBanner, IndexImage, \
    Products, Achievements, Categories, Tag, Color


class IndexViewTest(TestCase):
    fixtures = [
        'achievements.json',
        'index.json',
        'index-banners.json',
        'index-images.json',
        'categories.json',
        'tag.json',
        'color.json',
        'products.json',
    ]

    def test_view(self):
        path = reverse('index')
        response = self.client.get(path)

        self.assertEquals(response.status_code, HTTPStatus.OK)

        self.assertTemplateUsed(response, 'products/index.html')
        
        self.assertEquals(
            list(response.context_data['titles']),
            list(Index.objects.all())
        )

        self.assertEquals(
            list(response.context_data['images']),
            list(IndexImage.objects.filter(main_item=1))
        )

        self.assertEquals(
            response.context_data['big_banner'],
            IndexBanner.objects.last()
        )

        self.assertEquals(
            list(response.context_data['banners']),
            list(IndexBanner.objects.exclude(name='Indoore Plant'))
        )

        self.assertEquals(
            list(response.context_data['main_products']),
            list(Products.objects.filter(main_index=True))
        )

        self.assertEquals(
            list(response.context_data['bestseller_products']),
            list(Products.objects.filter(main_index=True, bestseller_index=True))
        )

        self.assertEquals(
            list(response.context_data['latest_products']),
            list(Products.objects.filter(main_index=True, latest_index=True))
        )

        self.assertEquals(
            list(response.context_data['achievements']),
            list(Achievements.objects.all())
        )


class ProductsViewTest(TestCase):
    fixtures = [
        'categories.json',
        'tag.json',
        'color.json',
        'products.json',
        'index-banners.json',
    ]

    def setUp(self):
        self.products = Products.objects.all()

    def test_list(self):
        path = reverse('products:index')
        response = self.client.get(path)

        self._common_test(response)

        self.assertEquals(
            list(response.context_data['object_list']),
            list(self.products[:6])
        )

        self.assertEquals(
            list(response.context_data['categories']),
            list(Categories.objects.all())
        )

        self.assertEquals(
            list(response.context_data['tags']),
            list(Tag.objects.all())
        )

        self.assertEquals(
            response.context_data['prod_all'],
            Products.objects.all().count()
        )

        self.assertEquals(
            response.context_data['col_all'],
            Color.objects.all().count()
        )

        self.assertEquals(
            response.context_data['banner'],
            IndexBanner.objects.last()
        )

    def test_list_with_category(self):
        category = Categories.objects.first()
        path = reverse('products:categories', kwargs={'category_name': category.name})
        response = self.client.get(path)

        self._common_test(response)

        self.assertEquals(
            list(response.context_data['object_list']),
            list(self.products.filter(category_id=category.id))
        )

    def _common_test(self, response):
        self.assertEquals(response.status_code, HTTPStatus.OK)
        self.assertTemplateUsed(response, 'products/shop.html')

from decimal import Decimal
import datetime

from rest_framework import serializers

from products.models import Products, Tags, Category, Reviews, Feature, Order


class BasketSerializer(serializers.ModelSerializer):
    count = serializers.SerializerMethodField()
    price = serializers.SerializerMethodField()
    images = serializers.StringRelatedField(many=True)
    href = serializers.StringRelatedField()

    class Meta:
        model = Products
        fields = '__all__'

    def get_name(self, obj):
        return self.context.get(str(obj.pk)).get('name')

    def get_price(self, obj):
        return Decimal(self.context.get(str(obj.pk)).get('price'))


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        exclude = ['name']


class SpecificationsSerializer(serializers.ModelSerializer):
    specification_name = serializers.StringRelatedField()
    name = serializers.StringRelatedField()

    class Meta:
        model = Feature
        exclude = ['id', 'product']


class ReviewSerializer(serializers.ModelSerializer):
    date = serializers.SerializerMethodField()

    class Meta:
        model = Reviews
        fields = ['name', 'email', 'text', 'rate', 'product']

    def get_date(self, instance):
        date = instance.date + datetime.timedelta(hours=3)
        return datetime.datetime.strftime(date, '%d.%m.%Y %H:%M')


class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    description = serializers.StringRelatedField()
    tags = TagsSerializer(many=True, required=False)
    specifications = SpecificationsSerializer(many=True, required=False)
    reviews = ReviewSerializer(many=True, required=False)
    href = serializers.StringRelatedField()
    photoSrc = serializers.SerializerMethodField()
    categoryName = serializers.StringRelatedField()
    price = serializers.SerializerMethodField()
    id = serializers.IntegerField()

    class Meta:
        model = Products
        exclude = ['limited_edition']

    def get_photoSrc(self, instance):
        src = [str(instance.images.first())]
        return src

    def get_images(self, instance):
        images = []
        images_tmp = instance.images.all()
        for image in images_tmp:
            images.append(image.__str__())
        return images

    def get_price(self, instance):
        salePrice = instance.sales.first()
        if salePrice:
            return salePrice.salePrice
        return instance.price


class OrderSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)
    fio = serializers.StringRelatedField()
    email = serializers.StringRelatedField()
    phone = serializers.StringRelatedField()
    createdAt = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = '__all__'

    def get_createdAt(self, instance):
        date = instance.createdAt + datetime.timedelta(hours=3)
        return datetime.datetime.strftime(date, '%d.%m.%Y %H:%M')

    def create(self, validated_data):
        products_tmp = (validated_data.pop('products'))
        products_id = [dict(product).get('id') for product in products_tmp]
        products = Products.objects.filter(pk__in=products_id)
        for product in products:
            print(product)
        order = Order.objects.create(**validated_data)
        order.products.set(products)
        return order

    def update(self, instance, validated_data):
        products_id = [dict(product).get('id') for product in validated_data.get('products')]
        products = Products.objects.filter(pk__in=products_id)
        instance.city = validated_data.get('city')
        instance.address = validated_data.get('address')
        instance.deliveryType = validated_data.get('deliveryType')
        instance.paymentType = validated_data.get('paymentType')
        instance.status = validated_data.get('status')
        instance.products.set(products)
        instance.save()
        return instance

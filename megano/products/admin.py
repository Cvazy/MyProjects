from django.contrib import admin

from .models import Category, Products, Basket, ProductsImages, Review, Feature, Tags

admin.site.register(Category)
admin.site.register(Tags)
admin.site.register(Review)


class ProductsImageInLine(admin.TabularInline):
    model = ProductsImages
    extra = 0


class FeatureInLine(admin.TabularInline):
    model = Feature
    extra = 0


class BasketInLine(admin.TabularInline):
    model = Basket
    fields = ('shop', 'price', 'quantity', 'created_timestamp')
    readonly_fields = ('created_timestamp',)
    extra = 0


@admin.register(Products)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category')
    inlines = [ProductsImageInLine, FeatureInLine]


@admin.register(ProductsImages)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Feature)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Basket)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('shop', 'price', 'quantity')
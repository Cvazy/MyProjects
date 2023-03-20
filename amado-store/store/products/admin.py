from django.contrib import admin

from .models import Category, Shop, Brands, \
    Basket, BasketItem, ShopImage

admin.site.register(Category)
admin.site.register(Brands)
admin.site.register(BasketItem)


class ShopImageInLine(admin.TabularInline):
    model = ShopImage
    extra = 0


class BasketInLine(admin.TabularInline):
    model = Basket
    fields = ('shop', 'price', 'quantity', 'created_timestamp')
    readonly_fields = ('created_timestamp',)
    extra = 0


@admin.register(Shop)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category')
    inlines = [ShopImageInLine]


@admin.register(ShopImage)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Basket)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('shop', 'price', 'quantity')
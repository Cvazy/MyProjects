from django.contrib import admin

from .models import *

admin.site.register(Categories)
admin.site.register(Color)
admin.site.register(Tag)
admin.site.register(IndexImage)
admin.site.register(IndexBanner)
admin.site.register(Achievements)


class ShopImageInLine(admin.TabularInline):
    model = ShopImage
    extra = 0


class IndexImageInLine(admin.TabularInline):
    model = IndexImage
    extra = 0


@admin.register(Products)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category', 'main_index', 'bestseller_index', 'latest_index', 'stock')
    inlines = [ShopImageInLine]
    search_fields = ('name',)


@admin.register(Index)
class IndexAdmin(admin.ModelAdmin):
    inlines = [IndexImageInLine]


class BasketAdmin(admin.TabularInline):
    model = Basket
    fields = ('product', 'quantity')
    extra = 0


class WishlistAdmin(admin.TabularInline):
    model = Wishlist
    fields = ('product',)
    extra = 0
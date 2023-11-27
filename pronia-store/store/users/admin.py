from django.contrib import admin

from products.admin import BasketAdmin, WishlistAdmin

from .models import User, EmailVerification


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    inlines = (BasketAdmin, WishlistAdmin)


@admin.register(EmailVerification)
class EmailVerification(admin.ModelAdmin):
    list_display = ('code', 'user', 'expiration')
    fields = ('code', 'user', 'created', 'expiration')
    readonly_fields = ('created',)
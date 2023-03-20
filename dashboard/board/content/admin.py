from django.contrib import admin

from content.models import Sidebar, Notes, Employees, \
    Weather, WeatherImage, Modal, User

admin.site.register(Modal)
admin.site.register(User)


class WeatherImageInLine(admin.TabularInline):
    model = WeatherImage
    extra = 0


@admin.register(Weather)
class ProductAdmin(admin.ModelAdmin):
    readonly_fields = ["created_at", "updated_at"]
    inlines = [WeatherImageInLine]


@admin.register(Sidebar)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'image')


@admin.register(WeatherImage)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Employees)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('employee', 'phone')


@admin.register(Notes)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name',)
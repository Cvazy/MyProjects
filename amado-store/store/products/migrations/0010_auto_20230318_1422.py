# Generated by Django 3.2.16 on 2023-03-18 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_basket_sale'),
    ]

    operations = [
        migrations.AddField(
            model_name='shop',
            name='index',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='shop',
            name='index_image',
            field=models.ImageField(blank=True, upload_to='index_images'),
        ),
    ]
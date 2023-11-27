# Generated by Django 3.2.13 on 2023-03-30 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20230330_2003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='index',
            name='image',
            field=models.ImageField(upload_to='main_images'),
        ),
        migrations.AlterField(
            model_name='indeximage',
            name='image',
            field=models.ImageField(blank=True, upload_to='main_images'),
        ),
        migrations.AlterField(
            model_name='products',
            name='image',
            field=models.ImageField(upload_to='products_images'),
        ),
        migrations.AlterField(
            model_name='shopimage',
            name='image',
            field=models.ImageField(blank=True, upload_to='products_images'),
        ),
    ]
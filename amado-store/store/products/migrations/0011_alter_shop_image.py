# Generated by Django 3.2.16 on 2023-03-18 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0010_auto_20230318_1422'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='image',
            field=models.ImageField(null=True, upload_to='products_images'),
        ),
    ]
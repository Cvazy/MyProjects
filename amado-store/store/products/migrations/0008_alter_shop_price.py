# Generated by Django 3.2.16 on 2023-03-13 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_auto_20230313_1631'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='price',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=10),
        ),
    ]

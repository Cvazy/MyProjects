# Generated by Django 3.2.13 on 2023-04-01 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20230331_2301'),
    ]

    operations = [
        migrations.CreateModel(
            name='BannerUnderVideo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.PositiveIntegerField(max_length=10)),
                ('name', models.CharField(max_length=16)),
            ],
            options={
                'verbose_name_plural': 'BannerUnderVideo',
            },
        ),
    ]

# Generated by Django 3.2.13 on 2023-03-30 16:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Index',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('description', models.TextField()),
                ('dop_description', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(upload_to='media/main_images')),
                ('client_index', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('price', models.DecimalField(decimal_places=1, max_digits=6)),
                ('description', models.TextField(blank=True, null=True)),
                ('size', models.CharField(max_length=32)),
                ('stock', models.BooleanField(default=False)),
                ('image', models.ImageField(upload_to='media/products_images')),
                ('main_index', models.BooleanField(default=False)),
                ('bestseller_index', models.BooleanField(default=False)),
                ('created_data', models.DateField(auto_now_add=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.categories')),
                ('color', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.color')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.tag')),
            ],
        ),
    ]

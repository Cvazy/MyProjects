# Generated by Django 3.2.13 on 2023-03-31 20:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0010_auto_20230331_2020'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='SmallIndexBanner',
            new_name='IndexBanner',
        ),
        migrations.DeleteModel(
            name='BigIndexBanner',
        ),
        migrations.AlterModelOptions(
            name='indexbanner',
            options={'verbose_name_plural': 'IndexBanner'},
        ),
    ]

# Generated by Django 4.0.3 on 2022-12-09 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobile',
            name='sold',
            field=models.BooleanField(default=False),
        ),
    ]
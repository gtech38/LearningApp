# Generated by Django 3.0.8 on 2020-08-03 04:47

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mydeck', '0007_auto_20200803_0444'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='card_content',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=800), blank=True, default=list, size=10),
        ),
        migrations.AlterField(
            model_name='deck',
            name='deck_cards',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=10), blank=True, default=list, size=10),
        ),
    ]

# Generated by Django 3.1 on 2020-09-18 08:13

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('mydeck', '0003_auto_20200918_0242'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='deck_id',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='mydeck.deck'),
        ),
        migrations.AlterField(
            model_name='card',
            name='slug',
            field=models.CharField(blank=True, default='', editable=False, max_length=64),
        ),
        migrations.AlterField(
            model_name='card',
            name='uid',
            field=models.CharField(blank=True, default=uuid.uuid4, editable=False, max_length=32, unique=True),
        ),
        migrations.AlterField(
            model_name='deck',
            name='slug',
            field=models.CharField(blank=True, editable=False, max_length=64),
        ),
        migrations.AlterField(
            model_name='deck',
            name='uid',
            field=models.UUIDField(blank=True, default=uuid.uuid4, editable=False, unique=True),
        ),
    ]

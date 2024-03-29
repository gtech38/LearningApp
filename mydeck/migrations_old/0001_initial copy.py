# Generated by Django 3.1 on 2020-09-12 20:20

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Deck',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deck_name', models.CharField(default='0', max_length=20)),
                ('cards_deck', models.JSONField(default=list)),
            ],
        ),
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_type', models.CharField(default='flash', max_length=10)),
                ('card_content', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=800), blank=True, default=list, size=10)),
                ('deck', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cards', to='mydeck.deck')),
            ],
        ),
    ]

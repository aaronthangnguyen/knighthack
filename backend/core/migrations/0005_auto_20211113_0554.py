# Generated by Django 3.2.6 on 2021-11-13 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20211113_0534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='start_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]

# Generated by Django 2.2.6 on 2019-11-06 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TestModel', '0034_auto_20191106_0820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sysclock',
            name='time',
            field=models.CharField(max_length=30),
        ),
    ]
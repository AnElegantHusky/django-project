# Generated by Django 2.2.6 on 2019-11-06 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TestModel', '0031_dic_testtime'),
    ]

    operations = [
        migrations.CreateModel(
            name='sysclock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.IntegerField(default=0)),
            ],
        ),
    ]

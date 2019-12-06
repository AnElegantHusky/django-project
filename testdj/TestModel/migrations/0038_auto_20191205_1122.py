# Generated by Django 2.2.6 on 2019-12-05 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TestModel', '0037_staff'),
    ]

    operations = [
        migrations.CreateModel(
            name='realclock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('realtime', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.AddField(
            model_name='staff',
            name='staff_already_exist',
            field=models.CharField(default='no', max_length=128),
        ),
    ]
# Generated by Django 2.2.5 on 2019-12-03 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('star', models.IntegerField(default=0)),
                ('reason_1', models.TextField(default=False)),
                ('reason_2', models.TextField(default=False)),
                ('reason_3', models.TextField(default=False)),
                ('reason_4', models.TextField(default=False)),
                ('reason_5', models.TextField(default=False)),
                ('reason_6', models.TextField(default=False)),
                ('context', models.TextField()),
            ],
        ),
    ]
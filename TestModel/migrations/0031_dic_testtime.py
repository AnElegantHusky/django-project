# Generated by Django 2.2.6 on 2019-10-28 02:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TestModel', '0030_remove_dic_testtime'),
    ]

    operations = [
        migrations.AddField(
            model_name='dic',
            name='testtime',
            field=models.CharField(default=0, max_length=200),
        ),
    ]

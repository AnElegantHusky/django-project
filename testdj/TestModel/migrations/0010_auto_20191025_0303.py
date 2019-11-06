# Generated by Django 2.2.6 on 2019-10-25 03:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TestModel', '0009_dic_report_num'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dic',
            name='COMMUNITY_ID',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='DISPOSE_UNIT_ID',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='DISTRICT_ID',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='EVENT_PROPERTY_ID',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='EVENT_SRC_ID',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='EVENT_TYPE_ID',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='INTIME_ARCHIVE_NUM',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='INTIME_TO_ARCHIVE_NUM',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='MAIN_TYPE_ID',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='OPERATE_NUM',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='OVERTIME_ARCHIVE_NUM',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='REC_ID',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='REPORT_NUM',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='STREET_ID',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dic',
            name='SUB_TYPE_ID',
            field=models.CharField(max_length=200),
        ),
    ]
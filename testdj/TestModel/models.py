# models.py
#coding:utf8
from django.db import models



class Test(models.Model):
    name = models.CharField(max_length=20)
    test = models.IntegerField(default=0)
    testnum = models.CharField(max_length=20)

class Contact(models.Model):
    name = models.CharField(max_length=200)
    age = models.IntegerField(default=0)
    email = models.EmailField()

    def __unicode__(self):
        return self.name

class sysclock(models.Model):
    
    time =models.CharField(max_length=30)
    #realtime=models.DateTimeField(auto_now=True,default=0)
# class realclock(models.Model):
#     realtime = models.DateTimeField(auto_now=True)
class Tag(models.Model):
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE, )
    name = models.CharField(max_length=50)

    def __unicode__(self):
        return self.name
class Dic(models.Model):

    REPORT_NUM=models.CharField(max_length=200)
    EVENT_PROPERTY_NAME=models.CharField(max_length=200)
    EVENT_TYPE_ID=models.CharField(max_length=200)
    EVENT_TYPE_NAME=models.CharField(max_length=200)
    EVENT_SRC_NAME=models.CharField(max_length=200)
    DISTRICT_ID=models.CharField(max_length=200)
    INTIME_ARCHIVE_NUM=models.CharField(max_length=200)
    SUB_TYPE_ID=models.CharField(max_length=200)
    DISTRICT_NAME=models.CharField(max_length=200)
    COMMUNITY_ID=models.CharField(max_length=200)
    REC_ID=models.CharField(max_length=200)
    STREET_ID=models.CharField(max_length=200)
    OVERTIME_ARCHIVE_NUM=models.CharField(max_length=200)
    OPERATE_NUM=models.CharField(max_length=200)
    DISPOSE_UNIT_ID=models.CharField(max_length=200)
    STREET_NAME=models.CharField(max_length=200)
    CREATE_TIME=models.CharField(max_length=200)
    EVENT_SRC_ID=models.CharField(max_length=200)
    INTIME_TO_ARCHIVE_NUM=models.CharField(max_length=200)
    SUB_TYPE_NAME=models.CharField(max_length=200)
    EVENT_PROPERTY_ID=models.CharField(max_length=200)
    OCCUR_PLACE=models.CharField(max_length=200)
    COMMUNITY_NAME=models.CharField(max_length=200)
    DISPOSE_UNIT_NAME=models.CharField(max_length=200)
    MAIN_TYPE_NAME=models.CharField(max_length=200)
    MAIN_TYPE_ID=models.CharField(max_length=200)
    testtime=models.CharField(max_length=200,default=0)

class user1(models.Model):
    username=models.CharField(max_length=200)
    userkeyword=models.CharField(max_length=200)
    userdepart=models.CharField(max_length=200)

class Comment(models.Model):
    #user = models.CharField(max_length=64)
    #date = models.DateField()
    star = models.IntegerField(default=0)

    reason_1 = models.TextField(default=False)
    reason_2 = models.TextField(default=False)
    reason_3 = models.TextField(default=False)
    reason_4 = models.TextField(default=False)
    reason_5 = models.TextField(default=False)
    reason_6 = models.TextField(default=False)

    context = models.TextField()

class Staff(models.Model):
    staff_id = models.CharField(max_length=128)
    staff_verification = models.CharField(max_length=128)
    staff_username = models.CharField(max_length=128)
    staff_already_exist = models.CharField(max_length=128,default='no')


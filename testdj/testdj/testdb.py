# -*- coding: utf-8 -*-

from django.http import HttpResponse

from TestModel.models import Test,Dic,user1

"""""
def testdb(request):
    # 初始化
    response = ""
    response1 = ""

    # 通过objects这个模型管理器的all()获得所有数据行，相当于SQL中的SELECT * FROM
    list = Contact.objects.all()

    # filter相当于SQL中的WHERE，可设置条件过滤结果
    #response2 = Test.objects.filter(id=1)

    # 获取单个对象
    #response3 = Test.objects.get(id=1)

    # 限制返回的数据 相当于 SQL 中的 OFFSET 0 LIMIT 2;
    #list=Test.objects.order_by('name')[0:3]

    # 数据排序
    #list=Test.objects.order_by("id")

    # 上面的方法可以连锁使用
    #Test.objects.filter(name="runoob").order_by("id")

    # 输出所有数据
    for var in list:
        response1 += var.name + var.email +" "
    response = response1
    return HttpResponse("<p>" + response + "</p>")
"""""
import json

def testdb1(request):

    filename = 'shujuju.json'
    with open(filename) as f:
        psq_list = json.load(f)
    data=[]
    for a in psq_list:
        data.append(a)
    for c in data:
        Dic.objects.get_or_create(**c)
        
    return HttpResponse("<p>数据添加成功！</p>")

     

def dd(request):
    Dic.objects.create(REPORT_NUM=2, EVENT_PROPERTY_NAME='2', EVENT_TYPE_ID=5, EVENT_TYPE_NAME='2',
                       EVENT_SRC_NAME='2', DISTRICT_ID=1, INTIME_ARCHIVE_NUM=1, SUB_TYPE_ID=589, DISTRICT_NAME='2',
                       COMMUNITY_ID=10017, REC_ID=117387, STREET_ID=103, OVERTIME_ARCHIVE_NUM=0, OPERATE_NUM=1,
                       DISPOSE_UNIT_ID=8536, STREET_NAME='2', CREATE_TIME='2018-11-05 14:59:49', EVENT_SRC_ID=103,
                       INTIME_TO_ARCHIVE_NUM=0, SUB_TYPE_NAME='2', EVENT_PROPERTY_ID=2, OCCUR_PLACE='-',
                       COMMUNITY_NAME='2', DISPOSE_UNIT_NAME='2', MAIN_TYPE_NAME='2',
                       MAIN_TYPE_ID=176)

    return HttpResponse("<p>数据添加成功！</p>")

def bb(request):
    response=""
    list = Test.objects.all()
    for var in list:
        response += var.name + var.testnum + " "
    return HttpResponse("<p>" + response + "</p>")

def aa(request):

    Dic.objects.all().delete()
    return HttpResponse("<p>数据添加成功！</p>")

def cc(request):

    a = [{'username':'陈昕牛逼','userkeyword':'陈昕牛逼','userdepart':'陈昕牛逼'}]
    for b in a:
        user1.objects.get_or_create(**b)
    return HttpResponse("<p>数据添加成功！</p>")

def update(request):
    a=Dic.objects.all()
    for b in a:
        number = filter(str.isdigit, (b.CREATE_TIME))
        c = 0
        for k in number:
            c = c * 10 + int(k)
        b.testtime=c
        b.save()
    return HttpResponse("<p>数据更新成功！</p>")
    # Dic.objects.create(REPORT_NUM = 2, EVENT_PROPERTY_NAME='投诉', EVENT_TYPE_ID=5 , EVENT_TYPE_NAME='市容环卫', EVENT_SRC_NAME='@坪山', DISTRICT_ID=1, INTIME_ARCHIVE_NUM=1, SUB_TYPE_ID=589, DISTRICT_NAME='坪山区', COMMUNITY_ID= 10017, REC_ID= 117387, STREET_ID=103, OVERTIME_ARCHIVE_NUM=0, OPERATE_NUM=1, DISPOSE_UNIT_ID=8536, STREET_NAME='石井街道', CREATE_TIME='2018-11-05 14:59:49', EVENT_SRC_ID=103, INTIME_TO_ARCHIVE_NUM=0, SUB_TYPE_NAME= '树木养护', EVENT_PROPERTY_ID=2, OCCUR_PLACE= '-', COMMUNITY_NAME= '石井社区', DISPOSE_UNIT_NAME='石井办事处市政服务中心（石井街道办事处）', MAIN_TYPE_NAME= '绿化养护', MAIN_TYPE_ID= 176)

    """""
    a=[{'name':'为啥2次啊'},{'name':'wodiaonima'}]
    for b in a:
        Test.objects.get_or_create(**b)
    """""
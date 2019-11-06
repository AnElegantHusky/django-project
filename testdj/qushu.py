from django.http import HttpResponse
from django.shortcuts import render
from TestModel.models import Test,Contact,Dic
from django.db.models import Q

def qushu(request):
    # 初始化
    #response = ""
    #response1 = ""

    # 通过objects这个模型管理器的all()获得所有数据行，相当于SQL中的SELECT * FROM
    #list = Contact.objects.all()
    name = request.POST.get('shequ', None)
    # filter相当于SQL中的WHERE，可设置条件过滤结果
    response = Dic.objects.filter(Q(testtime__gt=20000900000000)&Q(COMMUNITY_NAME=name)).order_by("testtime")[0:100]

    # 获取单个对象
    #response3 = Test.objects.get(id=1)

    # 限制返回的数据 相当于 SQL 中的 OFFSET 0 LIMIT 2;
    #list=Test.objects.order_by('name')[0:3]

    # 数据排序
    #list=Test.objects.order_by("id")

    # 上面的方法可以连锁使用
    #Test.objects.filter(name="runoob").order_by("id")
    list=[]
    for a in response:
        list.append(a)
    # 输出所有数据
    return render(request, 'qushu.html', {'form': list})

def qubili(request):
    name = request.POST.get('leixing', None)
    response = Dic.objects.all()
    list=[]
    list1=[]
    list2=[]
    k='none'
    for a in response:
        if (a.EVENT_PROPERTY_NAME=='投诉'):
            list.append(a)
            
        elif (a.EVENT_PROPERTY_NAME=='建议'):
            list1.append(a)
        else:
            k=a.EVENT_PROPERTY_NAME
            list2.append(a)
    bili=len(list)
    bili2=len(list1)
    bili3=len(list2)
    daan=bili/10000
    daan1=bili2/10000
    daan2=bili3/10000
    return render(request, 'bili.html', {'form': '投诉','form2':daan,'form3':'建议','form4':daan1,'form5':k,'form6':daan2})


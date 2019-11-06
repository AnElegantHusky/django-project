from django.shortcuts import render,redirect # 导入render模块
from TestModel.models import Test,user1
# 先定义一个数据列表，当然后面熟了可以从数据库里取出来

from django.http import HttpResponse

def hello(request):
    # 获取前端post过来的用户名和密码
    name = request.POST.get('name', None)

    if (name):
        Test.objects.get_or_create(name=name)
    test = Test.objects.all()
    list=[]
    for a in test:
        list.append(a.name)
    # 把用户和密码组装成字典


    return render(request, 'hello.html',{'form': list})  # 通过render模块把index.html这个文件返回到前端，并且返回给了前端一个变量form，在写html时可以调用这个form来展示list里的内容

def yanzheng(request):
    m=''
    name = request.POST.get('name', None)
    password = request.POST.get('password', None)
    truepass = user1.objects.filter(username=name)
    for i in truepass:
        m=i.userkeyword
    if(request.POST):
        if(m==password):
            return redirect("http://127.0.0.1:8000/admin")
        else:
            return HttpResponse("<p>nonono</p>")

    return render(request, 'hello.html')




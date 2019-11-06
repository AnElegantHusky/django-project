import time
from django.shortcuts import render,redirect
from TestModel.models import Test,Dic,user1
t=0

def shua():
    global t
    t=t+1

def cron():
    print("shua")

def shuaa():
    a = [{'username': '陈x牛逼', 'userkeyword': '陈昕牛逼', 'userdepart': '陈x牛逼'}]
    for b in a:
        user1.objects.create(**b)
        
def shuaxin(request):
    k={}

    if request.POST:
        return redirect("http://127.0.0.1:8000/admin")
    y=1
    k['m'] = y
    shua()
    time.sleep(1)
    return render(request, 'shuaxin.html', k)
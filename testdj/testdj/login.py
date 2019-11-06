from django.shortcuts import render,redirect
from django.http import HttpResponse
from TestModel.models import Test,Contact,Dic,user1
def log(request):
    m = ''
    if(request.POST):
        if(request.POST.get('name',None)):
            name = request.POST.get('name', None)
            password = request.POST.get('password', None)
            truepass = user1.objects.filter(username=name)[0:1]
            for i in truepass:
                m = i.userkeyword
            if (m == password):
                return redirect("http://127.0.0.1:8000/admin")
            else:
                return HttpResponse("<p>nonono</p>")
        if(request.POST.get('name2',None)):
            name = request.POST.get('name2', None)
            password = request.POST.get('password2', None)
            password2= request.POST.get('confirmpassword', None)
            worknumber = request.POST.get('worknumber', None)
            if(password==password2):
                user1.objects.create(username=name,userkeyword=password,userdepart=worknumber)
                return redirect("http://127.0.0.1:8000/admin")
            else:
                return HttpResponse("<p>nonono</p>")

    return render(request, 'index.html')
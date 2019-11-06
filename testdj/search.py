# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.shortcuts import render_to_response
from TestModel.models import Test,Contact

# 表单
def search_form(request):
    return render_to_response('search_form.html')


# 接收请求数据
def search(request):
    request.encoding = 'utf-8'
    """"
    if 'q' in request.GET and request.GET['q']:
        message = '你搜索的内容为: ' + request.GET['q']
    else:
        message = '你提交了空表单'
    """""

    if 'q' in request.GET and request.GET['q']:

        message = '你搜索的内容为: '+ request.GET['q']
        return HttpResponse(message)
    else:

        list = Contact.objects.all()
        response = ""
        response1 = ""
        for var in list:
            response1 += var.name + var.email + " "
        response = response1
        return HttpResponse("<p>" + response + "</p>")
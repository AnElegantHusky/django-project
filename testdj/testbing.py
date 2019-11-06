from django.shortcuts import render,redirect
from django.http import HttpResponse
from TestModel.models import Test,Contact,Dic,user1
import json
def bing(request):
    begintime=request.POST.get('begin', None)
    endtime=request.POST.get('end', None)
    time1=''
    time2=''
    if request.POST:
        time1=certaintime(begintime)
        time2=certaintime(endtime)

    response = Dic.objects.all()
    srtotime = 0
    swtotime = 0
    sztotime = 0
    totimeelse=0

    srintime=0
    swintime=0
    szintime=0
    intimeelse=0

    srovertime = 0
    swovertime = 0
    szovertime = 0
    overtimeelse=0


    for data in response:
        if ((data.OVERTIME_ARCHIVE_NUM == '-')and(data.INTIME_ARCHIVE_NUM == '-')and(data.testtime<=time2)and(data.testtime>=time1)):
            if (data.EVENT_TYPE_NAME == '市容环卫'):
                srtotime = srtotime + 1
            elif (data.EVENT_TYPE_NAME == '环保水务'):
                swtotime = swtotime + 1
            elif (data.EVENT_TYPE_NAME == '市政设施'):
                sztotime = sztotime + 1
            else:
                totimeelse =totimeelse+1

        if ((data.INTIME_ARCHIVE_NUM == '1')and(data.testtime<=time2)and(data.testtime>=time1)):
            if (data.EVENT_TYPE_NAME == '市容环卫'):
                srintime = srintime + 1
            elif (data.EVENT_TYPE_NAME == '环保水务'):
                swintime = swintime + 1
            elif (data.EVENT_TYPE_NAME == '市政设施'):
                szintime = szintime + 1
            else:
                intimeelse =intimeelse+1

        if ((data.OVERTIME_ARCHIVE_NUM == '1')and(data.testtime<=time2)and(data.testtime>=time1)):
            if (data.EVENT_TYPE_NAME == '市容环卫'):
                srovertime = srovertime + 1
            elif (data.EVENT_TYPE_NAME == '环保水务'):
                swovertime = swovertime + 1
            elif (data.EVENT_TYPE_NAME == '市政设施'):
                szovertime = szovertime + 1
            else:
                overtimeelse = overtimeelse + 1
    
    list =[srtotime, swtotime, sztotime, totimeelse, srintime, swintime, szintime, intimeelse, srovertime,swovertime,szovertime, overtimeelse]
    #list =[1,2,3,4,5,6,7,8,9,10,11,12]
    return render(request, 'first.html', {
        'List': json.dumps(list),'begintime':time1,'endtime':time2})
def gun(request):
    response = Dic.objects.order_by('testtime')[0:3]
    b=[]
    for a in response:
        b.append(a)
        
    return render(request, 'runing.html', {'one':b})
def certaintime(ttime):
    i = 0
    day = ''
    month = ''
    year = ''
    for a in ttime:
        if ((i == 0) and (a != '/')):
            month = month + a
        if ((i == 1) and (a != '/')):
            day = day + a
        if ((i == 2) and (a != '/')):
            year = year + a
        if (a == '/'):
            i = i + 1
    if(len(day)==1):
        day='0'+day
    if(len(month)==1):
        month='0'+month
    ctime = year + month + day + '000000'
    return ctime

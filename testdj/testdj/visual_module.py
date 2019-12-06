from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import cache_control
from TestModel.models import  Dic, sysclock ,Comment
from django.db.models import Q,Count
import json

def stringtotime(ttime):
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
    if (len(day) == 1):
        day = '0' + day
    if (len(month) == 1):
        month = '0' + month
    certiantime = year + month + day
    return certiantime

@login_required()
def home(request):
     if request.method == 'GET':
        if 'logout_submit' in request.GET:
            logout(request)
            return redirect('register-or-login')
     context = {
         'values': 1
     }
     return render(request, 'home.html', context)
def initrlt():
    current = sysclock.objects.get(id=1)
    current = current.time[0:8] + '235959'
    last = current[0:8] + '000000'
    hotspot_com = ['坪环社区', '六联社区', '碧岭社区', '汤坑社区', '沙湖社区', '马峦社区', '江岭社区', '沙坣社区', '金龟社区', '石井社区',
                   '田头社区', '田心社区', '竹坑社区', '南布社区', '坪山社区', '六和社区', '和平社区', '坑梓社区',
                   '老坑社区', '龙田社区', '秀新社区', '金沙社区', '沙田社区']
    hotspot_list_count = {i: 0 for i in hotspot_com}

    response1 = Dic.objects.values('COMMUNITY_NAME').filter(
        Q(testtime__gt=last) & Q(testtime__lt=current)).annotate(Count('COMMUNITY_NAME'))

    event_counter = {counter['COMMUNITY_NAME']: counter['COMMUNITY_NAME__count'] for counter in response1}
    for item in event_counter:
        com_name = item
        if com_name in hotspot_com:
            hotspot_list_count[com_name] = event_counter[item] *25
    rlt_list = [hotspot_list_count[i] for i in hotspot_list_count]
    return rlt_list

def initgjdm():
    current = sysclock.objects.get(id=1)
    current = current.time[0:8] + '235959'
    last = current[0:8] + '000000'
    jd = ['碧岭街道', '坑梓街道', '龙田街道', '马峦街道', '坪山街道', '石井街道']
    jd_type = ['安全隐患', '党纪政纪', '党建群团', '规土城建', '环保水务', '交通运输', '教育卫生', '劳动社保', '民政服务',
               '社区管理', '食药市监', '市容环卫', '市政设施', '统一战线', '文体旅游', '治安维稳', '专业事件采集', '组织人事']
    response = [0, 0, 0, 0, 0, 0]
    jd_count = [{i: 0 for i in jd_type} for k in range(0, 6)]
    count = response
    a = 0
    for i in jd:
        response[a] = Dic.objects.values('EVENT_TYPE_NAME').filter(
            Q(testtime__gt=last) & Q(testtime__lt=current) & Q(STREET_NAME=i)).annotate(
            Count('EVENT_TYPE_NAME'))
        count[a] = {counter['EVENT_TYPE_NAME']: counter['EVENT_TYPE_NAME__count'] for counter in response[a]}

        for item in count[a]:
            com_name = item
            if com_name in jd_type:
                jd_count[a][com_name] = count[a][item]
        a = a + 1
    gjdm_list = [[jd_count[i][n] for i in range(0, 6)] for n in jd_count[0]]
    return gjdm_list


def initsjjb():
    current = sysclock.objects.get(id=1)
    current = current.time[0:8] + '235959'
    last = current[0:8] + '000000'
    value = ['-', '1', '0']
    sjjb_list = []
    for i in value:
        response1 = Dic.objects.values('EVENT_TYPE_NAME').filter(
            Q(testtime__gt=last) & Q(testtime__lt= current) & Q(OVERTIME_ARCHIVE_NUM=i)).annotate(
            Count('EVENT_TYPE_NAME'))
        event_counter = {counter['EVENT_TYPE_NAME']: counter['EVENT_TYPE_NAME__count'] for counter in response1}
        group = ['市容环卫', '环保水务', '市政设施']
        for item in group:
            if item not in event_counter.keys():
                event_counter[item] = 0
        count_else = 0
        for item in event_counter.keys():
            if item not in group:
                count_else = count_else + event_counter[item]
        count_srhw = event_counter['市容环卫']
        count_hbsw = event_counter['环保水务']
        count_szss = event_counter['市政设施']
        sjjb_list.append([count_srhw, count_hbsw, count_szss, count_else])
    return sjjb_list

def zhexian():
    current=sysclock.objects.get(id=1)
    current=current.time[0:8]+'235959'
    last=current[0:8]+'000000'
    time_list=[[20180201000000,20180215000000],[20180215000000,20180301000000],[20180301000000,20180315000000],[20180315000000,20180401000000],
               [20180401000000,20180415000000],[20180415000000,20180501000000],[20180501000000,20180515000000],[20180515000000,20180601000000],
               [20180601000000,20180615000000],[20180615000000,20180701000000],[20180701000000,20180715000000],[20180715000000,20180801000000],
               [20180801000000,20180815000000],[20180815000000,20180901000000],[20180901000000,20180915000000],[20180915000000,20181001000000],
               [20181001000000,20181015000000],[20181015000000,20181030000000]]
    zx_list=[[],[],[],[]]
    if (int(current[0:8])>int('20181115')):
        time_list.append([20181030000000,20181115000000])
    if (int(current[0:8])>int('20181130')):
        time_list.append([20181115000000,20181130000000])
    for zx_time in time_list:
        response = Dic.objects.values('EVENT_PROPERTY_NAME').filter(
            Q(testtime__gt=zx_time[0]) & Q(testtime__lt=zx_time[1])).annotate(
            Count('EVENT_PROPERTY_NAME'))
        type_counter = {counter['EVENT_PROPERTY_NAME']: counter['EVENT_PROPERTY_NAME__count'] for counter in response}
        zx=[0,0,0,0]

        for i in type_counter:
            if (i == '投诉'):
                zx[0]=type_counter['投诉']
            if (i == '建议'):
                zx[1]=type_counter['建议']
            if (i == '咨询'):
                zx[2]=type_counter['咨询']
            if (i == '-'):
                zx[3]=zx[3]+type_counter['-']
            if (i == '求决'):
                zx[3]=zx[3]+type_counter['求决']
            if (i == '感谢'):
                zx[3]=zx[3]+type_counter['感谢']
        zx_list[0].append(zx[0])
        zx_list[1].append(zx[1])
        zx_list[2].append(zx[2])
        zx_list[3].append(zx[3])

    return zx_list

def initsix():
    current = sysclock.objects.get(id=1)
    current = current.time[0:8] + '235959'
    last = current[0:8] + '000000'
    community_statistic = Dic.objects.values('COMMUNITY_NAME').filter(Q(testtime__gt=last)
                                                                      & Q(testtime__lt=current)).annotate(
        Count('COMMUNITY_NAME'))
    community_statistic = {counter['COMMUNITY_NAME']: counter['COMMUNITY_NAME__count'] for counter in
                           community_statistic}
    community_statistic = sorted(community_statistic.items(), reverse=True, key=lambda x: x[1])
    community_statistic_name = [community_statistic[i][0] for i in range(0, 6)]
    community_statistic_num = [community_statistic[i][1] for i in range(0, 6)]
    six_List = [community_statistic_name, community_statistic_num]
    return six_List

def initmsfx():
    current = sysclock.objects.get(id=1)
    current = current.time[0:8] + '235959'
    last = current[0:8] + '000000'
    msfx_list = [0, 0, 0]
    response = Dic.objects.values('EVENT_PROPERTY_NAME').filter(
        Q(testtime__gt=last) & Q(testtime__lt=current)).annotate(
        Count('EVENT_PROPERTY_NAME'))

    type_counter = {counter['EVENT_PROPERTY_NAME']: counter['EVENT_PROPERTY_NAME__count'] for counter in response}
    for i in type_counter:
        if (i == '投诉'):
            msfx_list[0] = type_counter['投诉']
        if (i == '建议'):
            msfx_list[1] = type_counter['建议']
        if (i == '咨询'):
            msfx_list[2] = type_counter['咨询']
    return msfx_list

class S_time:
    rlt_begin='20181030000000'
    rlt_end='20181030235959'
    gjdm_begin='20181030000000'
    gjdm_end='20181030235959'
    sjjb_begin = '20181030000000'
    sjjb_end = '20181030235959'
    msfx_begin='20181030000000'
    msfx_end = '20181030235959'

class Hold:
    rlt_hold=initrlt()
    gjdm_hold=initgjdm()
    sjjb_hold=initsjjb()
    msfx_hold=initmsfx()
    six_hold=initsix()
    zx_flag=0
    zx_hold=0

@cache_control(no_cache=True, must_revalidate=True)
# @login_required()
# def homepage(request):
#     #if request.method == 'GET':
#     current=sysclock.objects.get(id=1)
#     last=current.time[0:8]+'000000'
#     #user
#     current_user = request.user
#     name = current_user.username
#     #user
#     if 'logout_submit' in request.POST:
#         logout(request)
#         return redirect('register-or-login')

#     if 'rlt_submit' in request.POST:
#         begintime = request.POST.get('begin_rlt', None)
#         endtime = request.POST.get('end_rlt', None)
#         S_time.rlt_begin = stringtotime(begintime)
#         S_time.rlt_begin = S_time.rlt_begin + '000000'
#         S_time.rlt_end = stringtotime(endtime)
#         S_time.rlt_end = S_time.rlt_end + '235959'
#         hotspot_com = ['坪环社区', '六联社区', '碧岭社区', '汤坑社区', '沙湖社区', '马峦社区', '江岭社区', '沙坣社区', '金龟社区', '石井社区',
#                        '田头社区', '田心社区', '竹坑社区', '南布社区', '坪山社区', '六和社区', '和平社区', '坑梓社区',
#                        '老坑社区', '龙田社区', '秀新社区', '金沙社区', '沙田社区']
#         hotspot_list_count = {i: 0 for i in hotspot_com}

#         response1 = Dic.objects.values('COMMUNITY_NAME').filter(
#                 Q(testtime__gt=S_time.rlt_begin) & Q(testtime__lt=S_time.rlt_end)).annotate(Count('COMMUNITY_NAME'))

#         event_counter = {counter['COMMUNITY_NAME']: counter['COMMUNITY_NAME__count'] for counter in response1}
#         for item in event_counter:
#             com_name = item
#             if com_name in hotspot_com:
#                 hotspot_list_count[com_name] = event_counter[item]*25
#         rlt_list = [hotspot_list_count[i] for i in hotspot_list_count]
#         Hold.rlt_hold = rlt_list
#         #six

#         community_statistic = Dic.objects.values('COMMUNITY_NAME').filter(Q(testtime__gt=S_time.rlt_begin) &
#                                                                           Q(testtime__lt=S_time.rlt_end)).annotate(
#             Count('COMMUNITY_NAME'))
#         community_statistic = {counter['COMMUNITY_NAME']: counter['COMMUNITY_NAME__count'] for counter in
#                                community_statistic}
#         community_statistic = sorted(community_statistic.items(), reverse=True, key=lambda x: x[1])
#         community_statistic_name = [community_statistic[i][0] for i in range(0, 6)]
#         community_statistic_num = [community_statistic[i][1] for i in range(0, 6)]
#         six_List = [community_statistic_name, community_statistic_num]
#         Hold.six_hold=six_List

#         #six

#     else:
#         rlt_list=Hold.rlt_hold
#         six_List=Hold.six_hold




#     if 'gjdm_submit' in request.POST:
#         begintime = request.POST.get('begin_gjdm', None)
#         endtime = request.POST.get('end_gjdm', None)
#         S_time.gjdm_begin = stringtotime(begintime)
#         S_time.gjdm_begin = S_time.gjdm_begin + '000000'
#         S_time.gjdm_end = stringtotime(endtime)
#         S_time.gjdm_end=S_time.gjdm_end + '235959'
#         jd=['碧岭街道','坑梓街道','龙田街道','马峦街道','坪山街道','石井街道']
#         jd_type=['安全隐患','党纪政纪','党建群团','规土城建','环保水务','交通运输','教育卫生','劳动社保','民政服务',
#                  '社区管理','食药市监','市容环卫','市政设施','统一战线','文体旅游','治安维稳','专业事件采集','组织人事']
#         response=[0,0,0,0,0,0]
#         jd_count = [{i: 0 for i in jd_type} for k in range(0,6)]
#         count=response
#         a = 0
#         for i in jd:
#             response[a]= Dic.objects.values('EVENT_TYPE_NAME').filter(
#             Q(testtime__gt=S_time.gjdm_begin) & Q(testtime__lt=S_time.gjdm_end) & Q(STREET_NAME=i)).annotate(Count('EVENT_TYPE_NAME'))
#             count[a] = {counter['EVENT_TYPE_NAME']: counter['EVENT_TYPE_NAME__count'] for counter in response[a]}

#             for item in count[a]:
#                 com_name = item
#                 if com_name in jd_type:
#                     jd_count[a][com_name] = count[a][item]
#             a = a + 1
#         gjdm_list=[[jd_count[i][n] for i in range(0,6)] for n in jd_count[0]]
#         Hold.gjdm_hold=gjdm_list
#     else:
#         gjdm_list=Hold.gjdm_hold


#     if 'sjjb_submit' in request.POST:
#         begintime = request.POST.get('begin_sjjb', None)
#         endtime = request.POST.get('end_sjjb', None)
#         S_time.sjjb_begin = stringtotime(begintime)
#         S_time.sjjb_begin = S_time.sjjb_begin + '000000'
#         S_time.sjjb_end = stringtotime(endtime)
#         S_time.sjjb_end  = S_time.sjjb_end + '235959'
#         value = ['-', '1', '0']
#         sjjb_list = []
#         for i in value:
#             response1 = Dic.objects.values('EVENT_TYPE_NAME').filter(
#                 Q(testtime__gt=S_time.sjjb_begin) & Q(testtime__lt=S_time.sjjb_end ) & Q(OVERTIME_ARCHIVE_NUM=i)).annotate(
#                 Count('EVENT_TYPE_NAME'))
#             event_counter = {counter['EVENT_TYPE_NAME']: counter['EVENT_TYPE_NAME__count'] for counter in response1}
#             group = ['市容环卫', '环保水务', '市政设施']
#             for item in group:
#                 if item not in event_counter.keys():
#                     event_counter[item] = 0
#             count_else = 0
#             for item in event_counter.keys():
#                 if item not in group:
#                     count_else = count_else + event_counter[item]
#             count_srhw = event_counter['市容环卫']
#             count_hbsw = event_counter['环保水务']
#             count_szss = event_counter['市政设施']
#             sjjb_list.append([count_srhw, count_hbsw, count_szss, count_else])
#         Hold.sjjb_hold=sjjb_list
#     else:
#         sjjb_list=Hold.sjjb_hold


#     if 'msfx_submit' in request.POST:
#         begintime = request.POST.get('begin_msfx', None)
#         endtime = request.POST.get('end_msfx', None)
#         S_time.msfx_begin = stringtotime(begintime)
#         S_time.msfx_begin  = S_time.msfx_begin  + '000000'
#         S_time.msfx_end  = stringtotime(endtime)
#         S_time.msfx_end = S_time.msfx_end + '235959'
#         msfx_list=[0,0,0]
#         response = Dic.objects.values('EVENT_PROPERTY_NAME').filter(
#             Q(testtime__gt=S_time.msfx_begin) & Q(testtime__lt=S_time.msfx_end)).annotate(
#             Count('EVENT_PROPERTY_NAME'))

#         type_counter = {counter['EVENT_PROPERTY_NAME']: counter['EVENT_PROPERTY_NAME__count'] for counter in response}
#         for i in type_counter:
#             if (i == '投诉'):
#                 msfx_list[0] = type_counter['投诉']
#             if (i == '建议'):
#                 msfx_list[1] = type_counter['建议']
#             if (i == '咨询'):
#                 msfx_list[2] = type_counter['咨询']
#         Hold.msfx_hold=msfx_list
#     else:
#         msfx_list=Hold.msfx_hold



#     #alarm SUB_TYPE_NAME COMMUNITY_NAME
#     alarm_com = ['坪环社区', '六联社区', '碧岭社区', '汤坑社区', '沙湖社区', '马峦社区', '江岭社区', '沙坣社区', '金龟社区', '石井社区',
#                    '田头社区', '田心社区', '竹坑社区', '南布社区', '坪山社区', '六和社区', '和平社区', '坑梓社区',
#                    '老坑社区', '龙田社区', '秀新社区', '金沙社区', '沙田社区']
#     alarm_tem=[]
#     for i in alarm_com:
#         alarm_list_dic = Dic.objects.values('SUB_TYPE_NAME').filter(Q(testtime__lt=current.time) &Q(testtime__gt=last)
#                                                                     &Q(EVENT_PROPERTY_NAME='投诉') & Q(COMMUNITY_NAME=i)).annotate(
#             Count('SUB_TYPE_NAME'))
#         type_counter = {counter['SUB_TYPE_NAME']: counter['SUB_TYPE_NAME__count'] for counter in alarm_list_dic}
#         for k in type_counter:
#             if (type_counter[k]>2):
#                 alarm_tem.append([i,k,type_counter[k]])

#     alarm_list=[]
#     for i in alarm_tem:
#         k= '警告！！ 在'+i[0]+' 发生了'+str(i[2])+'次'+i[1]+'类型的事件'
#         alarm_list.append(k)
#     #alarm

#     #scroll
#     scroll_list_dic = Dic.objects.filter(Q(OVERTIME_ARCHIVE_NUM=1)&Q(testtime__lt=current.time)).order_by("-testtime")[0:10]
#     scroll_list = []
#     for i in scroll_list_dic:
#         scroll_list.append(i)
#     #scroll


#     #zhexian
#     if(Hold.zx_flag==0):
#         zhexian_list=zhexian()
#         Hold.zx_hold=zhexian_list
#         Hold.zx_flag=1
#     else:
#         zhexian_list=Hold.zx_hold

#     return render(request, 'homepage.html',{
#         'msfx_List': json.dumps(msfx_list),'sjjb_List': json.dumps(sjjb_list),'rlt_List': json.dumps(rlt_list),
#         'gjdm_List': json.dumps(gjdm_list), 'six_List': json.dumps(six_List),'alarm_List':alarm_list,'scroll_List':scroll_list,
#         'zx_List':json.dumps(zhexian_list),'username':name,})

@login_required()
def pingjia(request):
    return render(request, 'pingjia.html')

def pingjia_post(request):

    star = request.POST["stars"]
    reason_1 = request.POST["reason1"]
    reason_2 = request.POST["reason2"]
    reason_3 = request.POST["reason3"]
    reason_4 = request.POST["reason4"]
    reason_5 = request.POST["reason5"]
    reason_6 = request.POST["reason6"]
    comment = request.POST["comment"]
    post_comment = Comment(star=star, reason_1=reason_1, reason_2=reason_2,
                                    reason_3=reason_3, reason_4=reason_4,
                                    reason_5=reason_5, reason_6=reason_6,
                                    context=comment)
    post_comment.save()
    return HttpResponse('')

def six_post(request):
    current = sysclock.objects.get(id=1)
    current = current.time[0:8] + '235959'
    last = current[0:8] + '000000'
    begintime = request.GET['date_rlt_begin']
    endtime = request.GET['date_rlt_end']
    S_time.rlt_begin = stringtotime(begintime)
    S_time.rlt_begin = S_time.rlt_begin + '000000'
    S_time.rlt_end = stringtotime(endtime)
    S_time.rlt_end = S_time.rlt_end + '235959'
    if(int(S_time.rlt_begin[0:8])>int(last[0:8])):
        S_time.rlt_begin=last
    if (int(S_time.rlt_end[0:8]) > int(current[0:8])):
        S_time.rlt_end = current
    hotspot_com = ['坪环社区', '六联社区', '碧岭社区', '汤坑社区', '沙湖社区', '马峦社区', '江岭社区', '沙坣社区', '金龟社区', '石井社区',
                    '田头社区', '田心社区', '竹坑社区', '南布社区', '坪山社区', '六和社区', '和平社区', '坑梓社区',
                    '老坑社区', '龙田社区', '秀新社区', '金沙社区', '沙田社区']
    hotspot_list_count = {i: 0 for i in hotspot_com}

    response1 = Dic.objects.values('COMMUNITY_NAME').filter(
            Q(testtime__gt=S_time.rlt_begin) & Q(testtime__lt=S_time.rlt_end)).annotate(Count('COMMUNITY_NAME'))

    event_counter = {counter['COMMUNITY_NAME']: counter['COMMUNITY_NAME__count'] for counter in response1}
    for item in event_counter:
        com_name = item
        if com_name in hotspot_com:
            hotspot_list_count[com_name] = event_counter[item]*25
    rlt_list = {i: hotspot_list_count[hotspot_com[i]] for i in range(0, len(hotspot_com))}


    community_statistic = Dic.objects.values('COMMUNITY_NAME').filter(Q(testtime__gt=S_time.rlt_begin) &
                                                                        Q(testtime__lt=S_time.rlt_end)).annotate(
        Count('COMMUNITY_NAME'))
    community_statistic = {counter['COMMUNITY_NAME']: counter['COMMUNITY_NAME__count'] for counter in
                            community_statistic}
    community_statistic = sorted(community_statistic.items(), reverse=True, key=lambda x: x[1])
    community_statistic_name = [community_statistic[i][0] for i in range(0, 6)]
    community_statistic_num = [community_statistic[i][1] for i in range(0, 6)]
    six_list = {'name': {i: community_statistic_name[i] for i in range(0, 6)}, 'num': {i: community_statistic_num[i] for i in range(0, 6)}}
    return JsonResponse({'rlt': rlt_list, 'six': six_list})

def gjdm_post(request):
    current = sysclock.objects.get(id=1)
    current = current.time[0:8] + '235959'
    last = current[0:8] + '000000'
    begintime = request.GET['date_gjdm_begin']
    endtime = request.GET['date_gjdm_end']
    S_time.gjdm_begin = stringtotime(begintime)
    S_time.gjdm_begin = S_time.gjdm_begin + '000000'
    S_time.gjdm_end = stringtotime(endtime)
    S_time.gjdm_end=S_time.gjdm_end + '235959'
    if(int(S_time.gjdm_begin[0:8])>int(last[0:8])):
        S_time.gjdm_begin=last
    if (int(S_time.gjdm_end[0:8]) > int(current[0:8])):
        S_time.gjdm_end = current
    jd_name = ['碧岭街道', '坑梓街道', '龙田街道','马峦街道','坪山街道','石井街道']
    event_type = ['安全隐患','党纪政纪','党建群团','规土城建','环保水务','交通运输','教育卫生','劳动社保','民政服务',
                '社区管理','食药市监','市容环卫','市政设施','统一战线','文体旅游','治安维稳','专业事件采集','组织人事']
    event_jd_count ={event: {jd: 0 for jd in jd_name} for event in event_type}
    for jd in jd_name:
        jd_event_count = Dic.objects.values('EVENT_TYPE_NAME').filter(
                Q(testtime__gt=S_time.gjdm_begin) & Q(testtime__lt=S_time.gjdm_end) & Q(STREET_NAME=jd)).annotate(Count('EVENT_TYPE_NAME'))
        for jd_event in jd_event_count:
            event_jd_count[jd_event['EVENT_TYPE_NAME']][jd] += jd_event['EVENT_TYPE_NAME__count']

    return JsonResponse(event_jd_count)

def msfx_post(request):
    current = sysclock.objects.get(id=1)
    current = current.time[0:8] + '235959'
    last = current[0:8] + '000000'

    begintime = request.GET['date_msfx_begin']
    endtime = request.GET['date_msfx_end']
    S_time.msfx_begin = stringtotime(begintime)
    S_time.msfx_begin  = S_time.msfx_begin  + '000000'
    S_time.msfx_end  = stringtotime(endtime)
    S_time.msfx_end = S_time.msfx_end + '235959'
    if(int(S_time.msfx_begin[0:8])>int(last[0:8])):
        S_time.msfx_begin=last
    if (int(S_time.msfx_end[0:8]) > int(current[0:8])):
        S_time.msfx_end = current
    msfx_list={0: 0, 1: 0, 2: 0 ,3:0}
    response = Dic.objects.values('EVENT_PROPERTY_NAME').filter(
        Q(testtime__gt=S_time.msfx_begin) & Q(testtime__lt=S_time.msfx_end)).annotate(
        Count('EVENT_PROPERTY_NAME'))
    type_counter = {counter['EVENT_PROPERTY_NAME']: counter['EVENT_PROPERTY_NAME__count'] for counter in response}
    for i in type_counter:
        if (i == '投诉'):
            msfx_list[0] = type_counter['投诉']
        if (i == '建议'):
            msfx_list[1] = type_counter['建议']
        if (i == '咨询'):
            msfx_list[2] = type_counter['咨询']
    msfx_list[3]='已显示'+S_time.msfx_begin[0:4]+'年'+S_time.msfx_begin[4:6]+'月'+S_time.msfx_begin[6:8]+'日至'+S_time.msfx_end[0:4]+'年'\
               +S_time.msfx_end[4:6]+'月'+S_time.msfx_end[6:8]+'日'
    return JsonResponse(msfx_list)

def sjjb_post(request):
    current = sysclock.objects.get(id=1)
    current = current.time[0:8] + '235959'
    last = current[0:8] + '000000'
    begintime = request.GET['date_sjjb_begin']
    endtime = request.GET['date_sjjb_end']
    S_time.sjjb_begin = stringtotime(begintime)
    S_time.sjjb_begin = S_time.sjjb_begin + '000000'
    S_time.sjjb_end = stringtotime(endtime)
    S_time.sjjb_end  = S_time.sjjb_end + '235959'
    if(int(S_time.sjjb_begin[0:8])>int(last[0:8])):
        S_time.sjjb_begin=last
    if (int(S_time.sjjb_end[0:8]) > int(current[0:8])):
        S_time.sjjb_end = current
    value = ['-', '1', '0']
    sjjb = {
        0: {0: 0, 1: 0, 2: 0, 3: 0},
        1: {0: 0, 1: 0, 2: 0, 3: 0},
        2: {0: 0, 1: 0, 2: 0, 3: 0},
        3: {0:0},
    }
    k=0
    for i in value:
        response1 = Dic.objects.values('EVENT_TYPE_NAME').filter(
            Q(testtime__gt=S_time.sjjb_begin) & Q(testtime__lt=S_time.sjjb_end ) & Q(OVERTIME_ARCHIVE_NUM=i)).annotate(
            Count('EVENT_TYPE_NAME'))

        
        event_counter = {counter['EVENT_TYPE_NAME']: counter['EVENT_TYPE_NAME__count'] for counter in response1}
        group = ['市容环卫', '环保水务', '市政设施']
        for item in group:
            if item not in event_counter.keys():
                event_counter[item] = 0
        count_else = 0
        for item in event_counter.keys():
            if item not in group:
                count_else = count_else + event_counter[item]
        count_srhw = event_counter['市容环卫']
        count_hbsw = event_counter['环保水务']
        count_szss = event_counter['市政设施']
        sjjb[k][0] = count_srhw
        sjjb[k][1] = count_hbsw
        sjjb[k][2] = count_szss
        sjjb[k][3] = count_else
        k=k+1
    sjjb[3][0]='已显示'+S_time.sjjb_begin[0:4]+'年'+S_time.sjjb_begin[4:6]+'月'+S_time.sjjb_begin[6:8]+'日至'+S_time.sjjb_end[0:4]+'年'\
               +S_time.sjjb_end[4:6]+'月'+S_time.sjjb_end[6:8]+'日'
    return JsonResponse(sjjb)

def scroll_post(request):
    current=sysclock.objects.get(id=1)
    current=current.time[0:8]+'235959'
    last=current[0:8]+'000000'
    scroll_list_dic = Dic.objects.filter(Q(OVERTIME_ARCHIVE_NUM=1)&Q(testtime__lt=current)).order_by("-testtime")[0:12]
    scroll_list = {}
    count = 0
    for i in scroll_list_dic:
        if count == 12:
            break
        scroll_list[count] = {'start_time': i.CREATE_TIME, 'location': i.COMMUNITY_NAME, 'event': i.EVENT_TYPE_NAME}
        count += 1
    alarm_com = ['坪环社区', '六联社区', '碧岭社区', '汤坑社区', '沙湖社区', '马峦社区', '江岭社区', '沙坣社区', '金龟社区', '石井社区',
                 '田头社区', '田心社区', '竹坑社区', '南布社区', '坪山社区', '六和社区', '和平社区', '坑梓社区',
                 '老坑社区', '龙田社区', '秀新社区', '金沙社区', '沙田社区']
    alarm_tem = []
    for i in alarm_com:
        alarm_list_dic = Dic.objects.values('SUB_TYPE_NAME').filter(Q(testtime__lt=current) & Q(testtime__gt=last)
                                                                    & Q(EVENT_PROPERTY_NAME='投诉') & Q(
            COMMUNITY_NAME=i)).annotate(
            Count('SUB_TYPE_NAME'))
        type_counter = {counter['SUB_TYPE_NAME']: counter['SUB_TYPE_NAME__count'] for counter in alarm_list_dic}
        for k in type_counter:
            if (type_counter[k] > 1):
                alarm_tem.append([i, k, type_counter[k]])
    alarm = {0: '暂无', 1: '暂无', 2: '暂无', 3: '暂无', 4: '暂无', 5: '暂无', 6: '暂无', 7: '暂无', 8: '暂无',}
    m=0
    for i in alarm_tem:
        k = '警告！！ 在' + i[0] + ' 发生了' + str(i[2]) + '次' + i[1] + '类型的事件' + '____' + current[0:4] + '年' + current[
                                                                                                        4:6] + '月' + current[
                                                                                                                     6:8] + '日'
        alarm[m]=k
        m=m+1
    return JsonResponse({'scroll_list': scroll_list, 'alarm_list': alarm})


def homepage(request):
    #if request.method == 'GET':
    current=sysclock.objects.get(id=1)
    current=current.time[0:8]+'235959'
    last=current[0:8]+'000000'

    moren_time=current[4:6]+'/'+current[6:8]+'/'+current[0:4]
    #user
    current_user = request.user
    name = current_user.username
    #user
    if 'logout_submit' in request.POST:
        logout(request)
        return redirect('register-or-login')

    
    
    rlt_list=Hold.rlt_hold
    six_List=Hold.six_hold

    gjdm_list=Hold.gjdm_hold
    sjjb_list=Hold.sjjb_hold
    msfx_list=Hold.msfx_hold

    #alarm SUB_TYPE_NAME COMMUNITY_NAME
    #alarm_com = ['坪环社区', '六联社区', '碧岭社区', '汤坑社区', '沙湖社区', '马峦社区', '江岭社区', '沙坣社区', '金龟社区', '石井社区',
     #              '田头社区', '田心社区', '竹坑社区', '南布社区', '坪山社区', '六和社区', '和平社区', '坑梓社区',
      #             '老坑社区', '龙田社区', '秀新社区', '金沙社区', '沙田社区']
    #alarm_tem=[]
    #for i in alarm_com:
     #   alarm_list_dic = Dic.objects.values('SUB_TYPE_NAME').filter(Q(testtime__lt=current)&Q(testtime__gt=last)
      #                                                              &Q(EVENT_PROPERTY_NAME='投诉') & Q(COMMUNITY_NAME=i)).annotate(
       #     Count('SUB_TYPE_NAME'))
       # type_counter = {counter['SUB_TYPE_NAME']: counter['SUB_TYPE_NAME__count'] for counter in alarm_list_dic}
       # for k in type_counter:
        #    if (type_counter[k]>1):
         #       alarm_tem.append([i,k,type_counter[k]])
    #alarm_list=[]
    #for i in alarm_tem:
     #   k= '警告！！ 在'+i[0]+' 发生了'+str(i[2])+'次'+i[1]+'类型的事件'+'____'+current[0:4]+'年'+current[4:6]+'月'+current[6:8]+'日'
      #  alarm_list.append(k)
    #alarm
    #scroll
    #scroll_list = []
    # scroll_list_dic = Dic.objects.filter(Q(OVERTIME_ARCHIVE_NUM=1) & Q(testtime__lt=current)).order_by(
    #   "-testtime")[0:12]
    #for i in scroll_list_dic:
    #   scroll_list.append(i)
    #scroll
    #zhexian
    if(Hold.zx_flag==0):
        zhexian_list=zhexian()
        Hold.zx_hold=zhexian_list
        Hold.zx_flag=1
    else:
        zhexian_list=Hold.zx_hold

    return render(request, 'homepage.html',{
        'msfx_List': json.dumps(msfx_list),'sjjb_List': json.dumps(sjjb_list),'rlt_List': json.dumps(rlt_list),
        'gjdm_List': json.dumps(gjdm_list), 'six_List': json.dumps(six_List),
        'zx_List':json.dumps(zhexian_list),'username':name,'moren':moren_time})
"""testdj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import *
from django.urls import path
from . import view, login, visual_module
from users import views as user_views
urlpatterns = [
    #test
    url(r'^admin/', admin.site.urls, name='admin'),
    #formal
    path('', user_views.register_or_login, name='register-or-login'),
    path('home', visual_module.home),
    # url(r'^datapie1$',visual_module.data_analyze_pie),#事件分析饼状图
    # url(r'^datapie2$',visual_module.data_analyze_smallpie),#事件分析饼状图
    # url(r'^hotspot$',visual_module.hotspot, name='hotspot'),#热力图
    # url(r'^scroll1$',visual_module.outdate_data_scrolling),#未结办滚动
    url(r'^login$', login.log),#登陆
    # url(r'^page$',visual_module.page1),
    url(r'^homepage$',visual_module.homepage),
    path('homepage/', visual_module.homepage, name='home'),
    url(r'^homepage/pingjia$', visual_module.pingjia),
    url(r'^homepage/pingjia/post/$', visual_module.pingjia_post),
    url(r'^homepage/six/post/$', visual_module.six_post),
    url(r'^homepage/gjdm/post/$', visual_module.gjdm_post),
    url(r'^homepage/msfx/post/$', visual_module.msfx_post),
    url(r'^homepage/sjjb/post/$', visual_module.sjjb_post),
    url(r'^homepage/scroll/post/$', visual_module.scroll_post),
    #url(r'^homepage/alarm/post/$', visual_module.alarm_post),
    url(r'^register/username/post/$', user_views.register_username_post),
    #path('users/', include('users.urls')),
    url(r'^users/register/username/post/$', user_views.register_username_post),
    url(r'^users/register/password1/post/$', user_views.register_password1_post),
    url(r'^users/register/password2/post/$', user_views.register_password2_post),
    url(r'^users/register/post/check/post/$', user_views.user_register),
    url(r'^users/login/post/check/post/$', user_views.user_login),
    #formal
]
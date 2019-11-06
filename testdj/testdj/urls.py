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
from django.urls import path
from django.conf.urls import *
from . import view, testdb ,search,search2,jsonceshi,advance,qushu,shuaxin,login,testbing

urlpatterns = [
    url(r'^hello$', view.yanzheng),
    url(r'^ceshi$',testbing.bing),
    url(r'^ceshigun$',testbing.gun),
    url(r'^qushu$',qushu.qushu),
    url(r'^login$',login.log),
    url(r'^bili$',qushu.qubili),
    url(r'^shuaxin$', shuaxin.shuaxin),
    url(r'^adv$',advance.adv),
    url(r'^testdb$', testdb.update),
    url(r'^search-form$', search.search_form),
    url(r'^search$', search.search),
    url(r'^search-post$', search2.search_post),
    url(r'^admin/', admin.site.urls),
    url(r'^json$', jsonceshi.index),
]
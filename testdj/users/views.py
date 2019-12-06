from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, JsonResponse
from django.template.response import TemplateResponse
from .forms import UserRegisterForm, UserLoginForm
from django.views.decorators.cache import never_cache
from django.views.decorators.debug import sensitive_post_parameters
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.hashers import make_password, check_password
from TestModel.models import Staff

@sensitive_post_parameters()
@never_cache
def register_or_login(request):
    if request.user.is_authenticated:
        return redirect('home')
    return render(request, 'users/register_or_login.html')

@sensitive_post_parameters()
@never_cache
def register_username_post(request):
    userinput = {'username': request.POST['username']}
    validation = UserCreationForm(userinput)
    validation.is_valid()
    if 'username' not in validation.errors:
        msg = "用户名正确！"
    else:
        error = validation.errors['username']
        if 'A user with that username already exists.' in error:
            msg = "用户已存在"
        elif 'This field is required.' in error:
            msg = "用户名不能为空"
        else:
            msg = "用户名不合法"
    content = {'msg': msg}
    return JsonResponse(content)

@sensitive_post_parameters()
@never_cache
def register_password1_post(request):
    userinput = {'password2': request.POST['password1']}
    validation = UserCreationForm(userinput)
    validation.is_valid()
    if 'password2' not in validation.errors:
        msg = "密码正确！"
    else:
        error1 = validation.errors['password2']
        if 'This field is required.' in error1:
            msg = "密码不能为空"
        elif 'This password is too short. It must contain at least 8 characters.' in error1:
            msg = "密码不可少于8位"
        elif 'This password is too common.' in error1:
            msg = "密码过于普通"
        elif 'This password is entirely numeric.' in error1:
            msg = "密码不可纯数字"
        else:
            msg = "密码不合法"
    content = {'msg': msg}
    return JsonResponse(content)

@sensitive_post_parameters()
@never_cache
def register_password2_post(request):
    userinput = {'password1': request.POST['password2']}
    validation = UserCreationForm(userinput)
    validation.is_valid()
    if 'password1' not in validation.errors:
        msg = "验证正确！"
    else:
        error2 = validation.errors['password1']
        if 'This field is required.' in error2:
            msg = "密码不能为空"
        elif "The two password fields didn't match." in error2:
            msg = "验证密码错误"
        else:
            msg = "密码不合法"
    content = {'msg': msg}
    return JsonResponse(content)

@sensitive_post_parameters()
@never_cache
def user_register(request):
    data = {
        'username': request.POST['username'],
        'staff_id': request.POST['staff_id'],
        'staff_verification': request.POST['staff_verification'],
        'password1': request.POST['password1'],
        'password2': request.POST['password2']
    }
    registerform = UserRegisterForm(data=data)
    if registerform.is_valid():
        staff_set = Staff.objects.filter(staff_id=data['staff_id'])
        if len(staff_set) == 0:
            return JsonResponse({'msg': "员工号不存在！"})
        for staff in staff_set:
            staff_user = staff
        if staff_user.staff_already_exist == 'yes':
            return JsonResponse({'msg': "员工号已注册！"})
        if not check_password(data['staff_verification'], staff_user.staff_verification):
            return JsonResponse({'msg': "员工验证号错误！"})
        staff_user.staff_username = data['username']
        staff_user.staff_already_exist = 'yes'
        staff_user.save(update_fields=['staff_username', 'staff_already_exist'])
        registerform.save()
        username = registerform.cleaned_data.get('username')
        return JsonResponse({'msg': "注册成功！"})
    else:
        return JsonResponse({'msg': "注册失败！"})

def user_login(request):
    data = {
        'username': request.POST['username'],
        'password': request.POST['password']
    }
    loginform = UserLoginForm(data=data)
    if loginform.is_valid():
        username = data['username']
        password = data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            content = {'msg': "登录成功！"}
            return JsonResponse(content)
        else:
            content = {'msg': "用户名或密码错误！"}
            return JsonResponse(content)
    else:
        content = {'msg': "用户名或密码错误！"}
        return JsonResponse(content)


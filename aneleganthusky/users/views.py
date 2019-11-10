from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login

from django.template.response import TemplateResponse
from .forms import UserRegisterForm, UserLoginForm
from django.views.decorators.cache import never_cache
from django.views.decorators.debug import sensitive_post_parameters


@sensitive_post_parameters()
@never_cache
def register_or_login(request):
    if request.user.is_authenticated:
        return redirect('pingshan-home')
    if request.method == 'POST':
        if 'login_submit' in request.POST:
            loginform = UserLoginForm(data=request.POST, prefix='login')
            if loginform.is_valid():
                username = loginform.cleaned_data.get('username')
                password = loginform.cleaned_data.get('password')
                user = authenticate(username=username, password=password)
                if user is not None:
                    print(user)
                    login(request, user)
                    return redirect('pingshan-home')
                else:
                    messages.error(request, 'Invalid login credentials!\nPlease check your username and password!')

        elif 'register_submit' in request.POST:
            registerform = UserRegisterForm(data=request.POST, prefix='register')
            if registerform.is_valid():
                registerform.save()
                username = registerform.cleaned_data.get('username')
                messages.success(request, f'Account created for {username}!')
                return redirect('register-or-login')
            else:
                messages.error(request, 'Invalid register information!\nPlease fill in again!')

    context = {
        'loginform': UserLoginForm(prefix="login"),
        'registerform': UserRegisterForm(prefix="register"),
    }
    return TemplateResponse(request, 'users/register_or_login.html', context)
    # return render(request, 'users/register_or_login.html', context)

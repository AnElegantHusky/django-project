from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from .models import Appeal

appeal = Appeal.objects.filter(EVENT_SRC_NAME__startswith='12345')


@login_required()
def home(request):
    if request.method == 'GET':
        if 'logout_submit' in request.GET:
            logout(request)
            return redirect('register-or-login')
    fields = [f.name for f in Appeal._meta.get_fields()]
    values = [[getattr(event, field) for field in fields] for event in appeal[:20]]
    context = {
        'values' : values
    }
    return render(request, 'pingshan/home.html', context)



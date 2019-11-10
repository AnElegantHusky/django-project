from django.urls import path
from . import views

urlpatterns = [
    path('', views.register_or_login, name='register-or-login'),
]
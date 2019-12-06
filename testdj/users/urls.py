from django.urls import path
from . import views

urlpatterns = [
    path('', views.register_or_login, name='register-or-login'),
]
"""
path('register/username/post/', views.register_username_post, name='register-username-post'),
    path('register/password1/post/', views.register_password1_post, name='register-password1-post'),
    path('register/password2/post', views.register_password2_post),
    path('register/check/post/', views.user_register, name='register-check-post'),
    path('login/check/post/', views.user_login, name='login-check-post'),
"""
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm


class UserRegisterForm(UserCreationForm):
    staff_id = forms.IntegerField()
    staff_verification = forms.IntegerField()

    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)
        fieldnames = ['username', 'staff_id', 'staff_verification','password1', 'password2']
        placeholders = ['用户名', '员工号', '员工验证号', '输入密码', '确认']
        for fieldindex in [0, 1, 2, 3, 4]:
            self.fields[fieldnames[fieldindex]].widget.attrs.update({'autocomplete': 'off',
                                                                     'placeholder': placeholders[fieldindex]})
        """
    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)
        for fieldname in ['username', 'staff_id', 'staff_verification','password1', 'password2']:
            self.fields[fieldname].help_text = None
        """

    class Meta:
        model = User
        fields = ['username', 'staff_id', 'staff_verification','password1', 'password2']
        help_texts = {
            'username' : None,
            'staff_id' : None,
            'staff_verification' : None,
            'password1' : None,
            'password2' : None
        }


class UserLoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(UserLoginForm, self).__init__(*args, **kwargs)
        fieldnames = ['username', 'password']
        placeholders = ['输入用户名', '输入密码']
        for fieldindex in [0, 1]:
            self.fields[fieldnames[fieldindex]].widget.attrs.update({'autocomplete': 'off',
                                                                     'placeholder': placeholders[fieldindex]})

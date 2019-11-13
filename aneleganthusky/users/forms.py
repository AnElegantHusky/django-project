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
        self.fields['username'].widget.attrs.update({"class": "info_input",
                                                     "type": "text", "name": "name2", "placeholder": "用户名"})
        self.fields['staff_id'].widget.attrs.update({"class": "info_input",
                                                     "type": "text", "name": "worknumber", "placeholder": "员工号"})
        self.fields['staff_verification'].widget.attrs.update({"class": "info_input",
                                                      "type": "text", "confirmwork": "name", "placeholder": "员工号验证码"})
        self.fields['password1'].widget.attrs.update({"class": "info_input",
                                                      "type": "text", "name": "password2", "placeholder": "输入密码"})
        self.fields['password2'].widget.attrs.update({"class": "info_input",
                                                      "type": "text", "name": "confirmpassword", "placeholder": "确认密码"})



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
        self.fields['username'].widget.attrs.update({"class": "info_input",
                                                     "type": "text", "name": "name", "placeholder": "用户名"})
        self.fields['password'].widget.attrs.update({"class": "info_input",
                                                     "type": "password", "name": "password", "placeholder": "输入密码"})


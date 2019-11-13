function checked(){
  var input_box = document.getElementById("code_input");
  var name_box = document.getElementById("name_login");
  var password_box = document.getElementById("password_login");
  if (input_box.placeholder != "验证码正确"){
    if(input_box.value==""){
      input_box.placeholder = "请输入验证码";
      input_box.className = "invalid"; 
      return false;
    }
    if(yanzheng()){
      return true;
    } 
    return false
  }
  else{
    return true
  }
}

function yanzheng(){
        var input_box = document.getElementById("code_input");
       var res = verifyCode.validate(input_box.value);
       if(res){
            input_box.placeholder = "验证码正确";
            input_box.value="";
            input_box.setAttribute('disabled', 'disabled')
            input_box.className = "valid"; 
            document.getElementById("my_button").onclick=function(){};   

       }else{
            input_box.value="";
            input_box.placeholder = "输入错误,请重试";
            verifyCode.refresh();
            input_box.className = "invalid";
         }
    return res;
}


function cambiar_login() {
  var form_login = document.getElementById("form_login");
  var form_sign_up = document.getElementById("form_sign_up");
  var input_array = form_login.getElementsByTagName("input");
  for(i=0;i<input_array.length;i++){
    if(input_array[i].className == "info_input"){
      input_array[i].required = true;
    }
  }
  input_array = form_sign_up.getElementsByTagName("input");
  for(i=0;i<input_array.length;i++){
    if(input_array[i].className == "info_input"){
      input_array[i].required = false;
    }
  }

  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";  


setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
  }

function cambiar_sign_up(at) {
  var form_login = document.getElementById("form_login");
  var form_sign_up = document.getElementById("form_sign_up");
  var input_array = form_sign_up.getElementsByTagName("input");
  for(i=0;i<input_array.length;i++){
    if(input_array[i].className == "info_input"){
      input_array[i].required = true;
    }
  }
  input_array = form_login.getElementsByTagName("input");
  for(i=0;i<input_array.length;i++){
    if(input_array[i].className == "info_input"){
      input_array[i].required = false;
    }
  }

  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";



setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  
}    



function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }
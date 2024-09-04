let inputUsername = document.querySelector('.username-container input');
let inputPassword = document.querySelector('.password-container input')

let errUsername = document.querySelector('.login-page .username-container .msg-error')
let errPassword = document.querySelector('.login-page .password-container .msg-error')

function checkLogin(input, err, size, msg_err){
    if(input.value.trim() === ''){
        err.innerText = '*Chưa nhập trường này!';
    }else if(input.value.trim().length < size){
       err.innerText = msg_err ? msg_err : `Ten đăng nhập ít nhất ${size} ký tự!`;
    }else{
        err.innerText = '';
    }
}

function blur(input, err, size, msg_err){
    input.addEventListener('blur', function(){
        checkLogin(input, err, size, msg_err);
    });
}

function click(input, err, size, msg_err){
    input.addEventListener('click', function(){
        checkLogin(input, err, size, msg_err);
    });
}

let btnLogin = document.querySelector('.btn-login');
btnLogin.onclick = function(){
    checkLogin(inputUsername, errUsername,6);
    checkLogin(inputPassword, errPassword,6, "*Mật khẩu ít nhất 6 ký tự");
}

blur(inputUsername, errUsername,6)
blur(inputPassword, errPassword,6, "*Mật khẩu ít nhất 6 ký tự");

//Đổi mắt
let eyeIcon = document.querySelector('.icon-eye img');
  var click1 = 0;
eyeIcon.onclick = function(){  
    let flag;
    if(click1 %2===0){
         eyeIcon.src = 'img/Login/ic_un-eye.svg';
         flag = true;
    }else{
        eyeIcon.src = 'img/Login/ic_eye.svg';
        flag = false;
      }
    click1 +=1;
    if(flag === true){
        inputPassword.type= 'text';
    }else{
        inputPassword.type = 'password';
    } 
}

const eyeicon = document.getElementById('eyeicon')

const password = document.getElementById('password');

eyeicon.onclick = function(){
    if(password.type == 'password'){
        //changing the types 
        password.type = 'text';
        eyeicon.src = "eye-open.png";
    }
    else {
        password.type = 'password';
        eyeicon.src = 'eye-close.png';
    }
}
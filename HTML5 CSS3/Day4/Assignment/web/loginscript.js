function verifyLogin(loginForm){
    if(loginForm.checkValidity()){
        var username=loginForm.txtUN.value;
        var password=loginForm.txtPwd.value;
        if(username==="admin@gmail.com" && password==="123456"){
            alert('Login Successful..!');
            window.open("home1.html","_blank");
        }
        else
            alert('Invalid Username or password..!');
    }
}
document.getElementById('signUp').addEventListener('submit', function(event){ 
    const username = document.getElementById('username').value;
    const password = document.getElementById('userPassword').value;
    const rePass = document.getElementById('reTypePassword').value;
    const wrongPass = document.getElementById('wrongPass');
    const wrongPassCriteria = document.getElementById('wrongPassCriteria');
    const passwordCriteria = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if(username.includes(" ")){
       alert("Password can not contains space"); 
       event.preventDefault();
    }else if(password !== rePass){
         wrongPass.style.display = 'block'; 
         event.preventDefault();
    }else if (!password.match(passwordCriteria)){
         wrongPassCriteria.style.display = 'block';
         event.preventDefault();
    }else{
        alert("Registeration succesfull");
        event.preventDefault();
        window.location.href ='loginPage.html';
    }
   
})
document.getElementById('showPassBttn').addEventListener('click',function(event){
    const password = document.getElementById('userPassword');
    const rePass = document.getElementById('reTypePassword');
    if(this.checked){
        password.type = 'text';
        rePass.type = 'text';
    }else{
        password.type = 'password';
        rePass.type = 'password';
    }
})
document.getElementById('login').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === "" || password === "") {
      alert("require input");
      event.preventDefault();  
    }else{
        alert("login Succesfull");
        window.location.href = './Home.html'
    }
  });

  document.getElementById('showPassBttn').addEventListener('click',function(event){
    const password = document.getElementById('userPassword');
    if(this.checked){
        password.type = 'text';
    }else{
        password.type = 'password';
    }
});
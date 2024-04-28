let btnSignUp = document.getElementById("signup");
let btnLogin = document.getElementById("login");

btnSignUp.addEventListener("click", function(){
    let signupUser = document.getElementById("signup_user").value;
    let signupEmail = document.getElementById("signup_email").value;
    let signupPass =  document.getElementById("signup_password").value;

    if(signupUser===""){
        Swal.fire({
            title: "Falta información!",
            text: "Agrega el nombre usuario",
            icon: "warning"
          });
          return;
    }
    else if(signupEmail===""){
        Swal.fire({
            title: "Falta información!",
            text: "Agrega el correo electronico",
            icon: "warning"
          });
          return;
    }
    else if(signupPass===""){
        Swal.fire({
            title: "Falta información!",
            text: "Digite la clave",
            icon: "warning"
          });
          return;
    }
    else{
        Swal.fire({
            title: "¡Inicio de sesión exitoso!",
            text: "",
            icon: "success"
          });
          setTimeout(function() {
            location.href = "./index.html";
          }, 3000);
          return; 
    }
});

btnLogin.addEventListener("click", function(){
    
    let logEmail = document.getElementById("login_email").value;
    let logPass =  document.getElementById("login_password").value;

    if(logEmail===""){
        Swal.fire({
            title: "Falta información!",
            text: "Agrega el correo electronico",
            icon: "warning"
          });
          return;
    }
    else if(logPass===""){
        Swal.fire({
            title: "Falta información!",
            text: "Digite la clave",
            icon: "warning"
          });
          return;
    }else{
        Swal.fire({
            title: "¡Inicio de Sesión exitoso!",
            text: "",
            icon: "success"
          });
          setTimeout(function() {
            location.href = "./index.html";
          }, 3000);
          return; 
    }
});
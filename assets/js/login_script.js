import {obtenerUser} from "./consulta-api-usuarios.js";

let btnSignUp = document.getElementById("signup");
let btnLogin = document.getElementById("login");

btnSignUp.addEventListener("click", function () {
    let signupUser = document.getElementById("signup_user").value;
    let signupEmail = document.getElementById("signup_email").value;
    let signupPass = document.getElementById("signup_password").value;

    if (signupUser === "") {
        Swal.fire({
            title: "Falta información!",
            text: "Agrega el nombre usuario",
            icon: "warning",
        });
        return;
    } else if (signupEmail === "") {
        Swal.fire({
            title: "Falta información!",
            text: "Agrega el correo electronico",
            icon: "warning",
        });
        return;
    } else if (signupPass === "") {
        Swal.fire({
            title: "Falta información!",
            text: "Digite la clave",
            icon: "warning",
        });
        return;
    } else {
        Swal.fire({
            title: "¡Registro exitoso!",
            text: "",
            icon: "success",
            showConfirmButton: false,
        });
        setTimeout(function () {
            location.href = "./index.html";
        }, 2000);
        return;
    }
});

btnLogin.addEventListener("click", function () {
  console.log("pushado");
    let logEmail = document.getElementById("login_email").value;
    let logPass = document.getElementById("login_password").value;
    console.log("comeinza validacon");
    if (logEmail === "") {
        Swal.fire({
            title: "Falta información!",
            text: "Agrega el correo electronico",
            icon: "warning",
        });
        return;
    } else if (logPass === "") {
        Swal.fire({
            title: "Falta información!",
            text: "Digite la clave",
            icon: "warning",
        });
        return;
     }
    else if(logPass != "" && logEmail != "" ){
      console.log("va");
      obtenerUser()
          .then(Users=>{
            console.log("xddd");
          })
          .catch((error) => console.log(`${typeof(error)}`));
      console.log(Users);
    }
    else {
      Swal.fire({
        title: "¡Inicio de Sesión exitoso!",
        text: "",
        icon: "success",
        showConfirmButton: false,
      });
        setTimeout(function () {
            location.href = "./index.html";
        }, 2000);
        return;
    }
});

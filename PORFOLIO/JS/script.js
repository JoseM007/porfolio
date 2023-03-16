
var email = "yosepe007@gmail.com";
var clave = 1234;
var datos = [];
var modal = document.getElementById("exampleModal");

let desaparecer = () => {
    modal.style.display = "none";
    location.reload();
};

let recargar = () => {
    alert("datos incorrectos");
    location.reload();
};

let obtenerDatos = () => {
    let emailIngresada = document.getElementById("exampleInputEmail1").value;
    let claveIngresada = document.getElementById("exampleInputPassword1").value;
    datos.push(emailIngresada, claveIngresada);
        if (email === datos[0] && clave == datos[1]) {
        setTimeout(desaparecer, 1000);
            } else {
                recargar();
        }
};

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    obtenerDatos();
});




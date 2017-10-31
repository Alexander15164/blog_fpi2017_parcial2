window.onload = llamarUsuarios();
function llamarUsuarios() {
    var llamador;
    var almacenador;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        llamador = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 y anteriores
        llamador = new ActiveXObject("Microsoft.XMLHTTP");
    }
    llamador.open('GET', 'http:///192.168.1.17/blog_fpi2017_parcial2/JSON/Usuarios.json', true);
    llamador.onload = function () {
        almacenador = JSON.parse(llamador.responseText);
        console.log(almacenador);
        puente(almacenador);
    };
    llamador.send();
    console.log(almacenador);
    var almacenador;
}
var conectora;
function puente (arra){
    conectora = arra;
    console.log(conectora);
}

function inicioSesion() {
    var usuario;
    var pass;
    var usuarios = conectora;
    console.log(usuarios);
    usuario = document.getElementById("user").value;
    pass = document.getElementById("pas").value;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuario == usuarios[i].usuario && pass == usuarios[i].password) {
            alert("usuario");
            webStore(usuario);
            break;
        }
    }
}
function webStore(usuario){
    localStorage.setItem("user",usuario);
    console.log(localStorage.user);
    console.log("creado");
}
function formRegistro() {
    window.location.replace("registro.html");
}
function formingreso() {
    window.location.replace("inicioSesion.html");
}
function mostrar() {
    window.location.replace("index.html");
}
function publicar() {
    window.location.replace("EscribirPublic.html");
}
function proceso() {
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("cerrar").style.display = "block";
    document.getElementById("nueva").style.display = "block";
}
function inverso() {
    document.getElementById("iniciar").style.display = "block";
    document.getElementById("registrarse").style.display = "block";
    document.getElementById("cerrar").style.display = "none";
    document.getElementById("nueva").style.display = "none";
}
function mostrarpu() {
    window.location.replace("mostrarArti.html");

}
var url1 = verificadorURL();
if(url1==2 || url1==1){
   window.onload = function tiempo() {
        var tiempo;
        var horas;
        var segundos;
        var minutos;
        var dia;
        var mes;
        var ao;
        tiempo = new Date();
        horas = tiempo.getHours();
        minutos = tiempo.getMinutes();
        segundos = tiempo.getSeconds();
        ao = tiempo.getFullYear();
        mes = tiempo.getMonth();
        dia = tiempo.getDate();
        if(url1==1){
            publicacion(ao, mes, dia, horas, minutos, segundos);
        }else{
            usuarios(ao, mes, dia, horas, minutos, segundos);
        }
        }
}else if(url1==0){
    window.onload = function verificar() {
        if (localStorage.user != undefined) {
            proceso();
        } else {
            inverso();
        }
    }
    }
function publicacion(ao, mes, dia, horas, minutos, segundos) {
    var identificador;
    var autor = localStorage.getItem("user");
    document.getElementById("autor").value = autor;
    document.getElementById("tiempo").value = horas + ':' + minutos + ':' + segundos;
    document.getElementById("autor").style.display = "none";
    document.getElementById("tiempo").style.display = "none";
    document.getElementById("identificador").style.display = "none";
    identificador = ao + "" + (mes + 1) + "" + dia + "" + horas + "" + minutos + "" + segundos;
    document.getElementById("identificador").value = identificador;

}
;
function usuarios(ao, mes, dia, horas, minutos, segundos) {
    var identificador;
    identificador = ao + "" + (mes + 1) + "" + dia + "" + horas + "" + minutos + "" + segundos;
    document.getElementById("iusuario").value = identificador;
}

function cerrar() {
    localStorage.removeItem("user");
    mostrar();
}
function verificadorURL(){
    var url = document.location.href;
    var loc = url.split('/')[4];
    console.log(loc);
    if(loc=="EscribirPublic.html"){
        return contr=1;
    }else if(loc=="registro.html"){
        return contr=2;
    }else if(loc == "index.html"){
        return contr=0;
    }
    return ;
}
    


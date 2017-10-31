
function formRegistro(){
  window.location.replace("registro.html");
}
function formingreso(){
  window.location.replace("inicioSesion.html");
}
function mostrar(){
  window.location.replace("index.html");

}
function publicar(){
    window.location.replace("EscribirPublic.html");
    publicacion();
}
function proceso(){
  document.getElementById("iniciar").style.display="none";
  document.getElementById("registrarse").style.display="none";
  document.getElementById("cerrar").style.display="block";
  document.getElementById("nueva").style.display="block";
}
function mostrarpu(){
  window.location.replace("mostrarArti.html");

}
 function tiempo() {
    var tiempo;
    var horas;
    var segundos;
    var minutos;
    var dia;
    var mes;
    var ao;
    var mandados = new Array();
    tiempo = new Date();
    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();
    ao = tiempo.getFullYear();
    mes = tiempo.getMonth();
    dia = tiempo.getDate();
    mandados[0]=horas;
    mandados[1]=minutos;
    mandados[2]=segundos;
    mandados[3]=ao;
    mandados[4]=mes;
    mandados[5]=dia;
    //usuarios(ao,mes,dia,horas,minutos,segundos);
    return mandados;
    
}
function publicacion(){
    var identificador;
    var autor = localStorage.getItem("user");
    var asignador = tiempo();
    document.getElementById("autor").value = autor;
    document.getElementById("tiempo").value = asignador[0] + ':' + asignador[1] + ':' + asignador[2];
    document.getElementById("autor").style.display = "none";
    document.getElementById("tiempo").style.display = "none";
    document.getElementById("identificador").style.display = "none";
    identificador = asignador[3]+""+(asignador[4]+1)+""+[5]+""+asignador[0]+""+asignador[1]+""+asignador[2]+""+autor;
    document.getElementById("identificador").value = identificador;
    
    };
    
    function usuarios(ao,mes,dia,horas,minutos,segundos){
        var identificador;
        identificador = ao+""+(mes+1)+""+dia+""+horas+""+minutos+""+segundos;
        document.getElementById("iusuario").value = identificador;
    }
    
    window.onload = function verificar(){
        if(localStorage.user != undefined){
            document.getElementById("nueva").style.display="block";
        }else{
            document.getElementById("cerrar").style.display = "none";
        }
    }
    function cerrar(){
        localStorage.removeItem("user");
    }

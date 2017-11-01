
function llamarPublicaciones() {
    var llamador;
    var url2 = document.location.href;
    var loc2 = url2.split('/')[2];
    var url3 = "http://" + loc2 + "/blog_fpi2017_parcial2/JSON/publicaciones.json";
    var almacenador;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        llamador = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 y anteriores
        llamador = new ActiveXObject("Microsoft.XMLHTTP");
    }

    llamador.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            almacenador = JSON.parse(llamador.responseText);
            console.log(almacenador.length);
            console.log(almacenador);
            //puente2(almacenador);
            publicar2(almacenador);
        }

    };
    llamador.open('GET', url3, true);
    llamador.send();
    console.log(almacenador);
}
var control
function puente2(cont) {
    control = cont;
}
function publicar2(vector) {
     for (var i = vector.length-1 ;i>= 0; i--) {
    texto=vector[i].publicacion;
    texto= texto.substring(0,100)+"..."
    var capa= document.getElementById("capa");

    var h1= document.createElement("h1")
    h1.innerHTML=vector[i].titulo;
    capa.appendChild(h1);

    var imagen = document.createElement("img");
    imagen.setAttribute("src", vector[i].imagen);
    imagen.setAttribute("class", "imagenes");
    capa.appendChild(imagen);

    var p = document.createElement("p");
    p.innerHTML = vector[i].publicacion;
    p.setAttribute("id", "contArt")
    capa.appendChild(p);

    var h5 = document.createElement("h5");
    h5.innerHTML = vector[i].autor;
    capa.appendChild(h5);

    var h6 = document.createElement("h6");
    h6.innerHTML = vector[i].tiempo;
    capa.appendChild(h6);

    var a = document.createElement("a");
    a.innerHTML = "Ver publicacion";
    a.setAttribute("href", "mostrarArticu.html");
    a.setAttribute("onclick","cargar('"+vector[i].identificador+"')");
    capa.appendChild(a);
  }
}
function cargar(id){
        pasarVariables("mostrarArticu.html", id);
      }


      function pasarVariables(pagina,nombres) {
      pagina +="?";
      nomVec = nombres.split(",");
      for (i=0; i<nomVec.length; i++)
        pagina += "id" + "=" + escape(eval(nomVec[i]))+"&";
      pagina = pagina.substring(0,pagina.length-1);
      location.href=pagina;

    }

function publicar3(vector){
    var loc = document.location.href;
    var idurl = loc.split('=')[1];
    var cate="4";
    //alert("el id es:"+ idurl);

    console.log("entro");
    for (var i = vector.length-1 ;i>= 0; i--) {
      if (vector[i].categoria==cate) {


      texto=vector[i].publicacion;

      var capa= document.getElementById("pub");

      var h1= document.createElement("h1")
      h1.innerHTML=vector[i].titulo;
      capa.appendChild(h1);

      var imagen = document.createElement("img");
      imagen.setAttribute("src", vector[i].imagen);
      imagen.setAttribute("class", "imagenes");
      capa.appendChild(imagen);

      var p = document.createElement("p");
      p.innerHTML = texto;
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
      a.setAttribute("href", "mostrarArti.html");
      a.setAttribute("onclick","cargar('"+vector[i].identificador+"')");
      capa.appendChild(a);
    }
    }
  }
  function cargarCate(idcate){
  pasarVariables("noticiaCate.html",idcate);}


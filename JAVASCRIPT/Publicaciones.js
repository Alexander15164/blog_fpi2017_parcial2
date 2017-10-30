function conectarUsuarios(){
    var response = new XMLHttpRequest();
    response.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
    }
    };
    response.open("GET", "../JSON/Usuarios.json",true);
    response.send();
}

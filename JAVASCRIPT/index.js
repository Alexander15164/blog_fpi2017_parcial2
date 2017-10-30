window.onload = function () {
    var tiempo;
    var horas;
    var segundos;
    var minutos;
    tiempo = new Date();
    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();
    document.getElementById("tiempo").value = horas + ':' + minutos + ':' + segundos;
    };
var sesion=0;
var descanso=1;
var tiempo = [25,5];
var actividad = ["Sesión","Descanso"];
var bandera = sesion;
var activarTimer = false;
var segundos;
var interval;


$(document).ready(function(){
  setear();
});

function setear(){
  $(".tiempo-descanso").text(tiempo[descanso]);
  $(".tiempo-sesion").text(tiempo[sesion]);
  setearTimer(bandera);
}

function setearTimer(a){
    $(".actividad").text(actividad[a]);
    $(".tiempo-actual").text(tiempo[a]);
    segundos = 60 * tiempo[a];
 }

function sumarSesion(){
  if (!activarTimer){
      tiempo[sesion] += 1;
      $(".tiempo-sesion").text(tiempo[sesion]);
      if (bandera===sesion){
        setearTimer(bandera);
      }
  }

}
function sumarDescanso(){
    if (!activarTimer){

      tiempo[descanso] += 1;
      $(".tiempo-descanso").text(tiempo[descanso]);
      if (bandera===descanso){
        setearTimer(bandera);
      }
    }
}

function restarSesion(){
  if (!activarTimer && tiempo[sesion] > 1){
    tiempo[sesion] -= 1;
    $(".tiempo-sesion").text(tiempo[sesion]);
    if (bandera===sesion){
      setearTimer(bandera);
    }
  }
}
function restarDescanso(){
  if (!activarTimer && tiempo[descanso] > 1){
    tiempo[descanso] -= 1;
    $(".tiempo-descanso").text(tiempo[descanso]); 
    if (bandera===descanso){
      setearTimer(bandera);
    }
  }
}

function apretarBoton(){
  activarTimer = !activarTimer;
  if (activarTimer){
    segundos -= 1;
    $(".tiempo-actual").text(getTiempo(segundos));
    interval = setInterval(tiempoEnAccion,1000);
  } else{
    clearInterval(interval);
  }
}

function tiempoEnAccion(){
  if (segundos==0){
    (bandera===descanso) ? bandera=sesion : bandera=descanso;
    setearTimer(bandera);
  }
  segundos -= 1;
  $(".tiempo-actual").text(getTiempo(segundos));
}

function getTiempo(segundos){
  var h = Math.floor(segundos / 3600);
  var m = Math.floor((segundos % 3600) / 60);
  var s = (segundos % 3600) % 60;
  if (h>0){
    return h+":"+m+":"+s;
  }else{
    return m+":"+s;
  }
}
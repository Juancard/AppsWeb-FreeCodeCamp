var kelvin=0;
var flag=true;

$(document).ready(function(){
  getCoordenadas();
});

function getCoordenadas(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      getClima(position.coords.latitude,position.coords.longitude);
    });
  }
}

function getClima(lat,long){
  var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=44db6a862fba0b067b1930da0d769e98";

  $.get(url, function(json) { 
    kelvin=json.main.temp;
    cambiarMedida();
    $(".icono").html("<img src='http://openweathermap.org/img/w/"+json.weather[0].icon+".png'>");
    $(".ubicacion").text(json.name+", "+json.sys.country);
    $(".clima").text(json.weather[0].description);
    $(".viento").text(json.wind.speed+" m/s");
  });
}

function kelvinToCelsius(k){
  return k-273.5;
}
function kelvinToFarenheit(k){
  return k*9/5-459.67;
}

function cambiarMedida(){
  if (flag==true){
    $(".test").text(flag);
    $(".grados").text(kelvinToCelsius(kelvin).toFixed(1)+" C");
  }else{
    $(".grados").text(kelvinToFarenheit(kelvin).toFixed(1)+" F");
  }
  flag=!flag;
}

$(document).ready(function(){
  llamarAPI();
});

function llamarAPI(){
  var urlStream='https://api.twitch.tv/kraken/streams/';
  var urlChannel='https://api.twitch.tv/kraken/channels/';
  var usuarios= ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","cretetion","brunofin","sheevergaming","ESL_SC2","OgamingSC2"];
  
  usuarios.forEach(function (usuario){
    $.getJSON(urlStream+usuario+'?callback=?', function(json) {
      if (json.stream===null){
        $.getJSON(urlChannel+usuario+'?callback=?', function(json2) {
          var objetoCanal={nombre:usuario,estado:"Offline",logo:json2.logo}
          mostrarCanal(objetoCanal);
        });
      }else if (json.stream===undefined){
        var objetoCanal={nombre:usuario,estado:"Account Closed"};
        mostrarCanal(objetoCanal);
      }else{
        var objetoCanal={
          nombre:usuario,
          estado:json.stream.channel.status,
          juego:json.stream.channel.game,
          logo:json.stream.channel.logo
        }
        mostrarCanal(objetoCanal);
      }
    });
  });
}

function mostrarCanal(objetoCanal){
  var html ="<div class=\"canal row\">";  
  var nombre = "<p class=\"col-md-2\"><a href=\"http://www.twitch.tv/"+objetoCanal.nombre+"\" target=\"_blank\">"+objetoCanal.nombre+"</a></p>";
  var logo = "<p class=\"col-md-2\"><img src=\"https://cdn3.iconfinder.com/data/icons/abstract-1/512/no_image-512.png\"></img></p>";
  
  if (objetoCanal.logo!=null){
    logo = "<p class=\"col-md-2\"><img src=\""+objetoCanal.logo+"\"></img></p>";
  }
  
  if (objetoCanal.estado != "Offline" && objetoCanal.estado != "Account Closed"){
    var estado="<p class=\"col-md-8\">"+acortar(objetoCanal.juego+": "+objetoCanal.estado)+"</p>";
    html+=logo+nombre+estado+"</div>";
    $(".online").append(html);
  } else{
    var estado="<p class=\"col-md-8\">"+objetoCanal.estado+"</p>";
    html+=logo+nombre+estado+"</div>";
    $(".offline").append(html);
  }

}

function acortar(texto){
  var max=60;
  var ret = texto;
  if (ret.length > max) {
    texto = texto.substr(0,max-3) + "...";
  }
  return texto;
}

function mostrarOnline(){
  $(".online").show();
  $(".offline").hide();
}

function mostrarOffline(){
  $(".online").hide();
  $(".offline").show();
}

function mostrarTodo(){
  $(".online").show();
  $(".offline").show();
}
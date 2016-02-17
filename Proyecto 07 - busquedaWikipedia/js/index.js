$(document).ready(function(){
  $("#buscador").keyup(function(event){
        if (event.keyCode == 13){
          llamarAPI($(this).val());
        }
    });
})
    
function llamarAPI(valorBusqueda){
  var url="https://es.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+valorBusqueda+ "&callback=?";
  /*
  linea de callback evita error 
  "No 'Access-Control-Allow-Origin'(...)"
  */
  $.getJSON(url, function(json) {
    var html="";
    var title="";
    var enlace="";
    var descripcion="";
    json.query.search.forEach(function(resultado){
      title=resultado.title;
      descripcion="<p>"+resultado.snippet+"</p>";
      enlace="<div class=\"articulo\"><a href=\"https://es.wikipedia.org/wiki/"+title+"\" target=\"_blank\">"+"<h3>"+title+"</h3>"+descripcion+"</a></div>";
      html+=enlace;
    })    
    $(".panel-resultados").html(html);
  });
}
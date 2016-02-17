var arregloFrases = [];
$(document).ready(function(){
  generarFrases();
  nuevaFrase();
});

function generarFrases(){
  arregloFrases = [
    ["All moments, past, present and future, always have existed, always will exist.","Kurt Vonnegut"],["Your strength is just an accident arising from the weakness of others.","Joseph Conrad"],["But man is not made for defeat. A man can be destroyed but not defeated.","Ernest Hemingway"],["Se dice que hay varias maneras de mentir; pero la más repugnante de todas es decir la verdad, toda la verdad, ocul­tando el alma de los hechos. Porque los hechos son siempre vacíos, son recipientes que tomarán la forma del sentimiento que los llene.","J.C. Onetti"],["Al contrario que la música, que la pintura, incluso que el cine, la literatura puede absorber y digerir cantidades ilimitadas de burla y de humor.","Michel Houellebecq"]
  ];
 } 

function nuevaFrase(){
    var azar = Math.floor(Math.random()*arregloFrases.length);
  var nuevaFrase = arregloFrases[azar][0];
  var nuevoAutor = arregloFrases[azar][1];
 
  $(".frase").text(nuevaFrase);
  $(".autor").text(nuevoAutor);
  
}
$(document).ready(function(){
  mostrar("BIENVENIDO!!");
})

function mostrar(m){
  m=m.toString();
  if(m.length > 12){
    $("#respuesta").val(m.substring(0,12));
  }else{
    $("#respuesta").val(m);
  }
}

$("button").on('click', calcular);

var valor='';
var total=0;
var arreglo = [];
function calcular(){
  var ingresado = $(this).text();
  if (esDigitoValido(ingresado)){
    valor += ingresado;
    mostrar(valor);
  }else{
    switch(ingresado){
      case "AC":
        valor='';
        total=0;
        arreglo = [];
        mostrar(total);
        break;
      case "CE":
        valor='';
        mostrar(0);
        break;
      case "=":
        arreglo.push(valor);
        total = getTotal();
        mostrar(total);
        total=0;
        arreglo = [];
        valor='';
        break;
      case ".":
        break;
      default:
        arreglo.push(valor);
        arreglo.push(ingresado);
        valor='';
        break;
    }
  }
}

function getTotal(){
  var t=0;
  var op="+";
  for (var i=0;i<arreglo.length;i++){
    var n=arreglo[i];
    if(isNaN(n)){
      op=n;
    }else{
      n=Number(n);
      switch(op){
        case "%":
          t = t % n;
          break;
        case "/":
          t = t / n;
          break;
        case "X":
          t = t * n;
          break;
        case "+":
          t = t + n;
          break;
        case "-":
          t = t - n;
          break;     
      }
    }
  }
  return t;
}

function esDigitoValido(p){
  return (p>= 0 && p <= 9) 
    || (p == '.' && valor.indexOf(".")==-1)
}

function debugear(v){
  $('.debug').append($('<p>').text(v));
}
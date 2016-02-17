$(document).ready(function(){
  getPosteos();
});

function getPosteos(){
  var url="http://www.freecodecamp.com/news/hot"
  $.get(url, function(json) { 
    var html="";
    var headline="";
    var url="";
    var imagen="";
    var autor="";
    var likes="";
    var fecha="";
    for (var i=0; i<json.length; i++){
      url = json[i].link;
      headline = "<p><a href=\""+url+"\">"+json[i].headline.substr(0,20) + "..."+"</a></p>";
      imagen = "<img src=\""+json[i].author.picture+"\"></img>";
      likes = "<p>♥ "+json[i].rank+"</p>";
      autor = "<p><a href=\"http://www.freecodecamp.com/"+json[i].author.username+"\">by - "+json[i].author.username+"</a></p>";
      var f = new Date(json[i].timePosted);
      fecha = "<p>Posted on: "+getFecha(f)+"</p>";
      html += "<div class=\"post\">"+imagen+headline+autor+likes+fecha+"</div>";
    }
    $(".panel-posteos").html(html);
  });
}

function getFecha(fecha){
  var meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var dias = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  
  return dias[fecha.getDay()]+', '+fecha.getDate()+' '+meses[fecha.getUTCMonth()] + ' ' + fecha.getFullYear();
}
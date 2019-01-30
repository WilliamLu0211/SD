var c = document.getElementById("slate");
var w = c.getAttribute("width");
var h = c.getAttribute("height");
var ctx = c.getContext("2d");

var rect = true;

var clr = document.getElementById("clr");
clr.addEventListener('click', function() {
  ctx.clearRect(0, 0, w, h);
})

var tgl = document.getElementById("tgl");

tgl.addEventListener('click', function(){
  rect = !rect;
  if (rect){
    this.innerHTML = "rectangle mode";
  }
  else {
    this.innerHTML = "dot mode";
  }
})

ctx.addEventListener('click', function(){
  if (rect){
    
  }
  else {

  }
})

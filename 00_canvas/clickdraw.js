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

c.addEventListener('click', function(e){
  var r = c.getBoundingClientRect();
  console.log(r);
  var x = e.clientX - r.left;
  var y = e.clientY - r.top;
  if (rect){
    ctx.fillRect(x - 10, y - 10, 20, 20);
  }
  else {
    ctx.beginPath();
    ctx.ellipse(x, y, 5, 5, 0, 0, 2 * Math.PI);
    ctx.fill();
  }
})

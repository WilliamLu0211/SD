var c = document.getElementById("slate");
var w = c.getAttribute("width");
var h = c.getAttribute("height");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
var rect = true;

var clr = document.getElementById("clr");
clr.addEventListener('click', function(e) {
  e.preventDefault();
  ctx.clearRect(0, 0, w, h);
})

var tgl = document.getElementById("tgl");

tgl.addEventListener('click', function(){
  rect = !rect;
  if (rect){
    this.innerHTML = "rectangle mode";
    this.setAttribute("class", "btn btn-primary");
  }
  else {
    this.innerHTML = "dot mode";
    this.setAttribute("class", "btn btn-success");
  }
})

c.addEventListener('click', function(e) {
  // e.preventDefault();
  if (rect)
    drawBox(e);
  else
    drawDot(e);
});

var drawBox = function(e) {
  ctx.fillRect(e.offsetX - 10, e.offsetY - 10, 20, 20);
}

var drawDot = function(e) {
  ctx.beginPath();
  ctx.ellipse(e.offsetX, e.offsetY, 5, 5, 0, 0, 2 * Math.PI);
  ctx.fill();
}

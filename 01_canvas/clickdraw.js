// Bo Hui Lu and William Lu
// SoftDev pd7
// K01 -- ...and I want to Paint it better
// 2019-01-31

/*
e.preventDefault();
- If an event has a default action, this method "blocks" that default.
ctx.beginPath();
- Starts a path on the canvas.
e.offsetX
- The X-cor position of the cursor on the canvas.
e.offsetY
- The Y-cor position of the cursor on the canvas.
*/

//variables to allow interaction with canvas
//also sets click color to blue and defaults to drawing boxes
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
var rect = true;

//gets the size of canvas
var w = c.getAttribute("width");
var h = c.getAttribute("height");

//method for clearing the canvas
var clr = document.getElementById("clr");
clr.addEventListener('click', function(e) {
  //e.preventDefault();
  ctx.clearRect(0, 0, w, h);
})

var tgl = document.getElementById("tgl");

//method for switching the value of rect, which decides if it draws box/dot
tgl.addEventListener('click', function(){
  //e.preventDefault();
  rect = !rect;
})

//method for drawing a box/dot depending on the value of rect
c.addEventListener('click', function(e) {
  e.preventDefault();
  if (rect)
    drawBox(e);
  else
    drawDot(e);
});

//helper func for drawing a box
var drawBox = function(e) {
  ctx.fillRect(e.offsetX - 10, e.offsetY - 10, 20, 20);
}

//helper func for drawing a dot
var drawDot = function(e) {
  ctx.beginPath();
  ctx.ellipse(e.offsetX, e.offsetY, 5, 5, 0, 0, 2 * Math.PI);
  ctx.fill();
}

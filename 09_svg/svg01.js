var img = document.getElementById("vimage");
var clr = document.getElementById("but_clear");

var prevX = -1, prevY;

img.addEventListener('click', function(e){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", e.offsetX);
  c.setAttribute("cy", e.offsetY);
  c.setAttribute("r", 10);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  img.appendChild(c);

  if (prevX != -1){
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", prevX);
    l.setAttribute("y1", prevY);
    l.setAttribute("x2", e.offsetX);
    l.setAttribute("y2", e.offsetY);
    l.setAttribute("stroke", "black");
    img.appendChild(l);
  }
  prevX = e.offsetX;
  prevY = e.offsetY;
});

clr.addEventListener('click', function(e){
  var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("width", img.getAttribute("width"));
  rect.setAttribute("height", img.getAttribute("height"));
  rect.setAttribute("fill", "white");
  img.appendChild(rect);
  prevX = -1
});

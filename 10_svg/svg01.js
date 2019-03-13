var img = document.getElementById("vimage");
var mv = document.getElementById("but_move");
var clr = document.getElementById("but_clear");

img.addEventListener('click', function(e){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", e.offsetX);
  c.setAttribute("cy", e.offsetY);
  c.setAttribute("r", 20);
  c.setAttribute("fill", "purple");
  c.setAttribute("stroke", "black");
  img.appendChild(c);
});



clr.addEventListener('click', function(e){
  while (img.firstChild)
    img.removeChild(img.firstChild);
});

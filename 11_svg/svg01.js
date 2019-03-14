var img = document.getElementById("vimage");
var mv = document.getElementById("but_move");
var clr = document.getElementById("but_clear");

var newDot = true;

var addDot = function(x, y){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 20);
  c.setAttribute("fill", "purple");
  c.setAttribute("stroke", "black");
  img.appendChild(c);
  return c;
}

var setDot = function(c){
  c.addEventListener('click', function(){
    if (c.getAttribute("fill") == "purple")
      c.setAttribute("fill", "green");
    else {
      c.remove();
      var newC = addDot(Math.random() * img.getAttribute("width"),
                        Math.random() * img.getAttribute("height"));
      img.appendChild(newC);
      setDot(newC);
    }
    newDot = false;
  });
}

img.addEventListener('click', function(e){
  if (newDot){
    var c = addDot(e.offsetX, e.offsetY);
    setDot(c);
  }
  newDot = true;
});

clr.addEventListener('click', function(e){
  while (img.firstChild)
    img.removeChild(img.firstChild);
});

// mv.addEventListener('click', function(){
//   for (i = 0; i < )
// });

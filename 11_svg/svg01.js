var img = document.getElementById("vimage");
var mv = document.getElementById("but_move");
var sct = document.getElementById("but_scatter");
var clr = document.getElementById("but_clear");
var id = 0;

var circles = [];

var newDot = true;

var addDot = function(x, y){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 20);
  c.setAttribute("fill", "purple");
  c.setAttribute("stroke", "black");
  img.appendChild(c);
  c.x = x;
  c.y = y;
  c.xVel = 1;
  c.yVel = 1;
  circles.push(c);
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

var update = function(){
  id = window.requestAnimationFrame(update);
  var c, r;
  for (i = 0; i < circles.length; i ++){
    c = circles[i];
    r = c.getAttribute("r");
    c.x += c.xVel;
    c.y += c.yVel;
    c.setAttribute("cx", c.x);
    c.setAttribute("cy", c.y);
    if (c.x >= img.getAttribute("width") - r)
      c.xVel = -Math.abs(c.xVel);
    if (c.x <= r)
      c.xVel = Math.abs(c.xVel);
    if (c.y >= img.getAttribute("height") - r)
      c.yVel = -Math.abs(c.yVel);
    if (c.y <= r)
      c.yVel = Math.abs(c.yVel);
  }
}

mv.addEventListener('click', function(){
  window.cancelAnimationFrame(id);
  update();
});

sct.addEventListener('click', function(){
  var angle;
  for (i = 0; i < circles.length; i ++){
    angle = Math.random() * 2 * Math.PI;
    circles[i].xVel = 2 * Math.cos(angle);
    circles[i].yVel = 2 * Math.sin(angle);
  }
})

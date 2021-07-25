var r = 0
var g = 0
var b = 0
function setup() {
  var button_red = createButton("RED");
  button_red.position(100, 50);
  button_red.mousePressed(red_bg);
  var button_green = createButton("GREEN");
  button_green.position(250, 50);
  button_green.mousePressed(green_bg);
 createCanvas(400,400);
}
function red_bg(){
r = 255;
g = 0;
b = 0;
}
function green_bg(){
r = 0;
g = 255;
b = 0;
}
function draw() 
{
 background(r,g,b);
 drawSprites();
}





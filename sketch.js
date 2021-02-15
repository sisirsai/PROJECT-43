var hr,min,sec;
var hrAngle,minAngle,secAngle;
var clock;

function preload(){
  clock = loadImage("clock.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
hr = hour();
min = minute();
sec = second();

angleMode(DEGREES);

secAngle = map(sec,0,60,0,360);
minAngle = map(min,0,60,0,360);
hrAngle = map(hr%12,0,12,-0,360);1

}

function draw() {
  background(200);  
    textSize(35);
  text("TICK TOK",500,500);
   textSize(30);
  text("TICK TOK",500,450);
   textSize(25);
  text("TICK TOK",500,400);
   textSize(20);
  text("TICK TOK",500,350);
   textSize(15);
  text("TICK TOK",500,300);
   textSize(10);
  text("TICK TOK",500,250);
   textSize(5);
  text("TICK TOK",500,200);
   textSize(0);
  text("TICK TOK",500,150);
imageMode(CENTER);
  image(clock,197,200,300,300)

translate(200,200)
rotate (-90);

  hr = hour();
min = minute();
sec = second();

angleMode(DEGREES);

secAngle = map(sec,0,60,0,360);
minAngle = map(min,0,60,0,360);
hrAngle = map(hr%12,0,12,-0,360);


stroke(0);

  push();
  rotate(secAngle);
  line(0,0,120,0);
  pop();
  strokeWeight(7);
  push();
  rotate(minAngle);
  line(0,0,115,0);
  pop();  
  
  push();
  rotate(hrAngle);
  line(0,0,80,0);
  pop();


  
}

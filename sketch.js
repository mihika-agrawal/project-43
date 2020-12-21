

var scAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(0);  

  text("12",400,90);
  text("3",500,200);
  text("6",400,300);
  text("9",300,200);

var hr= hour();
var mn= minute();
var sc= second();


 scAngle=map(sc,0,60,270,630);
 mnAngle=map(mn,0,60,270,630);
 hrAngle=map(hr-12,0,12,270,630);

 translate(400,200);

 push();
 angleMode(DEGREES);
 rotate(scAngle);
 stroke("red");
 strokeWeight(7);
 line(0,0,110,0);
 pop();

 push();
 angleMode(DEGREES);
 rotate(mnAngle);
 stroke("green");
 strokeWeight(7);
 line(0,0,100,0);
 pop();

 push();
 angleMode(DEGREES);
 rotate(hrAngle);
 stroke("blue");
 strokeWeight(7);
 line(0,0,75,0);
 pop();

  drawSprites();
}
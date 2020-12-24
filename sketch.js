const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var plinkos = []
var particle = []
var divisions = []
var ground1
var divisionHeight = 300
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height-10,width,20)
  for (var k = 0;k <= width; k = k+80){
    divisions.push(new Divider(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  for (var i = 40; i<=width; i=i+50){
    plinkos.push(new Plinko(j,475))
  }
    Engine.run(engine);
}

function draw() {
  background("black");  
  drawSprites();
  //divisions[k].display()
  for (var i = 0; i< plinkos.length; i++){
    plinkos[i].display()
  } 
  if (frameCount%60==0){
    particle.push(new Particles(random(width/2-10,width/2+10),10,10))
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display()
  }
  for (var j = 0; j< particle.length; j++){
    particle[j].display()
  } 
  ground1.display()
  }
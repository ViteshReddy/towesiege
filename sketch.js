const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground,slingshot,polygon1,stand,ball,stand1;
var box8,box9,box10,box11,box12,box13,box14,box15,box16;

function preload(){
  polygon1 = loadImage("polygon.png");
}


function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ball= Bodies.circle(50,200,20);
  World.add(world,ball);
  slingshot = new SlingShot(this.ball,{x:100, y:200});
  ground = new Ground(600, 390, 1200, 20);
  stand = new Stand(390,300,250,20);
  stand1 = new Stand(950,220,250,20);
  box1 = new Box(900,100,30,40);
  box2 = new Box(930,100,30,40);
  box3 = new Box(960,100,30,40);
  box4 = new Box(990,100,30,40);
  box5 = new Box(1020,100,30,40);
  box6 = new Box(930,60,30,40);
  box7 = new Box(960,60,30,40);
  box8 = new Box(990,60,30,40);
  box9 = new Box(960,20,30,40);
box10= new Box(330,235,30,40);
box11= new Box(360,235,30,40);
box12= new Box(390,235,30,40);
box13= new Box(420,235,30,40);
box14= new Box(450,235,30,40);
box15= new Box(360,195,30,40);
box16= new Box(390,195,30,40);
box17= new Box(420,195,30,40);
box18= new Box(390,155,30,40);
    }

function draw(){
  background(0);
  Engine.update(engine);
  strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
   ground.display(); 
   stand.display();
   stand1.display();
   imageMode(CENTER);
   image(polygon1,ball.position.x,ball.position.y,40,40);
  slingshot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
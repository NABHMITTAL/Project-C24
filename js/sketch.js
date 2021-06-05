const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9, box10,box11,box12,box13,box14,box15;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 2500, 20);

  hero = new Hero(500,400,200, 200);
  rope = new Rope(hero.body, { x: 500, y: 400 });
  monster = new Monster(1650,150,300, 500);

  box1 = new Box(1100, 100, 70, 70);
  box2 = new Box(1300, 10, 70, 70);
  box3 = new Box(1300, 50, 70, 70);
  box4 = new Box(1300, 100, 70, 70);
  box5= new Box(1100, 10, 70, 70);
  box6= new Box(1100, 50, 70, 70);
  box7= new Box(900, 100, 70, 70);
  box8= new Box(900, 50, 70, 70);
  box9= new Box(900, 10, 70, 70);
  box10= new Box(1300, 10, 70, 70);
  box11= new Box(1300, 10, 70, 70);
  box12= new Box(1100, 10, 70, 70);
  box13= new Box(1100, 10, 70, 70);
  box14= new Box(900, 10, 70, 70);
  box15= new Box(900, 10, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
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


  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
rope.fly();
}

function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(hero.body,{x: 500, y: 400})
rope.attach(hero.body);
}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var tree, ground, stone, boy;
var constraint1;

var world;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1000,500,700,1000);
	ground = new Ground(width/2,675,width,50);
	stone = new Stone(200,480,40);
	constraint1 = new Constraint(stone.body,{x:200,y:480});
	boy = new Boy(270,560,250,350);
	mango1 = new Mango(900,200,40);
	mango2 = new Mango(1000,100,40);
	mango3 = new Mango(1100,200,40);
	mango4 = new Mango(800,300,40);
	mango5 = new Mango(850,400,40);
	mango6 = new Mango(1000,300,40);
	mango7 = new Mango(1100,400,40);
	mango8 = new Mango(1200,250,40);
	mango9 = new Mango(1300,300,40);
	mango10 = new Mango(1200,350,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
	tree.display();
	ground.display();
	boy.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	constraint1.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    constraint1.fly();
}


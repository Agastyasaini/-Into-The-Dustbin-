
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ,  paper ;
var wall1 , wall2 , wall3 ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new groundclass(width/2,600,width,20)
  	paper = new paperclass(200,500,50)

  wall1 = new groundclass(600,580,200,20);
  wall2 = new groundclass(500,540,20,100);
  wall3 = new groundclass(700,540,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground.display();
  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();

 
}

function keyPressed() {
  if ( keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
  
}


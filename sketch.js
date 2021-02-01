
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(350,100,400,20)
	bob1 = new BOB(200,500,30)
	bob2 = new BOB(260,500,30)
	bob3 = new BOB(320,500,30)
	bob4 = new BOB(380,500,30)
	bob5 = new BOB(440,500,30)
	bob6 = new BOB(500,500,30)
	rope1= new ROPE(bob1.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 stroke("black")
 strokeWeight(3);
  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  rope1.display();
 
}




var d1,d2,d3;
var paper1;
var ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 1600);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground1= new ground(width/2,650,width,20);
	
	paper1= new paper(100,250,40);
	
	d1= new dustbin(1180,590,20,100);
	d2= new dustbin(980,590,20,100);
	d3= new dustbin(1080,640,220,20);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  drawSprites();
 
  ground1.display();
  paper1.display();
  d1.display();
  d2.display();
  d3.display();
  
  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}

}

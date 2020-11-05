
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body =  Matter.Body;
 
var engine, world ;
var box1,box2,box3,ground1,paper,paperImg,boxImg ;

function preload(){
 
  paperImg = loadImage("paper.png");
  boxImg   = loadImage("dustbin.png");

}

function setup() {
	createCanvas(850,380);


	engine = Engine.create();
	world = engine.world;

	//creating bodies 
	box1 = new box(600,340,50,10);
	box2 = new box(625,325,5,60);
	box3 = new box(575,325,5,60); 
  ground1 = new ground(850/2,350,900,10);

  //paper ball
  paper = Bodies.circle(150,250,22);
  World.add(world,paper);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ground1.display();   

  ellipseMode(RADIUS);
  fill("pink"); 

  //adding images to box and paper
  image(paperImg,paper.position.x,paper.position.y,30,30);
  image(boxImg,570,290,60,60);

  if(keyDown("space")){
   paper.force.x = 0.003 ;
   paper.force.y = -0.008 ; 
  }

  if(paper.position.x>700){
    paper.position.x = 150 ;
    paper.position.y = 250 ;
  }

}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(0,height,2400,20)
    
    stone = new Stone(700,320);
    rubber = new Rubber(900,450,75);
    hammer = new Hammer(10,100);
	sand1 = new Sand(300,450,10);
	sand2 = new Sand(330,450,10);
	sand3 = new Sand(360,450,10);
	sand4 = new Sand(390,450,10);
	sand5 = new Sand(420,450,10);
	sand6 = new Sand(450,450,10);
	sand7 = new Sand(480,450,10);
	sand8 = new Sand(520,450,10);
	sand9 = new Sand(540,450,10);
	sand10 = new Sand(560,450,10);
	iron = new Iron(100,300)

}


function draw() {
  background(255);
  Engine.update(engine);

  hammer.display()
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron.display();
  
  drawSprites();
 
}




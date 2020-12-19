const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground1;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;
var block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22;

var block23,block24,block25,block26,block27,block28,block29,block30,block31;
var block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42;

var slingshot,polygon;
var polygonImg;
function preload() {
    polygonImg = loadImage("image/polygon.png");
}

function setup(){
    var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(650,400,1300,20);
   
    block1 = new Block(307,282,40,50);
    block2 = new Block(345,280,40,50);
    block3 = new Block(365,280,40,50);
    block4 = new Block(405,280,40,50);
    block5 = new Block(445,280,40,50);
    block6 = new Block(485,280,40,50);
    block7 = new Block(505,280,40,50);
    block8 = new Block(545,280,40,50);

    block9 = new Block(347,242,40,50);
    block10 = new Block(365,240,40,50);
    block11= new Block(405,240,40,50);
    block12 = new Block(445,240,40,50);
    block13 = new Block(485,240,40,50);
    block14 = new Block(508,242,40,50);
    
    block15 = new Block(365,200,40,50);
    block16= new Block(405,200,40,50);
    block17 = new Block(445,200,40,50);
    block18 = new Block(485,200,40,50);

    block19= new Block(407,160,40,50);
    block20 = new Block(441,160,40,50);

    block21 = new Block(420,120,40,50);

    //second ground.
    stand1 = new Ground(426,300,400,10);
    stand2 = new Ground(1100,300,400,10);

    block23 = new Block(960,260,40,50);
    block24 = new Block(1000,260,40,50);
    block25 = new Block(1040,260,40,50);
    block26 = new Block(1080,260,40,50);
    block27 = new Block(1120,260,40,50);
    block28 = new Block(1160,260,40,50);
    block29 = new Block(1200,260,40,50);
    
    block30 = new Block(1000,220,40,50);
    block31 = new Block(1040,220,40,50);
    block32 = new Block(1080,220,40,50);
    block33 = new Block(1120,220,40,50);
    block34 = new Block(1160,220,40,50);

    block35 = new Block(1040,180,40,50);
    block36 = new Block(1080,180,40,50);
    block37 = new Block(1120,180,40,50);

    block38 = new Block(1080,140,40,50);
   
    // polygon holder with sling.
    polygon = Bodies.circle(50,200,20);
    
    World.add(world,polygon);
    
    slingshot = new SlingShot(this.polygon,{x:100,y:200});    
}

function draw(){
    background(175);
    Engine.update(engine);
    strokeWeight(4);

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y, 40,40);

    //first ground.
    ground.display();
    

    strokeWeight(1);
    stroke(0);
    fill("#86CDE9");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
 
    strokeWeight(1);
    stroke(0);
    fill("#FEBFCA");
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    strokeWeight(1);
    stroke(0);
    fill("#3EDFCF");
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    strokeWeight(1);
    stroke(0);
    fill("#ff0000");
    block19.display();
    block20.display();

    strokeWeight(1);
    stroke(0);
    fill("#808080");
    block21.display();

    //second ground displays.
   stand1.display();
   stand2.display();
  
   strokeWeight(1);
    stroke(0);
    fill("#86CDE9");
   block23.display();
   block24.display();
   block25.display();
   block26.display();
   block27.display();
   block28.display();
   block29.display();

   strokeWeight(1);
    stroke(0);
    fill("#FEBFCA");
   block30.display();
   block31.display();
   block32.display();
   block33.display();
   block34.display();

   strokeWeight(1);
   stroke(0);
   fill("#3EDFCF");
   block35.display();
   block36.display();
   block37.display();

   strokeWeight(1);
    stroke(0);
    fill("#808080");
   block38.display();

    // display polygon.
    
    slingshot.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}


function mouseReleased(){
    slingshot.fly();
}

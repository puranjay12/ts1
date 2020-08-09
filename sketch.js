const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, polygon, sling, pentagon, ground1, ground2
function preload() {
    pentagon = loadImage("pentagon.png")
}


function setup(){
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon)
  

    sling = new SlingShot(this.polygon,{x:100,y:200})

    box1 = new Box(330,235,30,40)
    box2 = new Box(360,235,30,40)
    box3 = new Box(390,235,30,40)
    box4 = new Box(420,235,30,40)
    box5 = new Box(450,235,30,40)
  
    box6 = new Box(360,195,30,40)
    box7 = new Box(390,195,30,40)
    box8 = new Box(420,195,30,40)
  
    box9 = new Box(390,155,30,40)

    ground1 = new Ground(390,325,200,10)
    ground2 = new Ground(600,790,1200,10)

}

function draw(){
   
    background(255,255,255);  
  Engine.update(engine);

  imageMode(CENTER)
  image(pentagon,polygon.position.x,polygon.position.y,40,40)
  
 
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  ground1.display()
  sling.display()
 ground2.display()
  
    
}

function mouseDragged(){
    
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
  sling.fly();
   
}




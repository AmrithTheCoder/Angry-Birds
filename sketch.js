const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1, log1, bird1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,500,60,60);
    box2 = new Box(700,500,60,60);
    box3 = new Box(500,400,60,60);
    box4 = new Box(700,400,60,60);
    box5 = new Box(600,250,60,60);
    ground = new Ground(500,height,1000,20);
    log1 = new Log(600,400, 300, PI/2);
    log2 = new Log(600,300,300, PI/2);
    log3 = new Log(550,260,200,PI/5);
    log4 = new Log(650,260,200, -PI/5);
    bird1 = new Bird(100,100);

    pig1 = new Pig(600,500)
    pig2 = new Pig(600,400)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box3.display();
    box4.display();
    box5.display();
    bird1.display();
}
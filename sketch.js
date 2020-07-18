const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,750,50,50);
    pig1=new Pig(900,750);
    box2 = new Box(1000,750,50,50);
    ground = new Ground(600,height,1200,20)
    bird=new Bird(100,100);

    log1=new Log(900,700,350,PI/2);
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig1.display();
    log1.display();
}
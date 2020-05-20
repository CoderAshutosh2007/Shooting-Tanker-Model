const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var piece1;

function setup() {
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    piece1 = new Tanker(200,200,20,20);
}

function draw() {
background(255,255,255);
Engine.update(engine);

piece1.display();

}


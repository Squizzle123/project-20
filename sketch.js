
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
function setup()
{
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world;

var ballOptions = {
  restitution: 0.9
}
  ball = Bodies.circle(100,10,20,ballOptions)
  World.add(world,ball)

  var groundOptions = {
    isStatic : true
  }
  ground = Bodies.rectangle(0,390,400,20,groundOptions)
  World.add(world, ground)
  
}

function draw() 
{
  background(51);

  Engine.update(engine)
  
  fill("green")
  ellipse(ball.position.x,ball.position.y,20)
  fill("purple")
  rect(ground.position.x, ground.position.y, 400,20)

 
}


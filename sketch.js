const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var squares1, square2;

function setup() {
    createcanvas(1000,800);
    square1 = new square(500,600,50,50);
    square2 = createsprite(500,200,50,50);
    square1.isStatic = true;
    slingshot = new SlingShot(square1,square2);
}

function draw() {
    background(0)

    
}

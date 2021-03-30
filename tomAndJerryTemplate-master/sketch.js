var Mouse,Cat
var MouseImg1,MouseImg2,MouseImg3;
var catImg1,catImg2,catImg3;
var BackgroundImg;

function preload() {

    //load the images here
    BackgroundImg = loadImage("garden.png");
    
    MouseImg1 = loadImage("mouse2.png");
    MouseImg2 = loadImage("mouse3.png");
    MouseImg3 = loadImage("mouse1.png");

    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat3.png");
    catImg3 = loadImage("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

Mouse = createSprite(20,20,800,50);
Mouse = Addimage(MouseImg1);

Cat = createSprite(20,20,150,50);
Cat  = Addimage(catImg1);

}

function draw() {

    background(BackgroundImg);
    //Write condition here to evalute if tom and jerry collide

    if (Cat.x - Mouse.x <cat.width/2 + Mouse.width/2) {
        Mouse.Addimage(MouseImg3);
        Cat.Addimage(catImg3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW) {
   Mouse.Addimage(MouseImg2);
  }

  if (keyCode ===RIGHT_ARROW) {
  Cat.Addimage(catImg2);
  Cat.x=cat.x-10;
  }
}



class Block{
    constructor(x,y,width,height,speedX,speedY,clr1,clr2,clr3,d){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;
    this.clr1 = clr1;
    this.clr2 = clr2;
    this.clr3 = clr3;
    this.d = d;
    }
   
display1(){
    if (keyIsDown(32)){
this.clr1 = (random(0,255));
this.clr2 = (random(0,255));
this.clr3 = (random(0,255));
    }

    else{
    fill(this.clr1,this.clr2,this.clr3);
    rect(this.x,this.y,this.width,this.height);
    
    if ((this.clr1 < 0) || (this.clr2 < 0) || (this.clr3 < 0)){
        this.clr1 = (random(100,220));
        this.clr2 = (random(100,220));
        this.clr3 = (random(100,220));
    }
}
}

display2(){
    if (keyIsDown(32)){
        this.clr1 = (random(0,255));
        this.clr2 = (random(0,255));
        this.clr3 = (random(0,255));
    }

    else{
        fill(this.clr1,this.clr2,this.clr3);
        circle(this.x,this.y,this.d)
        if ((this.clr1 < 0) || (this.clr2 < 0) || (this.clr3 < 0)){
            this.clr1 = (random(100,220));
        this.clr2 = (random(100,220));
        this.clr3 = (random(100,220));
                }
    
    }
}


move1(){
    this.x = this.x + this.speedX
    if(this.x > (windowWidth - this.width) || this.x <= 0){
        this.speedX = this.speedX * -1;
        this.clr1 = this.clr1 - 1;
        this.clr2 = this.clr2 - 1;
        this.clr3 = this.clr3 - 1;
    }

    this.y = this.y + this.speedY
    if(this.y > (windowHeight - this.height) || this.y <= 0){
        this.speedY = this.speedY * -1;
        this.clr1 = this.clr1 - 1;
        this.clr2 = this.clr2 - 1;
        this.clr3 = this.clr3 - 1;
    }
}

move2(){
    this.x = this.x + this.speedX
    if(this.x > (windowWidth - this.d/2) || this.x <= 0){
        this.speedX = this.speedX * -1;
        this.clr1 = this.clr1 - 1;
        this.clr2 = this.clr2 - 1;
        this.clr3 = this.clr3 - 1;
    }

    this.y = this.y + this.speedY
    if(this.y > (windowHeight - this.d/2) || this.y <= 0){
        this.speedY = this.speedY * -1;
        this.clr1 = this.clr1 - 1;
        this.clr2 = this.clr2 - 1;
        this.clr3 = this.clr3 - 1;
    }

}

}




let Block1 = new Block (50,50,30,30,25,215,255,255,255,25);
let Block2 = new Block (100,75,50,50,215,155,255,255,255,50);
let Block3 = new Block (150,100,70,70,215,25,115,155,155,50);
let Block4 = new Block (200,125,90,100,155,195,255,255,255,75);
let Block5 = new Block (250,150,80,60,215,135,115,115,155,35);
let Block6 = new Block (300,175,60,70,135,215,115,115,115,95);


   function setup(){
    createCanvas(windowWidth,windowHeight);
   
}

function draw() {
  if(keyIsDown(16)){
    background(random (0,255),random(0,255),random(0,255));
  }
else{
    background(0);
}



Block1.display1();
Block1.move1();
Block2.display1();
Block2.move1();
Block3.display1();
Block3.move1();
Block4.display1();
Block4.move1();
Block5.display1();
Block5.move1();
Block6.display1();
Block6.move1();

Block1.display2();
Block1.move2();
Block2.display2();
Block2.move2();
Block3.display2();
Block3.move2();
Block4.display2();
Block4.move2();
Block5.display2();
Block5.move2();
Block6.display2();
Block6.move2();

}







class Block{
    constructor(x,y,width,height,speedX,speedY,clr,d){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;
    this.clr = clr;
    this.d = d;
    }
   
display1(){
    fill(this.clr);
    rect(this.x,this.y,this.width,this.height);
    if (this.clr < 0){
this.clr = this.clr + 255
    }
}

display2(){
    fill(this.clr)
    circle(this.x,this.y,this.d)
    if (this.clr < 0){
        this.clr = this.clr + 255
            }

}


move1(){
    this.x = this.x + this.speedX
    if(this.x > (windowWidth - this.width) || this.x <= 0){
        this.speedX = this.speedX * -1
        this.clr = this.clr - 1
    }

    this.y = this.y + this.speedY
    if(this.y > (windowHeight - this.height) || this.y <= 0){
        this.speedY = this.speedY * -1
        this.clr = this.clr - 1
    }
}

move2(){
    this.x = this.x + this.speedX
    if(this.x > (windowWidth - this.d/2) || this.x <= 0){
        this.speedX = this.speedX * -1
        this.clr = this.clr - 1
    }

    this.y = this.y + this.speedY
    if(this.y > (windowHeight - this.d/2) || this.y <= 0){
        this.speedY = this.speedY * -1
        this.clr = this.clr - 1
    }
}

}





let Block1 = new Block (50,50,30,30,25,215,225,25);
let Block2 = new Block (100,75,50,50,215,155,245,50);
let Block3 = new Block (150,100,70,70,215,25,215,50);
let Block4 = new Block (200,125,90,100,155,195,255,75);
let Block5 = new Block (250,150,80,60,215,135,235,35);
let Block6 = new Block (300,175,60,70,135,215,205,95);


   function setup(){
    createCanvas(windowWidth,windowHeight);
   
}

function draw() {
  background(0);
  
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




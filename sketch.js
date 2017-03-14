var drops=[];
var dropNum = 500;
function setup() {
  createCanvas(600,300);
  for(var i=0; i<dropNum; i++){
    drops[i] = new raindrop(random(width),random(-200,0));
    }
  }

function draw() {

  background(0);
  //stroke(185,20,255);
  for (var i = 0; i<dropNum; i++) {
  drops[i].show();
  drops[i].fall();
  }
}

function raindrop(x,y){

  this.x = x;
  this.y = y;
  this.z = random(0,20);
  this.size = map(this.z,0,20,6,14);
  this.yspeed = map(this.z,0,20,2,5);
  this.yacc = 0.06;

  this.fall = function(){
    this.y= this.y + this.yspeed;
    this.yspeed = this.yspeed + this.yacc;
    if (this.y > height){
      this.y = random(-200,0);
      this.yspeed = map(this.z,0,20,2,5);
    }
  }

  this.show = function(){
    stroke(185,20,255,map(this.z,0,20,0,255));
    strokeWeight(map(this.z,0,20,1,3));
    line(this.x,this.y,this.x,this.y+this.size);
  }
}

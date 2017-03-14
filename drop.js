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
    strokeWeight(map(this.z,0,20,1,2));
    line(this.x,this.y,this.x,this.y+this.size);
  }
}

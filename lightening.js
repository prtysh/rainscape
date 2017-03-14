function lightening(){
  this.start = function(){
    this.starttime = frameCount;
    this.lifespan = random (2,10);
    this.endtime = frameCount + this.lifespan;
    //this.color = color(0,0,100);
  }

  this.exists = function(){
    return (frameCount < this.endtime);
  }

  this.show = function(){
    //fill(this.color);
    fill(random(200,255),random(155,255));
    rect(0,0,width,height);
  }
}

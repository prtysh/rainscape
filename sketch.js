var drops=[];
var dropNum = 500;
var light;
var struck;
var timer;
var lightening ;
var i;
function setup() {
  createCanvas(600,300);
  for(var i=0; i<dropNum; i++){
    drops[i] = new raindrop(random(width),random(-200,0));
    }
  lightening = new lightening();
  lightening.start();
}

function draw() {
  light = random(1000);
  background(0);

  if (light < 10 && (lightening.exists()==false)) {
    lightening.start();
  }

  if(lightening.exists() == true) {
    lightening.show();
  }
  //background(0);
  for (var i = 0; i<dropNum; i++) {
    drops[i].show();
    drops[i].fall();
  }

}

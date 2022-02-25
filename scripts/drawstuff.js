var timer = 0;
var speed = 20;
var incr = -0.01;
var wind = 2;

var rain = {
  xs: [], 
  ys: [],
  dys: [],
  dxs: [],
  depth: []
};
var ripples = {
  xs: [],
  ys: [],
  ds: [],
  ogds: [],
  dds: [],
  r: [],
  g: [],
  b: []
};
var color_r = 0
var color_g = 255
var color_b = 0

function setup() {
createCanvas(innerWidth, innerHeight);
background(0, 0, 20); 
}

function draw () {
var rrr = Math.floor(Math.random(0,1)*255)
background(color_r + rrr, color_g - rrr, color_b + rrr, 15);   

// for some ~dynamic movement~
timer ++;
speed += incr;
if(speed > 5 || speed < -5) 
  incr = -incr;
//change direction randomly
if (timer%40 === 0)
  wind += random(-0.75,0.75);
if(timer%(Math.floor(speed)) === 0) {
//rain drops 
  //add
  rain.xs.push(random(0 - Math.abs(wind)*innerHeight, innerWidth + Math.abs(wind)*innerHeight));
  rain.ys.push(0);
  rain.dxs.push(wind);
  rain.dys.push(random(25,30));
  rain.depth.push(random(innerHeight*(3/4), innerHeight*(9.7/10)));
}
  //move
  for(var j = 0; j < rain.xs.length; j++) {
    stroke(255);
    strokeWeight((rain.depth[j]- innerHeight*(1/2))/200);
    //draw
    line(rain.xs[j], rain.ys[j], rain.xs[j] + rain.dxs[j], rain.ys[j] + rain.dys[j]);
    //move
    rain.xs[j] += rain.dxs[j];
    rain.ys[j] += rain.dys[j];
    
    //draw splash
    for(var i = 0; i < ripples.xs.length; i++) {

        noStroke();
        fill(ripples.r[i], ripples.g[i], ripples.b[i], (6)*ripples.ds[i]);
        ellipse(ripples.xs[i], ripples.ys[i], ripples.ds[i], ripples.ogds[i]*(0.15));

        //~ripple~
        if(timer%10 === 0)
          ripples.ds[i] += ripples.dds[i];

        if(ripples.ds[i] > ripples.ogds[i]*1.5) {
          //remove drop
          ripples.xs.splice(i,1);
          ripples.ys.splice(i,1);            
          ripples.ds.splice(i,1);
          ripples.ogds.splice(i,1);
          ripples.dds.splice(i,1);
          ripples.r.splice(i,1);
          ripples.g.splice(i,1);
          ripples.b.splice(i,1);
        }
    }
    
  }
  

}

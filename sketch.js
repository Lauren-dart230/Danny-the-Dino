let x=0;
let y=0;
let bColor=240;
let rColor=151;
let gColor=240;
let srColor=250;
let sgColor=230;
let sbColor=55;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  
  
  
  //sky
  background(rColor+0, gColor+ 0, bColor+0);
  
  
  //sun 
  strokeWeight(2.5);
  fill(srColor+0, sgColor+0, sbColor+0);
  ellipse (x,x,70,70);
  x=x+1;
  
  srColor=srColor + 1
  sgColor=sgColor-0.5 
  sbColor=sbColor -0.5
  bColor= bColor+ 2;
  rColor= rColor-1;
  gColor=gColor-1;
  
  //ground
  fill(46, 77, 49);
  rect(0,225,400,200);
  
 
  
  //linework
  strokeWeight (6)
  line (20,75,65,75);
  line (65,75,65,110);
  line (65,100,79,100);
  line (80,100,80,129);
  line (80,125,100,125);
  line (20,75,20,109);
  line (20,110,50,110);
  line (50,110,50,159);
  line (50,160,100,160);
  
  
  //neck 
  strokeWeight (0);
  fill(224, 20, 98);
  rect (50,125,50,35);
  rect (50,100,30,25);
  rect (20,75,45,35);
  
  //body
  strokeWeight(4);
  fill(224, 20, 98);
  rect(100,100,200,80);
  rect(100,180,40,80);
  rect(260,180,40,80);
  triangle (300,120,300,160,380,y+200);
  if (y< 300){
    
  }
  //y=y+1;
  
  
  
  //tiny triangles of feet and tail
  fill(0);
  strokeWeight(1)
  triangle (280,240,260,260,300,260);
  triangle (100,260,120,240,140,260);
  triangle (300,120,320,120,320,140);
  triangle (320,140,340,140,340,160);
  triangle (340,160,360,160,360,180);
  triangle (360,180,380,180,380,200);
  
  
  
  
  //back
  strokeWeight(1)
  triangle(160,80,140,100,180,100);
  triangle (200,80,180,100,220,100);
  triangle (240,80,220,100,260,100);
  triangle (100,100,120,80,140,100);
  triangle (260,100,280,80,300,100);
  
  //eyeball
  ellipse (30,85,10,10);
  fill(255);
  ellipse (30,85,7,7);
 
  
  

  
  
  
  
  
  
}
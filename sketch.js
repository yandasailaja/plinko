const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bgDarkImage;

var plinko=[[]];
var plinko2=[[]];

var division=[];
var div;

var particles=[];
function preload(){
bgDarkImage=loadImage("bgDark.jpg");
}

function setup() {
createCanvas(500,700)
frameRate(30);

  engine = Engine.create();
  world = engine.world;

var i,j=0,k,l=0;
for(k=0;k<=3;k++)
  {
    for(i=0;i<=11;i++)
      { 
        plinko[[i,k]]=new Plinko(30+j,70+l,10);
        j=j+40;
      } 
      if(i=11){i=0; j=0;}
    l=l+100;
  } 

  var a,b=0,c,d=0;
for(c=0;c<=3;c++)
  {
    for(a=0;a<=10;a++)
      { 
        plinko2[[a,c]]=new Plinko(45+b,120+d,10);
        b=b+40;
      } 
      if(a=11){a=0; b=0;}
    d=d+100;
}

var q,w=0;
for(q=0;q<=11;q++){

division[q]=new Division(0+w,575,5,250);
w=w+50 

div=new Division(248.6,698,498,5);
}

Engine.run(engine);




}

function draw() {
background(bgDarkImage);
Engine.update(engine); 

var i,k;
for(k=0;k<=3;k++)
  {
    for(i=0;i<=11;i++)
      { 
        plinko[[i,k]].display();
      } 
  } 
  var a,c;
  for(c=0;c<=3;c++)
    {
      for(a=0;a<=10;a++)
        { 
          plinko2[[a,c]].display();
        } 
    } 

for(q=0;q<=11;q++){
division[q].display();  
}   
div.display();

if(frameCount%10===0){
  particles.push(new Particle1(random(width/2-10,width/2+10),10,10));
  }
for(var j=0;j<particles.length;j++){
particles[j].display();
}

drawSprites();
}

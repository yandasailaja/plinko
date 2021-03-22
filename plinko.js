    class Plinko{
        constructor(x,y,r){
            var options = {
            isStatic: true
            }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r=r;
        World.add(world, this.body);
        }
        display(){
        push();
        translate(this.body.position.x, this.body.position.y);
ellipseMode(RADIUS);
fill("white");
strokeWeight(1);
stroke("black");
 ellipse(0,0, this.r, this.r);
        pop();
          }
        }    
class Plinko{

    constructor(x,y){
           var options = {
               isStatic:true,
               restitution:1,
               friction:0,
               
  
           }
           this.r = 10
            this.body = Bodies.circle(x,xy,this.r,options);
            this.width = width;
            this.height = height;
  
           World.add(world,this.body);
    }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          imageMode(CENTER);
          noStroke();
          ellipseMode(RADIUS);
          ellipse(0,0,this.r,this.r);
          fill(255);
          pop();
         
      }
  
  
  }
  
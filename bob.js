class BOB{
    constructor(x,y,radius){
    var options={
    isStatic:true,
    restitution:0,
    friction:10,
    density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(255,0,255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
     }
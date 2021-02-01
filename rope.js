class ROPE {
    constructor(body1, body2,offsetX,offsetY,pointB) {
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.pointB = pointB;
      var options = {
      bodyA: body1,
      bodyB: body2,
      pointB:{x:this.offsetX,y:this.offsetY}
    }
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
  
    display() {
   var pointA = this.rope.bodyA.position;
   var pointB = this.rope.bodyB.position;
   strokeWeight(2);
   var anchorX = pointA.x
   var anchorY = pointB.y

   var anchorX = pointB.x+this.offsetX
   var anchorY = pointB.x+this.offsetY

   line(anchorX,anchorY,anchorX,anchorY);
    }
  }  
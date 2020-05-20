class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        static : true
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;

    World.add(world, this.body);
  }

  display() {
    push();
    fill(255,255,255)
    stroke("black");
    strokeWeight(5);
    pop();

  }
}

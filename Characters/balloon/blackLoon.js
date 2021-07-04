class blackBalloon {
    constructor(x, y) {
      var options = { 
        density: 0.2, 
        frictionAir: 0.5
      };

      this.body = Bodies.circle(x, y, 10, options);

      this.visiblity=255;
      this.score=-10;

      this.image = loadImage("images/black loon.jpg");

      World.add(world, this.body);

    }
  
    display() {

      push();

      translate(this.body.position.x, this.body.position.y);

      ellipseMode(CENTER);
      ellipse(0, 0, this.radius,this.radius);
      image(this.image, this.body.position.x, this.body.position.y, 0, 0)

      pop();
        
 }
 AddScore(){

  World.remove(world, this.body);

  push();

  this.visiblity = this.visiblity - 5;
  tint(255,this.visiblity);
  image(this.image, this.body.position.x, this.body.position.y, 50, 50);

  pop();

 }
}
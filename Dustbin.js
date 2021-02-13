class Dustbin {
    constructor(x, y, width, height) {
      var options = {
           'isStatic': true,
          'restitution':0.5,
          'friction':1.2,
		  'density':5.0,
		  
      }
      this.image = loadImage("Dustbin.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("red");
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
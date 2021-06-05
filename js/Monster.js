class Monster {
  constructor(x,y,w,h)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };

		this.body=Bodies.rectangle(x, y, w,h, options);
		this.x=x;
		this.y=y;
		this.width=w;
		this.height =h 

		this.image=loadImage("sprites/monster1.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y);
			rectMode(CENTER)

			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop()
			
	}
}

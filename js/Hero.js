class Hero {
  constructor(x,y,w,h)
	{
		var options = { 
			density: 1, 
			frictionAir: 0
		};
		this.x=x;
		this.y=y;
		this.width=w;
		this.height = h;
		this.image=loadImage("sprites/superhero1.png");
		this.body=Bodies.rectangle(x, y, h,w, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop()
			
	}
}

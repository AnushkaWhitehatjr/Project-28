class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2
		}
		this.r=r
		this.body=Bodies.circle(x, y, this.r/2, options)
		this.image = loadImage("Pluckingmangoes/stone.png");
		World.add(world, this.body);
	}

	display()
	{
			
			var stonePos=this.body.position;		

			push();
			translate(stonePos.x, stonePos.y);
			//ellipseMode(RADIUS);
			//ellipse(0,0,this.r, this.r);
			imageMode(CENTER);
			image(this.image, 0, 0, this.r*2,this.r*2);
			pop();
			
	}
}
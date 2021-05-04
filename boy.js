class Boy
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.w = width;
		this.h = height;
		this.body=Bodies.rectangle(x, y, width, height, options);
		this.image = loadImage("Pluckingmangoes/boy.png");
		World.add(world, this.body);
	}
	display()
	{
			
			var boyPos=this.body.position;		

			push()
			translate(boyPos.x, boyPos.y);
			imageMode(CENTER);
			image(this.image, 0, 0, this.w, this.h);
			//rectMode(CENTER)
			//rect(0,0,this.w, this.h);
			pop()
			
	}

}
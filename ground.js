class ground
{
	constructor(x,y,width,height)
	{
        var options=
        {
			isStatic:true			
	    }
		
		
        this.body=Bodies.rectangle(x, y, width, height , options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);

	}
	display()
	{
			var gPos=this.body.position;		
			push()
			translate(gPos.x, gPos.y);
			rectMode(CENTER)
			fill("brown")
			rect(0,0,this.width, this.height);
			pop();
			
    }
}

 class paper
 {
    constructor(x,y,radius)
    {
        var options= 
        {
            isStatic:false,
           'restitution':0.3,
           'friction': 0.5,
           'density': 1.2
        }
		
		this.image=loadImage("paper.png");
        this.body=Bodies.circle(x, y, radius/2, options);
		this.radius=radius;
		World.add(world, this.body);

	}
	display()


	{
			
			var paperpos=this.body.position;		
            push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			fill("pink");
			image(this.image,0,0,this.radius,this.radius);
			pop();
			
	}

}
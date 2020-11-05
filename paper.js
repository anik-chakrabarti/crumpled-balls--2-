class paper{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r,{isStatic: false});
        World.add(world,this.body);

        this.radius = r+10 ;
    }

    display(){
        var pos = this.body.position ;

        fill("pink");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
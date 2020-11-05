class Base{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world,this.body);
  
        this.height = h ;
        this.width  = w ;
  
      }
      display(){
          
          var pos = this.body.position ;
          fill("white");
          rect(pos.x,pos.y,this.width,this.height);
  
      }
}
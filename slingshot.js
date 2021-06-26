class Slingshot{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        this.sling=Constraint.create(option);
        this.pointB=pointB;
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.position;
            var pointB=this.pointB;
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
        
    }
}
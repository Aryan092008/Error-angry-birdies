class slingshot {
    constructor(bodyA,pointB){
        var O={
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:15
        }
        this.pointB=pointB
this.sling= Constraint.create(O);
World.add(world,this.sling)
    }
   fly(){
       this.sling.bodyA=null}
   display(){
       if(this.sling.bodyA
       ){
    var pointA= this.sling.bodyA.position;
    var pointB= this.pointB;
    strokeWeight(5);
    stroke("green");
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}        
}       
}
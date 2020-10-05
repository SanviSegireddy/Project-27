class rope{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}

        }
        this.rope=Costraint.create(options)
        World.add(worlds,this.rope)
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

        Line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}
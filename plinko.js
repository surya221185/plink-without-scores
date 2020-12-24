class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true,
            resistution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = x
        this.y = y
        this.r = 10
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        strokeWeight(3)
        fill("white")
        ellipse(0,0,this.r,this.r)
        pop()
    }
}
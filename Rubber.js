class Rubber{
    constructor(x,y,r){
        var options = {
            'density': 1,
            'friction' : 5.0,
            'restitution': 0.3
        }

        this.radius = r;
        this.body = Bodies.circle(x,y,(this.radius)/2,options)
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        strokeWeight(3);
        fill('darkblue')
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
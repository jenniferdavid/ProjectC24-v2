class Stone{
    constructor(x,y){
        var options = {
            'density': 12.0,
            'friction' : 1.0,
            'restitution': 0.8
        }
        this.body = Bodies.rectangle(x,y,150,150,options)
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(180/4);
        strokeWeight(3);
        fill('black')
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
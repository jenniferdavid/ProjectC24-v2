class Iron{
    constructor(x,y){
        var options = {
            'density': 5.0,
            'friction' : 3.0,
            'restitution': 0.8,
        }
        this.body = Bodies.rectangle(x,y,100,20,options)
        this.width = 100;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill('black')
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
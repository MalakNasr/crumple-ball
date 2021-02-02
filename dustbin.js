class dustbin{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
        display(){
            var pos =this.body.position;
            fill("white");
            imageMode(CENTER)
            image(this.image ,pos.x, 600, this.width, 200);
          }
        }
    
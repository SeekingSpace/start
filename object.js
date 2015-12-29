class spaceObject {
    var mass=0,x=0,y=0,velocity=0,direction=0/*degrees*/;
    var id;
    constructor(x,y,mass,velocity,direction,id) {
        this.mass=mass;
        this.x=x;
        this.y=y;
        this.velocity=velocity;
        this.direction=direction;
    }
    setMass(mass){
        this.mass=mass;
    }
    setXCenter(x){
        this.x=x;
    }
    setYCenter(y){
        this.y=y;
    }
    setCenterCoordinates(x,y){
        this.x=x;
        this.y=y;
    }
    setVector(direction,velocity){
        this.direction=direction;
        this.velocity=velocity;
    }
    setId(id){
        this.id=id
    }

}

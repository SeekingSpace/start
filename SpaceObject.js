class SpaceObject {
    var mass=0,x=0,y=0,velocity=0,direction=0/*degrees*/;
    var volume=0,radiusValue=0;
    constructor(x,y,mass){
        this.mass=mass;
        this.x=x;
        this.y=y;
    }
    constructor(x,y,mass,velocity,direction) {
        this.mass=mass;
        this.x=x;
        this.y=y;
        this.velocity=velocity;
        this.direction=direction;
    }
    function setMass(mass){
        this.mass=mass;
    }
    function setXCenter(x){
        this.x=x;
    }
    function setYCenter(y){
        this.y=y;
    }
    function setCenterCoordinates(x,y){
        this.x=x;
        this.y=y;
    }
    function setVector(direction,velocity){
        this.direction=direction;
        this.velocity=velocity;
    }
    function setDisplay(){
        var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx',51);
        c.setAttribute('cy',51);
        c.setAttribute('r',40);
        c.setAttribute('stroke','green');
        c.setAttribute('stroke-width',4);
        c.setAttribute('fill','yellow');
        document.getElementsByTagName("svg").appendChild(c);
    }
}

//class SpaceObject {
//var mass=0,x=0,y=0,velocity=0,angle=0/*degrees*/;
//var volume=0,radiusValue=0;
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
function setDisplay(){
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx',this.x);
    c.setAttribute('cy',this.y);
    c.setAttribute('r',this.mass/2);
    c.setAttribute('stroke','green');
    c.setAttribute('stroke-width',this.mass/100);
    c.setAttribute('fill','yellow');
    var col=document.getElementsByTagName("svg")[0];
    col.appendChild(c);
}
function SpaceObject(x,y,mass){
    this.setMass=setMass;
    this.setXCenter=setXCenter;
    this.setYCenter=setYCenter;
    this.setCenterCoordinates=setCenterCoordinates;
    this.setDisplay=setDisplay;

    this.velocity=0;
    this.angle=0;
    this.mass=mass;
    this.x=x;
    this.y=y;
}

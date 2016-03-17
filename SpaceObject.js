//class SpaceObject {
//var mass=0,x=0,y=0,velocity=0,angle=0/*degrees*/;
//var volume=0,radiusValue=0;
function setDisplay(){
    this.image.setAttribute('cx',this.x);
    this.image.setAttribute('cy',this.y);
    this.image.setAttribute('r',this.mass/(5));
    this.image.setAttribute('stroke','green');
    this.image.setAttribute('stroke-width',this.mass/100);
    this.image.setAttribute('fill','yellow');

}
function SpaceObject(x,y,z,mass){
    ////properties
    this.mass=mass;
    this.velocityX=0;
    this.velocityY=0;
    this.velocityZ=0;
    this.x=x;
    this.y=y;
    this.z=z;


    ////graphics
    this.setDisplay=setDisplay;
    this.svg = document.getElementsByTagName("svg")[0];
    this.image = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.setDisplay();
    this.svg.appendChild(this.image);
}

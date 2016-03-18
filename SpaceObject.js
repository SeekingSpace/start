//class SpaceObject {
//var mass=0,x=0,y=0,velocity=0,angle=0/*degrees*/;
//var volume=0,radiusValue=0;
function setDisplay(){
    this.image.setAttribute('cx',this.x);
    this.image.setAttribute('cy',this.y);
    if(this.z<this.mass)this.zdislpay=this.z;
    this.image.setAttribute('r',(this.mass-this.zdislpay)/(5));
    this.image.setAttribute('stroke','orange');
    this.image.setAttribute('stroke-width',this.mass/100);
    this.image.setAttribute('fill',this.BGColor);

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

    //flags
    this.isPhysicsAffected=0;


    ////graphics
    this.zdislpay=0;
    this.BGColor="yellow";
    this.setDisplay=setDisplay;
    this.svg = document.getElementsByTagName("svg")[0];
    this.image = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.setDisplay();
    this.svg.appendChild(this.image);
}

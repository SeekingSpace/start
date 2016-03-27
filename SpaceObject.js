//class SpaceObject
function objectClicked(e){
    e.target.spaceObject.BGColor="white";
}

function updateDisplay(){
    this.image.setAttribute('cx',this.x);
    this.image.setAttribute('cy',this.y);
    this.image.setAttribute('r',this.volume);
    this.image.setAttribute('stroke','orange');
    this.image.setAttribute('fill',this.BGColor);
    this.image.setAttribute('stroke-width',this.mass/100);
}

function SpaceObject(x,y,z,mass){
    ////properties
    this.mass       =mass;
    this.volume     =mass;
    this.velocityX  =0;
    this.velocityY  =0;
    this.velocityZ  =0;
    this.x          =x;
    this.y          =y;
    this.z          =z;

    //flags
    this.isPhysicsAffected=0;


    ////graphics
    this.updateDisplay  =updateDisplay;

    this.zdislpay           =0;
    this.BGColor            ="yellow";
    this.image              =document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.image.spaceObject  =this;
    this.image.addEventListener("click",objectClicked);
    gameLaws.svg.appendChild(this.image);
    this.updateDisplay();

}

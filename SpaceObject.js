//class SpaceObject
function randInt(min,max){
    return Math.floor(Math.random()*(max+1-min)+min);
}

function checkIfRepeated(id){
    var check=false;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].id==id){check=true;console.log("false aborted :D");}
    }
    return check;
}

function randomIDgenerator(){
    var id;
    do {
        id = [];
        for (var s = 0; s < 8; s++) {
            id.push(Math.floor(Math.random()*16));
        }
        id=id.join(" ");
    } while (checkIfRepeated(id));
    return id;
}

function updateDisplay(){
    this.image.setAttribute('cx',this.x);
    this.image.setAttribute('cy',this.y);
    this.image.setAttribute('r',this.radius);
    this.image.setAttribute('fill',this.BGColor);
}

function SpaceObject(x,y,z,mass){
    ////properties
    this.mass               =mass;
    this.radius             =mass;
    this.velocityX          =0;
    this.velocityY          =0;
    this.velocityZ          =0;
    this.x                  =x;
    this.y                  =y;
    this.z                  =z;

    this.type               ="Generic";
    this.name               ="Generic";
    this.id                 =randomIDgenerator();

    //flags
    this.isPhysicsAffected  =0;

    ////graphics
    this.updateDisplay      =updateDisplay;

    this.BGColor            ="white";
    this.image              =document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.image.spaceObject  =this;
    gameLaws.svg.appendChild(this.image);
    this.updateDisplay();

    //POST CREATION
    objects.push(this);
}

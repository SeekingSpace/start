//This needs work 2!
////////////////////////////////////////////////
//All PREVIOUS CODE WAS DEPRECATED
////////////////////////////////////////////////
function distance(x,y,z){
    return Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2));
}

function orbitalVelocity(object,radius){
    return Math.sqrt(object.mass);
}

function gravityForce(){
    var forceX,forceY,forceZ,totalForce;//force components
    var x,y,z;//vector coords
    for(var i = 0; i < objects.length; i++) {//EACH SPACEOBJECT
        physicsAffeccted              =objects[i].isPhysicsAffected;
        gravityConstant               =gameLaws.gravityConstant;
        forceX                        =objects[i].velocityX*objects[i].mass;
        forceY                        =objects[i].velocityY*objects[i].mass;
        forceZ                        =objects[i].velocityZ*objects[i].mass;
        for (var j = 0; j < objects.length; j++) {//EACH TARGET
            totalForce                =0;
            x                         =objects[j].x-objects[i].x;
            y                         =objects[j].y-objects[i].y;
            z                         =objects[j].z-objects[i].z;

            xyzdistance               =distance(x,y,z);
            if(xyzdistance==0){xyzdistance=1};
            totalForce                =objects[i].mass*objects[j].mass/xyzdistance;

            forceX                    =gravityConstant*physicsAffeccted*totalForce*x/xyzdistance+forceX;
            forceY                    =gravityConstant*physicsAffeccted*totalForce*y/xyzdistance+forceY;
            forceZ                    =gravityConstant*physicsAffeccted*totalForce*z/xyzdistance+forceZ;
        }
        objects[i].velocityX          =forceX/objects[i].mass;
        objects[i].velocityY          =forceY/objects[i].mass;
        objects[i].velocityZ          =forceZ/objects[i].mass;
    }
    for (var n = 0; n < objects.length; n++) {
        objects[n].x                  +=objects[n].velocityX;
        objects[n].y                  +=objects[n].velocityY;
        objects[n].z                  +=objects[n].velocityZ;
        objects[n].updateDisplay();
    }
}

function collision(){
    for (var i = 0; i < objects.length; i++) {//EACH SPACEOBJECT
        for (var j = 0; j < objects.length; j++) {//EACH TARGET
            x               =objects[j].x-objects[i].x;
            y               =objects[j].y-objects[i].y;
            z               =objects[j].z-objects[i].z;
            xyzdistance     =Math.abs(distance(x,y,z));
            if ((xyzdistance<(objects[i].volume+objects[j].volume)) && (xyzdistance!=0)){
                console.log("Collision");
                if (camera.focus==i || camera.focus==j){camera.mode=0;}//AVOID CRASH ON cameraUpdater
                objects[i].image.remove();
                objects.splice(i,1);
                objects[j-1].image.remove();
                objects.splice(j-1,1);
            }
        }
    }
}



function runPhysics(){
    gravityForce();
    collision();
    //console.log(newObjects);
    //console.log("done!");
}

function Physics() {
    this.runPhysics=runPhysics;
}

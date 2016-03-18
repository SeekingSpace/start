//This needs work 2!
////////////////////////////////////////////////
//All PREVIOUS CODE WAS DEPRECATED
////////////////////////////////////////////////
function distance(x,y,z){
    return Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2));
}

function gravityForce(objects){
    var forceX,forceY,forceZ,totalForce;//force components
    var x,y,z;//vector coords
    for(var i = 0; i < objects.length; i++) {//EACH SPACEOBJECT
        physicsAffeccted=objects[i].isPhysicsAffected;
        forceX =objects[i].velocityX*objects[i].mass;
        forceY =objects[i].velocityY*objects[i].mass;
        forceZ =objects[i].velocityZ*objects[i].mass;
        for (var j = 0; j < objects.length; j++) {//EACH TARGET
            totalForce=0;
            x =objects[j].x-objects[i].x;
            y =objects[j].y-objects[i].y;
            z =objects[j].z-objects[i].z;

            xyzdistance=distance(x,y,z);
            if(xyzdistance==0){xyzdistance=1};
            //console.log(xyzdistance);
            totalForce =objects[i].mass*objects[j].mass/xyzdistance;
            //console.log(totalForce);
            forceX     =physicsAffeccted*totalForce*x/xyzdistance+forceX;
            forceY     =physicsAffeccted*totalForce*y/xyzdistance+forceY;
            forceZ     =physicsAffeccted*totalForce*z/xyzdistance+forceZ;
        }
        objects[i].velocityX =forceX/objects[i].mass;
        objects[i].velocityY =forceY/objects[i].mass;
        objects[i].velocityZ =forceZ/objects[i].mass;
    }
    for (var n = 0; n < objects.length; n++) {
        //console.log(objects[n].x);
        objects[n].x+=objects[n].velocityX;
        objects[n].y+=objects[n].velocityY;
        objects[n].z+=objects[n].velocityZ;
        //console.log(objects[n].x);
        objects[n].setDisplay();
    }
}

function runPhysic(objects){
    gravityForce(objects);


    //console.log(newObjects);
    console.log("done!");
}

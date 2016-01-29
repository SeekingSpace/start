//This needs work!
function toRadians(x){
    return x*Math.PI/180;
}
function toDegrees(x){
    return x*180/Math.PI;
}
function newX(velocity,angle){
    return velocity*toDegrees(Math.cos(toRadians(angle)));
}
function newY(velocity,angle){
    return velocity*toDegrees(Math.sin(toRadians(angle)));
}

function squareDistance(x1,y1,x2,y2){
    return Math.pow(x2-x1,2)+Math.pow(y2-y1,2);
}
function distance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
}

function force(mass1,mass2,x1,y1,x2,y2){
    if (x2-x1==0 && y2-y1==0){
        return 0;
    } else {
        //console.log((mass1*mass2)/squareDistance(x1,y1,x2,y2));
        return (mass1*mass2)/squareDistance(x1,y1,x2,y2);
    }
}

function angleToObject(x1,y1,x2,y2){
    if (x2-x1==0 && y2-y1==0){
        return 0;
    } else {
        //console.log(Math.asin((y2-y1)/distance(x1,y1,x2,y2)));
        wait=toDegrees(Math.asin(toRadians((y2-y1)/distance(x1,y1,x2,y2))));
        console.log(wait+" degrees")
        if (wait<0) {wait=360+wait;}
        return wait;
    }
}

function addForces(force1,force2,angle1,angle2){
    console.log("forces added "+force1,force2,angle1,angle2);
    var sins=force1*toDegrees(Math.sin(toRadians(angle1)))+force2*toDegrees(Math.sin(toRadians(angle2)));
    console.log("sins "+sins);
    var coss=force1*toDegrees(Math.cos(toRadians(angle1)))+force2*toDegrees(Math.cos(toRadians(angle2)));
    console.log("coss "+coss);
    var resultingForce=(sins^2+coss^2)^(1/2);
    var resultingAngle=toDegrees(Math.atan2(toRadians(sins),toRadians(coss)));
    if (resultingAngle<0) {resultingAngle=360+resultingAngle;}
    return [resultingForce,resultingAngle];
}

function globalForce(target,objects){
    var totalForce=target.velocity*target.mass,targetAngle=target.angle,i,forceCatch=[];
    for (i in objects){
        var objectForce=force(target.mass,objects[i].mass,target.x,target.y,objects[i].x,objects[i].y);
        var objectAngle=angleToObject(target.x,target.y,objects[i].x,objects[i].y);
        forceCatch=addForces(totalForce,objectForce,targetAngle,objectAngle);
        console.log("force and angle "+forceCatch);
        target.angle=forceCatch[1];
        target.velocity=forceCatch[0]/target.mass;
    }
    return target;
}

function runPhysic(objects){
    console.log(objects);
    var newObjects=[];
    for (j in objects){
        newObjects.push(globalForce(objects[j],objects));
    }
    for (k in newObjects){
        objects[k].x=objects[k].x+newX(objects[k].velocity,objects[k].angle);
        objects[k].y=objects[k].y+newY(objects[k].velocity,objects[k].angle);
        objects[k].svg.setAttribute('cx',objects[k].x);
        objects[k].svg.setAttribute('cy',objects[k].y);
    }
    console.log(newObjects);
    console.log("done!");
    return newObjects;
}

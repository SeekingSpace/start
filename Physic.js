//This needs work!

function squareDistance(x1,y1,x2,y2){
    return (x1-x2)^2+(y1-y2)^2;
}
function distance(x1,y1,x2,y2){
    return ((x1-x2)^2+(y1-y2)^2)^(1/2);
}

function force(mass1,mass2,x1,y1,x2,y2){
    if (x1-x2==0 && y1-y2==0){
        return 0;
    } else {
        //console.log((mass1*mass2)/squareDistance(x1,y1,x2,y2));
        return (mass1*mass2)/squareDistance(x1,y1,x2,y2);
    }
}

function angleToObject(x1,y1,x2,y2){
    if (x1-x2==0 && y1-y2==0){
        return 0;
    } else {
        //console.log(Math.asin((y2-y1)/distance(x1,y1,x2,y2)));
        return Math.asin((y2-y1)/distance(x1,y1,x2,y2));
    }
}

function addForces(force1,force2,angle1,angle2){
    console.log(force1,force2,angle1,angle2);
    var sins=force1*Math.sin(angle1)+force2*Math.sin(angle2);
    var coss=force1*Math.cos(angle1)+force2*Math.cos(angle2);
    var resultingForce=(sins^2+coss^2)^(1/2);
    var resultingAngle=Math.atan2(sins,coss);
    return [resultingForce,resultingAngle];
}

function newX(velocity,angle){
    return velocity*Math.cos(angle);
}

function newY(velocity,angle){
    return velocity*Math.sin(angle);
}

function globalForce(target,objects){
    var totalForce=target.velocity*50*target.mass,targetAngle=target.angle,i,forceCatch=[];
    for (i in objects){
        var objectForce=force(target.mass,objects[i].mass,target.x,target.y,objects[i].x,objects[i].y);
        var objectAngle=angleToObject(target.x,target.y,objects[i].x,objects[i].y);
        forceCatch=addForces(totalForce,objectForce,targetAngle,objectAngle);
        console.log(totalForce);
        target.angle=forceCatch[1];
        target.velocity=forceCatch[0]/50/target.mass;
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
    }
    console.log(objects[k]);
    console.log("done!");
    return newObjects;
}

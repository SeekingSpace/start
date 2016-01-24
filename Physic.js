function squareDistance(x1,y1,x2,y2) {
    return (x1-x2)**2+(y1-y2)**2;
}

function force(object1,object2){
    return (object1.mass*object2.mass)/squareDistance(object1.x,object1.y,object2.x,object2.y);
}

function globalForce(testedObject,objects){
    var totalForce=0;
    for (var i = 0; i < objects.length; i++) {

    }
    return [*];
}

function runPhysic(objects) {
        console.log("done!");
        for (var i = 0; i < objects.length; i++) {
            globalForce(objects[i],objects)
        }
    }

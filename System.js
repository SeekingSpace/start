function getStarName(){
    var names=[
        "Solo",
        "The Sun",
        "Japan",
        "Helios",
        "AST-"+randInt(10,99),
        "Sol",
        "Richter"
    ];
    return names[randInt(0,names.length-1)];
}

function getPlanetname(){
    var names=[
        "Duneh",
        "Black Ice",
        "Oran",
        "Saft",
        "Zera",
        "OP-"+randInt(1,9999),
        "Plut"
    ];
    return names[randInt(0,names.length-1)];
}

function generateCelestialBody(x,y,z,mass){
    var newCelestialBody=new SpaceObject(x,y,z,mass);
    //OLD
    newCelestialBody.type="Celestial Body";
    newCelestialBody.isPhysicsAffected=1;
    //NEW
    newCelestialBody.temperature=0;
    newCelestialBody.isAtmospherePresent=0;
    return newCelestialBody;
}

function generateStar(x,y,z,mass){
    var newStar         =generateCelestialBody(x,y,z,mass);
    //OLD
    newStar.type        ="Star";
    newStar.name        =getStarName();
    newStar.radius      =randInt(Math.sqrt(newStar.mass),newStar.mass,2);
    newStar.temperature =(newStar.mass/newStar.radius)*randInt(1,10);
    newStar.isAtmospherePresent=1;
    //NEW
    newStar.atmosphere  =randInt(newStar.mass/randInt(2,5));
    newStar.brightness  =randInt(1,10);
    return newStar;
}

function generatePlanet(x,y,z,mass){
    var newPlanet       =generateCelestialBody(x,y,z,mass);
    newPlanet.type      ="Planet";
    newPlanet.name      =getPlanetname();
    newPlanet.radius    =randInt(Math.sqrt(newPlanet.mass),newPlanet.mass);
    newPlanet.temperature=(newPlanet.radius/newPlanet.mass);
    newPlanet.isAtmospherePresent=randInt(0,1);
    //NEW
    newPlanet.atmosphere =randInt(newPlanet.mass/randInt(1,5));
    return newPlanet;
}

function System(x,y,z,planets){
    this.star=generateStar(x,y,z,randInt(1000,10000));
    this.planets=[];
    for (var i = 0; i < planets; i++) {
        var planet=generatePlanet(x,randInt(this.star.radius*10,this.star.radius*100),z,this.star.mass/randInt(10,100));
        planet.velocityX=orbitalVelocity(this.star);
        this.planets.push();
    }
}

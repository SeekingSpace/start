function doCameraResize(){
    this.viewWidth          =window.innerWidth*this.scale;
    this.viewHeight         =window.innerHeight*this.scale;
}

function setViewBox(){
    svg.setAttribute('viewBox',""+camera.edgex+" "+camera.edgey+" "+camera.cx*2+" "+camera.cy*2);
}

function cameraUpdater(){
    camera.cx                 =camera.viewWidth*camera.scale/2;
    camera.cy                 =camera.viewHeight*camera.scale/2;
    if (camera.mode==0) {}
    else if (camera.mode==1) {
        objectToFocus       =objects[camera.focus];
        camera.edgex=objectToFocus.x-camera.cx;
        camera.edgey=objectToFocus.y-camera.cy;
    }
    this.setViewBox();
}

function changeMode(argument){
    //argument evaluation
    if(argument=="+"){
        if (this.mode==0){if(objects.length!=0)this.mode++;}
        else if (this.mode==1){
            if (this.focus==objects.length-1){this.mode=0;
                                              this.focus=0;}
            else if (this.focus!=objects.length-1){this.focus++;}
        }
    }else if(argument=="-"){
        if (this.mode==0){this.mode=1;this.focus=objects.length-1;}
        else if (this.mode==1){
            if (this.focus==0){this.mode=0;}
            else if (this.focus!=0){this.focus--;}
        }
    }
    console.log("Camera mode updated. "+this.modes[this.mode]+" camera.");
    if (this.mode==1)console.log("Focus on object "+this.focus);
}

function Camera(){
    //properties
    this.modes              =["Free","Focus"];
    this.mode               =0;
    this.focus              =0;
    this.scale              =1;
    this.viewWidth          =window.innerWidth;
    this.viewHeight         =window.innerHeight;
    this.edgex              =0;
    this.edgey              =0;
    this.cx                 =this.viewWidth*this.scale/2;
    this.cy                 =this.viewHeight*this.scale/2;
    //functions
    this.setViewBox         =setViewBox;
    this.changeMode         =changeMode;
    this.cameraUpdater      =cameraUpdater;
    this.doCameraResize     =doCameraResize;
    //frame
    this.focusInterval      =setInterval(this.cameraUpdater,gameLaws.clock);
}

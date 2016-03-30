function newWindowSize(event){
    camera.doCameraResize();
}

function newKeyDown(event){
    var key=event.keyCode;

    switch (key) {

        case 80://P
            if (gameLaws.isPaused==0){
                gameLaws.isPaused=1;
                console.log("Paused");
            }else if(gameLaws.isPaused==1){
                gameLaws.isPaused=0;
                console.log("Unpaused");
            }
            break;

        case 33://add
            camera.scale              /=2;
            camera.edgex              +=camera.cx/2;
            camera.edgey              +=camera.cy/2;
            break;
        case 34://substract
            camera.scale              *=2;
            camera.edgex              -=camera.cx;
            camera.edgey              -=camera.cy;
            break;

        case 37://left
            if (camera.mode==0) {
                camera.edgex-=camera.cx*2/100;
            }
            break;
        case 39://right
            if (camera.mode==0) {
                camera.edgex+=camera.cx*2/100;
            }
            break;
        case 38://up
            if (camera.mode==0) {
                camera.edgey-=camera.cy*2/100;
            }
            break;
        case 40://down
            if (camera.mode==0) {
                camera.edgey+=camera.cy*2/100;
            }
            break;

        case 67://C
            camera.changeMode("+");
            break;
        case 86://v
            camera.changeMode("-");
            break;

        case 77://M
            menuBar.toggleMenuBarVisibility();
            break;

        default:
            console.log("Key was "+key);
            break;

    }
}

function newClick(event){
    var target=event.target;
    console.log("Click target "+target);
    if (target.spaceObject!=undefined)console.log("Name "+target.spaceObject.name);
}

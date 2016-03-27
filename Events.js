//addEventListener.("input",newInput(event));
function resizeActions(){
}
function newKeyPress(event){
    var key=event.code;
    console.log("Key was "+key);

    /*To pause the game*/if(key="KeyP"){
        if (gameLaws.isPaused==0){
            clearInterval(gameLaws.gameTimer);
            gameLaws.isPaused=1;
            console.log("Paused");
        }else if(gameLaws.isPaused==1){
            gameLaws.gameTimer=setInterval(runPhysic, gameLaws.clock);
            gameLaws.isPaused=0;
            console.log("Unpaused");
        }
    }

    /*To create a new object*/
}


function newClick(event){
    var target=event.target;
    console.log("Click target "+target);
}

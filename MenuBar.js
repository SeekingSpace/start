function toggleMenuBarVisibility(){
    if(menuBar.style.visibility=="hidden")menuBar.style.visibility="visible";
    else if (menuBar.style.visibility=="visible")menuBar.style.visibility="hidden";
}

function MenuBar(){
    HTMLbody=gameLaws.HTMLbody;

    menuBar=document.createElement("UL");
    menuBar.style.listStyleType="none";
    menuBar.style.margin="0";
    menuBar.style.padding="0";
    menuBar.style.overflow="hidden";
    menuBar.style.visibility="hidden";
    menuBar.style.backgroundColor="rgba(155 155 155 16)";
    menuBar.style.zIndex="1";

    menuBar.toggleMenuBarVisibility=toggleMenuBarVisibility;

    HTMLbody.appendChild(menuBar);

    nameSeekingSpace=document.createElement("LI");
    nameSeekingSpace.text="Seeking Space";
    nameSeekingSpace.style.cssFloat="left";
    nameSeekingSpace.style.color="#f2f2f2";
    nameSeekingSpace.style.textAlign="center";
    nameSeekingSpace.style.padding="5px 16px";
    nameSeekingSpace.style.transition="0.5s";
    nameSeekingSpace.style.fontFamily="Cursive";
    nameSeekingSpace.style.fontSize="35px";
    nameSeekingSpace.style.zIndex="2";
    nameSeekingSpace.appendChild(document.createTextNode(nameSeekingSpace.text));
    menuBar.appendChild(nameSeekingSpace);

    nameSeekingSpace=document.createElement("LI");
    nameSeekingSpace.text="Object";
    nameSeekingSpace.style.cssFloat="left";
    nameSeekingSpace.style.color="#ffffff";
    nameSeekingSpace.style.textAlign="center";
    nameSeekingSpace.style.padding="14px 16px";
    nameSeekingSpace.style.transition="0.3s";
    nameSeekingSpace.style.fontFamily="Tahoma, Geneva, sans-serif";
    nameSeekingSpace.style.fontSize="20px";
    nameSeekingSpace.style.zIndex="2";
    nameSeekingSpace.appendChild(document.createTextNode(nameSeekingSpace.text));
    menuBar.appendChild(nameSeekingSpace);
    return menuBar;
}

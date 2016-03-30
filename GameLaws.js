function GameLaws() {
    this.gravityConstant  =1;
    this.fps              =33;
    this.clock            =1000/this.fps;
    this.isPaused         =0;
    this.svg              =document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.HTMLbody         =document.getElementsByTagName("body")[0];
}

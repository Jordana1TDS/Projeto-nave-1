class Tiro{
    constructor(x,y){    
      this.x = x;
      this.y = y;    
    }
    mostraTiro(){
      noStroke();
      fill(255,255,0)
      rect(this.x, this.y, 10,25);
      this.y -=10;
    }
  }
  
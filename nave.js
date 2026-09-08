class Nave{
    constructor(img,x,y,comp,alt){
      this.img = img;
      this.x = x;
      this.y = y;       
      this.comp = comp;
      this.alt = alt;
    }
     
    exibir(){
      image(this.img, this.x, this.y, 75, 75);
    }
  }
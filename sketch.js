

let cenario;
let inimigo;
let nave;
let tiros = [];
let inimigos = [];
let pontos = 0;

function preload(){
  nave = loadImage('img/nave.png');
  cenario = loadImage('img/cenario.png');
  inimigo = loadImage('img/inimigo.png');
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++){    
    let inimigoJogo = new Inimigo(inimigo,random(0,width),random(-800,0),50,50);   
    inimigos.push(inimigoJogo);    
  }  
}

function draw() {
  background(cenario);
  player = new Nave(nave, mouseX-10,height - 70, 40,50);
  player.exibir();
  verificaColisao();
  naveColisao();
  placar();
  
  for (let tiro of tiros){
      fill(255);
      tiro.mostraTiro();
    } 
  
  for(let inimigo of inimigos){
    inimigo.exibir();
    if(inimigo.y > height){
          inimigos.splice(inimigos.indexOf(inimigo),1);
          pontos -=1;
            if(pontos <= 0){
              pontos = 0;
              textSize(46);
              text("GAME OVER",110,200);                    
              noLoop();
            }
        }
  }
  
}

//------------Funções---------------
function mousePressed(){
  let tiroDaNave = new Tiro(mouseX + 10, height );
  tiros.push(tiroDaNave);  
}

//-----------Colisao do Tiro-------------
function verificaColisao(){
  for(let inimigoJogo of inimigos){
    for(let tiro of tiros){
      if(dist(inimigoJogo.x,inimigoJogo.y,tiro.x,tiro.y) < 40){   inimigos.splice(inimigos.indexOf(inimigoJogo),1);   
        tiros.splice(tiros.indexOf(tiro),1);
            let novoInimigo = new Inimigo(inimigo,random(0,width),random(-800,0),40,50);
        inimigos.push(novoInimigo);
        pontos +=1;
      }
    }
  }
}

function naveColisao(){
  for (let inimigo of inimigos){
    if(dist(inimigo.x,inimigo.y,player.x,player.y) < 20){
      textSize(46);
      text("GAME OVER",110,200);      
      noLoop();
    }
  }
}

//-----------Placar-----------
function placar(){
  fill(0);
  rect(34,20,60,30);
  textSize(46);  
  fill(255,255,0);
  textFont("Pixelify Sans");
  text(pontos, 50,50);  
}
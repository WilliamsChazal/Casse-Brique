const canvas =document.getElementById("myCanvas")
const ctx =canvas.getContext("2d")
const ballRadius = 20; // Variable qui contient le rayon du cercle dessiné et sera utilisée pour les calculs. 
const paddleHeight = 10;
const paddleWidth =75;
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffSetTop = 30;
const brickOffSetLeft = 30;

let paddleX =(canvas.width-paddleWidth)/2; // Variable point de départ de la raquette 
  // Tableau contenant les bricks
const bricks = [];
  // Colonnes de briques
for(let c=0; c<brickColumnCount; c++){
  bricks[c] = [];
  // Lignes de briques
  for(let r=0; r<brickRowCount; r++){
    bricks[c][r] = {x: 0, y:0, status:1};
  }
}

// Variable qui stipule que les touches sont de base pas enfoncé que la valeur est fausse
let rightPressed = false;
let leftPressed = false;
// position de départ de la balle 
let x = canvas.width/2; 
let y = canvas.height-30;


let dx = 2;
let dy = -8;

/* let ineterval = setInterval(draw, 20) */; // la fonction draw() sera exécutée toutes les 10 millisecondes. 
let score = 0
let lives = 3;




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight"){
    rightPressed = true;
  }
else if (e.key == "Left" || e.key == "ArrowLeft"){
  leftPressed = true;
}
console.log(e);
}
function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight"){
    rightPressed = false;
  }
else if (e.key == "Left" || e.key == "ArrowLeft"){
  leftPressed = false;
}
}

function collisionDetection() {
  for(let c=0; c<brickColumnCount; c++) {
      for(let r=0; r<brickRowCount; r++) {// b est une variable permettant de stocker l'objet bricks dans la boucle de detection de collision
          let b = bricks[c][r];
          if (b.status == 1){
          // calculs
          if(x > b.x // La position x de la balle est supérieure à la position x de la brique.
            && x < b.x+brickWidth // La position x de la balle est inférieure à la position x de la brique plus sa largeur.
            && y > b.y //La position y de la balle est supérieure à la position y de la brique.
             && y < b.y+brickHeight) //La position y de la balle est inférieure à la position y de la brique plus sa hauteur.
             {
            dy = -dy;
            b.status =0
            score++;
            if (score == brickRowCount*brickColumnCount) {
              alert("C'est gagné, Bravo",  "Vous avez cassé" + score+ " birques");
              document.location.reload();
             
            }   
          } 

          }
      }
  }
}

//Fonction de dessin de la balle
function drawBall() {
    // le code pour dessiner
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

//Fonction de dessin de la raquette
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for(let c=0; c<brickColumnCount; c++){
    for(let r=0; r<brickRowCount; r++){
      if (bricks[c][r].status == 1) { //Si status vaut 1, dessinez-la, mais s'il vaut 0, la balle a été touchée et nous ne voulons pas la voir sur l'écran.
        let brickX = (c*(brickWidth+brickPadding))+brickOffSetLeft;
        let brickY = (r*(brickHeight+brickPadding))+brickOffSetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX,brickY,brickWidth,brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawScore(){
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score,8,20);
}

function drawLives (){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}


// Fonctions pour effacer le canvas avant chaque frame
 function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    collisionDetection();
    drawBricks(); 
    drawScore();
    drawLives();
 
     // les IF qui suivent permettent de faire rebondire la balle sur les 4 bords du canvas rajouter la variable ballRadius permet de calculer par rapport au radius de la ball et non au centre de la ball avec <0
     if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
      dx = -dx 
                
  }
   // le if çi dessous permet de savoir si la balle touche la raquette et si oui, la balle rebondit, si non une alerte s'affiche et recharge la page.
     if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height-ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy 
      }
      else  {
        lives--;
        if (!lives) {
        alert("GAME OVER " + "  " + "Vous avez cassé" + score+ " birques");
        document.location.reload();

      } else{
        x = canvas.width/2;
        y = canvas.height-30;
        dx =2;
        dy=-8;
        paddleX = (canvas.width-paddleWidth)/2
      
        }
      }
    }
    
    
    if(rightPressed) {
      paddleX += 5;
      if (paddleX + paddleWidth > canvas.width){
          paddleX = canvas.width - paddleWidth;
      }
  }
  else if(leftPressed) {
      paddleX -= 5;
      if (paddleX < 0) {
        paddleX = 0;
        
      }
  }

  
    x += dx;
    y += dy;

requestAnimationFrame(draw);
} 
draw();







/* // Premier chemin
ctx.beginPath(); 
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

// Deuxième chemin
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false); // 240 coordonnées x du cercle - 160 coordonnées y du cercle - 20 rayon du cercle - 20 et 0  l'angle de départ et l'angle de fin (pour finir de dessiner le cercle, en radiant) 
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

// Troisième chemin
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)"; //0.5 permet une opacity de 50%
ctx.stroke(); //équivalent à fillStyle amis fait pour ne colorer que le contour exterieur.
ctx.closePath(); */
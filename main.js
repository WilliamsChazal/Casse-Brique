const canvas =document.getElementById("myCanvas")
const ctx =canvas.getContext("2d")
const ballRadius = 20; // Variable qui contient le rayon du cercle dessiné et sera utilisée pour les calculs. 
const paddleHeight = 10;
const paddleWidht =75;
const paddleX =(canvas.width-paddleWidht/2); // Variable point de départ de la raquette 

let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -8;

//Fonction de dessin de la raquette
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleHeight, paddleWidht);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
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
// Fonctions pour effacer le canvas avant chaque frame
function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall(); 
    x += dx;
    y += dy;
    // les IF qui suivent permettent de faire rebondire la balle sur les 4 bords du canvas rajouter la variable ballRadius permet de calculer par rapport au radius de la ball et non au centre de la ball avec <0
    if (y + dy > canvas.height-ballRadius || y +dy < ballRadius) {
        dy = -dy;
        ctx.fillStyle ="red" ;
        ctx.fill()  
    }
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx
        ctx.fillStyle ="red" ;
        ctx.fill();
            
    }
}
  setInterval(draw, 20); // la fonction draw() sera exécutée toutes les 10 millisecondes. 

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
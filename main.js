const canvas =document.getElementById("myCanvas")
const ctx =canvas.getContext("2d")

let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;

function draw() {
    // le code pour dessiner
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;

  }
  setInterval(draw, 10); // la fonction draw() sera exécutée toutes les 10 millisecondes. 

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
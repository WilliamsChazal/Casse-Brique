https://developer.mozilla.org/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

// Premier chemin
ctx.beginPath(); 
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

Toutes les instructions sont entre les méthodes  beginPath() et closePath() . Nous définissons un rectangle en utilisant rect() : les deux premières valeurs spécifient les coordonnées du coin supérieur gauche du rectangle tandis que les deux suivantes spécifient la largeur et la hauteur du rectangle. Dans notre cas, le rectangle est peint à 20 pixels du côté gauche de l'écran et à 40 pixels du haut, et a une largeur de 50 pixels et une hauteur de 50 pixels, ce qui en fait un carré parfait. La propriété fillStyle stocke une couleur qui sera utilisée par la méthode fill() pour peindre le carré en rouge.

Définir une boucle de dessin

Afin que le dessin soit mis à jour sur le canevas à chaque image, nous allons définir une fonction draw() qui sera exécutée en continu et qui utilisera des variables pour les positions des sprites, etc. Pour qu'une fonction s'exécute de façon répétée avec JavaScript, on pourra utiliser les méthodes setInterval() (en-US) ou requestAnimationFrame().

Grâce à la nature infinie de setInterval, la fonction draw() sera appelée toutes les 10 millisecondes, sans arrêt jusqu'à ce que nous y mettions un terme. 
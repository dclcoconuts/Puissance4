
// var choixCol1 = document.getElementById("y0");
// var choixCol2 = document.getElementById("y1");
// var choixCol3 = document.getElementById("y2");
// var choixCol4 = document.getElementById("y3");
// var choixCol5 = document.getElementById("y4");
// var choixCol6 = document.getElementById("y5");
// var choixCol7 = document.getElementById("y6");


// ESSAIS :
// afficher le logo dans la première case de choixColonne - 2 façon de faire :
// choixCol1.src = "img/Avatar_Coconut_mini.png";
//  ou  sans utiliser de variable :
// document.getElementById("imgCol1").src = "img/Avatar_Coconut_mini.png";
// ou, seconde façon de faire :
// choixCol1.setAttribute("src", "img/Avatar_Coconut_mini.png");
// idem pour second logo :
// choixCol2.src = "img/Avatar_Licorne_mini.png";
// choixCol2.setAttribute("src", "img/Avatar_Licorne_mini.png");


// retrouver la correspondance d'une case (id) au click :
// choixCol2.addEventListener("click", function(e){
//     console.log(event.target.id);   // affiche imgCol2
// });

// choixCol2.addEventListener("click", function(){
//    // affichage du logo dans la seconde case de la grille :
//     var url1 = "img/Avatar_Licorne_mini.png";
//     document.getElementById("case2").style.backgroundImage = "url('" + url1 + "')";
// });
// ---------------------------------------------------------------------

// création d'un tableau avec 7 lignes(i) et 7 colonnes(j)
//  et mise à 0 de toutes les cases :
var grille = [];
for (var i=0; i<7;i++){
    grille[i]=[];         //
}
for (var i=0; i<7; i++){
    for (var j=0; j<7 ; j++){
        grille[i][j] = 0;
    }
}

// vérification du contenu du tableau
for (var i = 0; i < grille.length; i++){
    console.log(grille[i]);
}




// déclaration des variables
var coordY;   // coordonnee Y
var coordX;   // coordonnee X
var coordXF;  // coordonnee X de la case d'arrivee
// var joueur1 = 1;
// var joueur2 = 2;
var joueurEnCours; 
var idCase;     //id de la case
var idPrevCase;  // id de la case precedente
var urlJeton1 = "img/jetonCoconuts.png";
var urlJeton2 = "img/jetonLicorne.png";  
var urlJeton;
var urlLogo1 = "img/Avatar_Coconuts_mini.png";  
var urlLogo2 = "img/Avatar_Licorne_mini.png"; 
var urlLogo;
// var rejouer = true;

// zone de clic jeu
var choixCol = document.getElementById("choixColonne");


// fonction Choix de joueur en aléatoire pour le début du jeu et apres bouton reset
function randomJoueur() {
    joueurEnCours = Math.floor(Math.random() * 2) + 1;
    console.log("Random Joueur ",joueurEnCours);
    return joueurEnCours;
}

// Personnalisation du jeu en fonction de JoueurEnCours
function tourDuJoueur() {
    var col;
    var i;
    if (joueurEnCours == 1) {
        urlLogo = urlLogo1;
        urlJeton = urlJeton1;
        // changement d'image sur choixColonne
        for (i=0; i <= 6; i++)
        {
            col="y"+i;
            document.getElementById(col).setAttribute("onmouseover","this.src='img/jetonCoconuts.png'");
        };
        // Changement zone joueurs
        document.getElementById("logo1").src = urlLogo;
     } else {
        urlLogo = urlLogo2;
        urlJeton = urlJeton2;
        // changement d'image sur choixColonne
        for (i=0; i <= 6; i++)
        {
            col="y"+i;
            document.getElementById(col).setAttribute("onmouseover","this.src='img/jetonLicorne.png'");
        };
        // Changement zone joueurs
        document.getElementById("logo1").src = urlLogo;
    };
    return urlJeton;
}

// 
function changementJoueur (){
    if (joueurEnCours == 1) {
        joueurEnCours = 2;
    } else { 
        joueurEnCours = 1;
    };
    return joueurEnCours;
}



// fonction recherche coordonnee X
function rechXFin (){
    for (coordXF=6; coordXF >=0; coordXF--){
        if (grille[coordXF] [coordY] == 0) {
            // changement valeur dans tableau 
            grille[coordXF] [coordY] = joueurEnCours;
            break;
        }
    }
    return coordXF;
};

//fonction affichage jeton dans case
function jetonCase (urlJeton, idCase) {   
    document.getElementById(idCase).style.backgroundImage = "url('" + urlJeton + "')";  
};
//fonction retrait affichage jeton dans case precedente
function retraitJeton (idPrevCase) {
    document.getElementById(idPrevCase).style.backgroundImage = "url()";
};


fonction déplacement vertical du jeton
function move() {
   
    var x = setInterval(coord, 50);
    function coord (){
        if (coordX == coordXF){
            clearInterval(x);
        } else {
            if (coordX>=0){
            idPrevCase = "x" + coordX + "-y" + coordY;
            retraitJeton(idPrevCase);}
            coordX++;
            idCase = "x" + coordX + "-y" + coordY;
            jetonCase(urlJeton, idCase); 
        }
    }

}

// récupération de la coordonnée Y
choixCol.addEventListener("click", function(event){
    var colChoisie =event.target.id;    //enregistre l'id de la cellule cliquee sous forme de string.
    coordY = parseInt(colChoisie[1]);   // recupere le deuxième caractère de l' ID = chiffre
    rechXFin();                         // récupération de la coordonnee X finale  
    coordX = -1;
    move();

    changementJoueur();
    tourDuJoueur();

    console.log(grille)

}); 



randomJoueur();
// tourDuJoueur();


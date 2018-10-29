
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



// ---------------------------------------------------------------------


// déclaration des variables
var coordY;   // coordonnee Y
var coordX;   // coordonnee X
var joueur1 = 1;
var joueur2 = 2;
var joueurEnCours = 1;  //  en attendant 
var idCase;     //id de la case
var urlJeton = "img/Avatar_Licorne_mini.png";  // en attendant


// zone de clic jeu
var choixCol = document.getElementById("choixColonne");

// fonction recherche coordonnee X
function rechX (){
    for (coordX=6; coordX >=0; coordX--){
        if (grille[coordX] [coordY] == 0) {
            grille[coordX] [coordY] = joueurEnCours;
            break;
        }
    }
    return coordX;
};

//fonction affichage jeton dans la case
function jetonCase (urlJeton, idCase) {
    document.getElementById(idCase).style.backgroundImage = "url('" + urlJeton + "')";
};

// récupération de la coordonnée Y
choixCol.addEventListener("click", function(event){
    var colChoisie =event.target.id; //enregistre l'id de la cellule cliquee sous forme de string.
    coordY = parseInt(colChoisie[1]);   // recupere le deuxième caractère de l' ID = chiffre
    rechX();
    idCase = "x" + coordX + '-y' + coordY;
    jetonCase(urlJeton, idCase);
    console.log(grille);


}); 







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


// vérification du contenu du tableau
// for (var i = 0; i < grille.length; i++){
//     console.log(grille[i]);
// }

// ---------------------------------------------------------------------



// déclaration des variables
var grille = [];
var coordY;   // coordonnee Y
var coordX;   // coordonnee X
var coordXF;  // coordonnee X de la case d'arrivee
var joueurEnCours; 
var idCase;     //id de la case
var idPrevCase;  // id de la case precedente
var urlJeton1 = "img/jetonCoconuts.png";
var urlJeton2 = "img/jetonLicorne.png";  
var urlJeton;
var urlLogo1 = "img/Avatar_Coconuts_mini.png";  
var urlLogo2 = "img/Avatar_Licorne_mini.png"; 
var urlLogo;
// variable pour affichage score
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
// variable pour rejouer et reset
var scoreJoueur1 = 0;
var scoreJoueur2 = 0;
// variable pour fin partie
var partie = true;
// variable pour affichage image victoire
var modal = document.getElementById("joueurs");



function creationGrille() {
    // création d'un tableau avec 7 lignes(i) et 7 colonnes(j)
    //  et mise à 0 de toutes les cases :
    for (var i=0; i<7;i++){
        grille[i]=[];         //
    }
    for (var i=0; i<7; i++){
        for (var j=0; j<7 ; j++){
            grille[i][j] = 0;
        }
    }
    console.log("creation grille");
}


// zone de clic jeu
var choixCol = document.getElementById("choixColonne");


// fonction Choix de joueur en aléatoire pour le début du jeu et apres bouton reset
function randomJoueur() {
    joueurEnCours = Math.floor(Math.random() * 2) + 1;
    console.log("Random Joueur ",joueurEnCours);
    // tourDuJoueur();
    return joueurEnCours;
}

// Personnalisation du jeu en fonction de JoueurEnCours
function tourDuJoueur() {
    console.log("tourDuJoueur",joueurEnCours);
    var col;
    var i;
    if (joueurEnCours == 1) {
        urlLogo = urlLogo1;
        // urlJeton = urlJeton1;
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
        // urlJeton = urlJeton2;
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
    // tourDuJoueur();
    console.log("changementJoueur",joueurEnCours);
    return joueurEnCours;
    
}
function incremScore () {
    console.log(scoreJoueur1 + "/" + scoreJoueur2);
    var valeur1;
    var valeur2;
    if (joueurEnCours == 1) {
        scoreJoueur1++;
        valeur1 = scoreJoueur1.toString().replace(/^(\d)$/,'0$1');
        score1.innerHTML = valeur1;
    } else { 
        scoreJoueur2++;
        valeur2 = scoreJoueur2.toString().replace(/^(\d)$/,'0$1');
        score2.innerHTML = valeur2;
    };
    console.log(scoreJoueur1 + "/" + scoreJoueur2);
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
//fonction retrait affichage jeton dans case precedente (pour chute jeton)
function retraitJeton (idPrevCase) {
    document.getElementById(idPrevCase).style.backgroundImage = "url()";
};


// fonction déplacement vertical du jeton
function move() { 
    // image à déplacer selon joueur en cours
    if (joueurEnCours == 1) {
        urlJeton = urlJeton1;
    } else {
        urlJeton = urlJeton2;
    }
    // déplacement
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
    // lancement fonction vérification alignement
    verif();               
    
}

// action au clic
choixCol.addEventListener("click", function(event){
    if (partie == true) {                   
        // récupération de la coordonnee Y
        var colChoisie =event.target.id;    //enregistre l'id de la cellule cliquee sous forme de string.
        coordY = parseInt(colChoisie[1]);   // recupere le deuxième caractère de l' ID = chiffre
        rechXFin();                         // récupération de la coordonnee X finale  
        coordX = -1;                        // coordonnée de départ du jeton
        move() ;                            // chute du jeton
        changementJoueur();                         
        tourDuJoueur();
        console.log(grille);
    }
}); 


//fonction vérification alignement de 4 jetons identiques
function verif (){
    var x = coordXF;
    var y = coordY;
    var countV = 1;   // compteur vertical
    var countH = 1;   // compteur horizontal
    var countD1 = 1;  // compteur diagonal 1
    var countD2 = 1;  // compteur diagonal 2

    // vérification verticale   
    for (var i=1; i<5; i++) {
        if (x+i >=0 && x+i <7){
            if ( grille[x][y]=== grille[x+i][y] ) {
                countV++;
            }else {
                break;
            }
        };
    }
    for (var i=1; i<5; i++) {
        if (x-i >=0 && x+i <7){
            if (grille[x][y] === grille[x-i][y] ) {
                countV++;
            }else {
                break;
            }
        };
    }
        console.log("compteur vertical final = " + countV);
    
    // vérification horizontale   
    for (var i=1; i<5; i++) {
        if (y+i >=0 && y+i <7){
            if ( grille[x][y]=== grille[x][y+i] ) {
                countH++;
            }else {
                break;
            }
        };
    }
    for (var i=1; i<5; i++) {
        if (y-i >=0 && y-i <7){
            if (grille[x][y] === grille[x][y-i] ) {
                countH++;
            }else {
                break;
            }
        };
    }
        console.log("compteur horizontal final = " + countH);

    // vérification diagonale 1  
    for (var i=1; i<5; i++) {
        if (y+i >=0 && y+i <7 && x+i >=0 && x+i <7){
            if ( grille[x][y]=== grille[x+i][y+i] ) {
                countD1++;
            }else {
                break;
            }
        };
    }
    for (var i=1; i<5; i++) {
        if (y-i >=0 && y-i <7 && x-i >=0 && x-i <7){
            if (grille[x][y] === grille[x-i][y-i] ) {
                countD1++;
            }else {
                break;
            }
        };
    }
    console.log("compteur diagonale 1 final = " + countD1);

    // vérification diagonale 2  
    for (var i=1; i<5; i++) {
        if (y+i >=0 && y+i <7 && x-i >=0 && x-i <7){
            if ( grille[x][y]=== grille[x-i][y+i] ) {
                countD2++;
            }else {
                break;
            }
        };
    }
    for (var i=1; i<5; i++) {
        if (y-i >=0 && y-i <7 && x+i >=0 && x+i <7){
            if (grille[x][y] === grille[x+i][y-i] ) {
                countD2++;
            }else {
                break;
            }
        };
    }
    console.log("compteur diagonale 2 final = " + countD2);

    // si joueur en cours gagne
    if (countV >= 4 || countH >=4 || countD1 >=4 || countD2 >=4) {
        
        console.log ( joueurEnCours + " a gagné");
        incremScore();
        partie = false;      //   fin de la partie
        modal.innerHTML
    };



}
// fonctions qui s'execute à l'ouverture de la page HTML
window.onload = function () {
    creationGrille();
    randomJoueur();
    tourDuJoueur();
    };

// fonction qui initialise la table HTML
function initTableHTML () {
    console.log("initTableHTML");
    var i ;
    var j ;
    var caseTab ;
    for (i=0 ; i <= 6; i++) {
        for (j=0 ; j <= 6; j++) {
            caseTab = "x" + i + "-y" + j;
            document.getElementById(caseTab).style.backgroundImage = "url()";
        }
    }
};

// traitement du bouton rejouer 
rejouer.addEventListener("click", function(){
    initTableHTML();
    creationGrille();
    changementJoueur();   
    tourDuJoueur();

}); 

// traitement du bouton reset
reset.addEventListener("click", function(){
    initTableHTML();
    reinitScore();
    creationGrille();
    randomJoueur();
    tourDuJoueur();
}); 

// fonction remise des scores à zéro apres reset
function reinitScore () {
    console.log("reinitScore");
    scoreJoueur1 = 0;
    scoreJoueur2 = 0;   
    // remise à zéro du <p> de score
    document.getElementById("score1").innerHTML = "00";
    document.getElementById("score2").innerHTML = "00";
};






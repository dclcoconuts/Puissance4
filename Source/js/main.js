
var choixCol1 = document.getElementById("imgCol1");
var choixCol2 = document.getElementById("imgCol2");
var choixCol3 = document.getElementById("imgCol3");
var choixCol4 = document.getElementById("imgCol4");
var choixCol5 = document.getElementById("imgCol5");
var choixCol6 = document.getElementById("imgCol6");
var choixCol7 = document.getElementById("imgCol7");


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
choixCol2.addEventListener("click", function(e){
    console.log(event.target.id);   // affiche imgCol2
});


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
 

// choixCol2.addEventListener("click", function(){
//    // affichage du logo dans la seconde case de la grille :
//     var url1 = "img/Avatar_Licorne_mini.png";
//     document.getElementById("case2").style.backgroundImage = "url('" + url1 + "')";


// });


 



const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}

]
// identification par variable des éléments .arrow_left .arrow_right
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
// identification par variable de l'éléments .dots
let dots = document.querySelector(".dots");

// fonction de la flèche de gauche
arrowLeft.onclick = function() {
	// identification par variable de l'éléments .banner-img
	let image = document.querySelector(".banner-img");
	// identification par variable de l'élément .banner-txt
	let txt = document.querySelector(".banner-txt");

	// .querySelector -> attraper un élément HTML
	// identification par variable de l'élément dot_selected
	let activDot = document.querySelector(".dot_selected");
	// cible le précédent ciblé "activDot" et l'identifie par variable -> newActivDot
	let newActivDot = activDot.previousSibling;
	// SI, alors :
	if (newActivDot != null) {
		// on lui ajoute la class "dot_selected" à cet élément
		newActivDot.classList.add("dot_selected");
		// on lui enlève la class "dot_selected" à cet élément
		activDot.classList.remove("dot_selected");
		/* définit un chiffre, un nombre pour une image précisément via un dataset.

		   image. -> banner img - L.29 js
		   dataset -> donne une propriété comme un nombre number, couleur color, etc ...
		   .number -> propriété de l'élément en question, là c'est le chiffre de l'image qui correspond à 0 - L.21 hmtl
		*/   
		let number = image.dataset.number;
		// mon opérateur d'affectation
		number--;
		/* ma variable newImage me ramène aux slides - L.1 js
		   en y ajoutant le calcul de l'opérateur en question
		   là mon number équivaut à -1 - L.52 js 		
		*/
		let newImage = slides[number];
		/* on cherche a modifier l'url de notre image, pour ça on garde la même chaine de caractère "string" en modifiant
		   	uniquement la fin de notre url comme indiquer sur notre tableau "slides" qui nous indique chaque nom de l'image
		   	souhaité - L.1 js

		   string -> "./assets/images/slideshow/"
		   + -> en y ajoutant 
		   newImage -> me situe sur mes slides - L.56
		   image -> représente le nom de nos slides, exemple "slide2.jpg" - L.1 js

		   [] " ? ? ? "
		*/
		let newUrl = "./assets/images/slideshow/"+newImage.image;
		// indique la modification de mon image.src à ma nouvelle url - L.67 js
		image.src = newUrl;
		/*
		   " ? ? ? "
		*/
		image.dataset.number = number;
		/* récupère le texte de notre image et le remplace par le nouveau texte a introduire selon l'image apparente
		    grâce à newImage qui nous indique bien le slide en question où nous sommes - L.57 js
		   puis en ajoutant le tagLine correspondant indiqué - L.1 js
		*/
		txt.innerHTML = newImage.tagLine;
	}	
}
// fonction de la flèche de droite
arrowRight.onclick = function() {
	let image = document.querySelector(".banner-img");
	let txt = document.querySelector(".banner-txt");

	let activDot = document.querySelector(".dot_selected");
	let newActivDot = activDot.nextSibling;
	if (newActivDot != null) {
		newActivDot.classList.add("dot_selected");
		activDot.classList.remove("dot_selected");
		let number = image.dataset.number;
		number++;
		let newImage = slides[number];
		let newUrl = "./assets/images/slideshow/"+newImage.image;
		image.src = newUrl;
		image.dataset.number = number;
		txt.innerHTML = newImage.tagLine;
	}
}

let numberImage = slides.length;
// n est identifié comme un compteur de base
let n = 0;
/* while permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée.
   Si n < numberImage, alors n+1 et ainsi de suite jusqu'à ne plus pouvoir appliquer cette condition 
*/
while (n < numberImage) {
	// créer la div
	let dot = document.createElement("div");
	// ajoute la class dot 
	dot.classList.add("dot");
	// si n est égale 0, ajoute à la class dot "dot_selected"
	if (n==0) {
		dot.classList.add("dot_selected");
	  }
	// ajoute dot au parent dots
	dots.append(dot);
	/* de préférence, placer l'opérateur d'affectation à la fin sauf cas précis comme un calcul a utiliser
	    à l'intérieur même d'une fonction */
	// n++ = n+1
  	n++;
}



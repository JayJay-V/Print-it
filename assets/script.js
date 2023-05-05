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
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerTxt = document.querySelector("#banner p");
const dotsElement = document.querySelector(".dots");
const numberImg = slides.length;

// Compteur for Function
let n = 0;

// Arrow Left
// Arrow Function
arrowLeft.addEventListener("click", () => {
	n = (n === 0 ? numberImg -1 : n -1);	
	// Import New Url / Tagline
	bannerImg.src = `./assets/images/slideshow/${slides[n].image}`;
	bannerTxt.innerHTML = slides[n].tagLine;

	// Remove / Add the class
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[n].classList.add("dot_selected");	
});

// Arrow Right
// Arrow Function
arrowRight.addEventListener("click", () => {
	n = (n >= numberImg -1 ? 0 : n + 1);

	bannerImg.src = `./assets/images/slideshow/${slides[n].image}`;
	bannerTxt.innerHTML = slides[n].tagLine;

	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[n].classList.add("dot_selected");
});

// Create Element
// Compteur for Create Element
let i = 0;

while (i < numberImg) {
	let panel = document.createElement("div");
	panel.classList.add("dot");
	if ( i==0) {
	panel.classList.add("dot_selected");
	}
	dotsElement.append(panel);
	i++;
}

let dots = document.querySelectorAll(".dot");
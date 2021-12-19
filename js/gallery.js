'use strict';

const galleryImgs = document.querySelectorAll('.Gallery__img');

let uniqueNumbers = [];
let randomNumber = 0;

galleryImgs.forEach((item, i) => {
	do {
		randomNumber = Math.floor(Math.random() * 15) + 1;
	} while (uniqueNumbers.indexOf(randomNumber) != -1);
	uniqueNumbers.push(randomNumber);
	item.src = `assets/img/galery/galery${randomNumber}.webp`;
});

window.addEventListener('DOMContentLoaded', function () {
	const animItems = document.querySelectorAll('.animation-item');

	if (animItems.length > 0) {

		const animate = () => {
			animItems.forEach((item) => {
				const itemHeight = item.offsetHeight, //height of our item
					itemOffset = item.getBoundingClientRect().top + document.documentElement.scrollTop, // distance fro item to document top: ;
					animFactor = 10;

				let animPoint = window.innerHeight - (itemHeight / animFactor);
				if (itemHeight > window.innerHeight) {
					animPoint = window.innerHeight - window.innerHeight / animFactor;
				}

				if ((window.scrollY > (itemOffset - animPoint)) && (window.scrollY < (itemOffset + itemHeight))) {
					item.classList.add('animation-item_active');
				} else {
					item.classList.remove('animation-item_active');
				}
			});
		}

		animate();

		window.addEventListener('scroll', animate);
	}
});

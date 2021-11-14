const galleryClass = document.querySelectorAll('.Gallery__img');

let uniqueNumbers = [];

galleryClass.forEach((item, i) => {
	let randomNumber = 0;
	do {
		randomNumber = Math.floor(Math.random()*15) + 1;
	} while (uniqueNumbers.indexOf(randomNumber) != -1);
	uniqueNumbers.push(randomNumber);
	item.src = `assets/img/galery/galery${randomNumber}.jpg`;
});

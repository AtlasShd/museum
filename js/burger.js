window.addEventListener('DOMContentLoaded', function () {
	const navCrossBtn = document.querySelector('.nav__cross-btn'),
		welcomeColumn = document.querySelector('.Welcome__column'),
		navList = document.querySelector('.nav__list'),
		nav = document.querySelector('.nav'),
		crossChecked = document.querySelector('.nav__cross'),
		navImgContainer = document.querySelector('.nav__img-container');

	function toggleBurger() {
		navList.classList.toggle('show-burger');
		welcomeColumn.classList.toggle('hide-column');
		toggleBurgerCross();
	}

	function toggleBurgerCross() {
		crossChecked.classList.toggle('nav__cross-checked');
	}

	document.body.addEventListener('click', function (e) {
		if (e.target != navCrossBtn && e.target != navList && e.target != navImgContainer) {
			navList.classList.remove('show-burger');
			welcomeColumn.classList.remove('hide-column');
			crossChecked.classList.remove('nav__cross-checked');
		}
	});
	navCrossBtn.addEventListener('click', toggleBurger);

});
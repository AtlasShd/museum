window.addEventListener('DOMContentLoaded', function () {

	const navCrossBtn = document.querySelector('.nav__cross-btn'),
		welcomeColumn = document.querySelector('.Welcome__column'),
		navList = document.querySelector('.nav__list'),
		nav = document.querySelector('.nav');

	function toggleBurger() {
		navList.classList.toggle('show-burger');
		welcomeColumn.classList.toggle('hide-column');
	}

	document.body.addEventListener('click', function (e) {
		if (e.target != navCrossBtn) {
			navList.classList.remove('show-burger');
			welcomeColumn.classList.remove('hide-column');
		}
	});

	navCrossBtn.addEventListener('click', toggleBurger);

});
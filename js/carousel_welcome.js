'use strict';

window.addEventListener('DOMContentLoaded', function () {
	const items = document.querySelectorAll('.carousel__item');
	const dots = document.querySelectorAll('.swiper__dot');
	const count = document.querySelector('.swiper__count');
	let currentItem = 0;
	let isEnabled = true;

	function changeCurrentItem(value) {
		currentItem = (value + items.length) % items.length;
	}

	function hideItem(direction) {
		//remove last dot
		dots[currentItem].classList.remove('swiper__dot_selected');

		isEnabled = false;
		items[currentItem].classList.add(direction);
		items[currentItem].addEventListener('animationend', function () {
			this.classList.remove('carousel__item_active', direction);
		});
	}

	function showItem(direction) {
		items[currentItem].classList.add('carousel__item_next', direction);
		items[currentItem].addEventListener('animationend', function () {
			this.classList.remove('carousel__item_next', direction);
			this.classList.add('carousel__item_active');
			isEnabled = true;
		});

		//edit count 01, 02, 03, 04, 05 | 05
		count.textContent = `0${+currentItem + 1} | 0${items.length}`;

		//add next dot
		dots[currentItem].classList.add('swiper__dot_selected');
	}

	function nextItem(value) {
		hideItem('to-left');
		changeCurrentItem(value + 1);
		showItem('from-right');
		clearTimeout(autoSwipe);
		autoSwipe = setInterval(() => {
			nextItem(currentItem);
		}, 15000);
	}

	function previousItem(value) {
		hideItem('to-right');
		changeCurrentItem(value - 1);
		showItem('from-left');
		clearTimeout(autoSwipe);
		autoSwipe = setInterval(() => {
			nextItem(currentItem);
		}, 15000);
	}

	document.querySelector('.swiper__btn-right').addEventListener('click', function () {
		if (isEnabled) {
			nextItem(currentItem);
		}
	});

	document.querySelector('.swiper__btn-left').addEventListener('click', function () {
		if (isEnabled) {
			previousItem(currentItem);
		}
	});

	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			if (isEnabled) {
				if (index > currentItem) {
					while (currentItem != index) {
						nextItem(currentItem);
					}
				} else {
					while (currentItem != index) {
						previousItem(currentItem);
					}
				}
			}
		});
	});

	const swiper = (element) => {
		const ALLOWED_TIME = 300,
			TRESHOLD = 50,
			RESTRAINT = 100;

		let surface = element;

		let startTime = 0,
			fullTime = 0;

		let startX = 0,
			startY = 0,
			distanceX = 0,
			distanceY = 0,
			distance = 0;

		surface.addEventListener('mousedown', function (e) {
			startTime = new Date().getTime();
			startX = e.pageX;
			startY = e.pageY;
			e.preventDefault();
		});

		surface.addEventListener('mouseup', function (e) {
			if (isEnabled) {
				fullTime = new Date().getTime() - startTime;
				distanceX = e.pageX - startX;
				distanceY = Math.abs(e.pageY - startY);
				distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
				// calculate total distance move of mouse through Pythagorean theorem

				if (fullTime <= ALLOWED_TIME && distance >= TRESHOLD && distanceY <= RESTRAINT) {
					distanceX > 0 ? previousItem(currentItem) : nextItem(currentItem);
				}
				e.preventDefault();
			}
		});

		surface.addEventListener('touchstart', function (e) {
			startTime = new Date().getTime();
			startX = e.touches[0].pageX;
			startY = e.touches[0].pageY;
			e.preventDefault();
		});

		surface.addEventListener('touchend', function (e) {
			if (isEnabled) {
				fullTime = new Date().getTime() - startTime;
				distanceX = e.changedTouches[0].pageX - startX;
				distanceY = Math.abs(e.changedTouches[0].pageY - startY);
				distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
				// calculate total distance move of touch through Pythagorean theorem

				if (fullTime <= ALLOWED_TIME && distance >= TRESHOLD && distanceY <= RESTRAINT) {
					distanceX > 0 ? previousItem(currentItem) : nextItem(currentItem);
				}
				e.preventDefault();
			}
		});
	};

	swiper(document.querySelector('.carousel'));

	let autoSwipe = setInterval(() => {
		nextItem(currentItem);
	}, 15000);
});

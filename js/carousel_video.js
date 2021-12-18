'use strict';

window.addEventListener('DOMContentLoaded', function () {
	// const videosContainer = document.querySelector('.switch__videos');

	const videos = document.querySelectorAll('.switch__video');
	const dots = document.querySelectorAll('.switch__dot');

	let currentItem = 0;
	let isEnabled = true;

	function changeCurrentItem(value) {
		dots[currentItem].classList.remove('switch__dot_active');
		currentItem = (value + videos.length) % videos.length;
		dots[currentItem].classList.add('switch__dot_active');
	}

	function stepToRight(timing) {
		const videosContainer = document.querySelector('.switch__videos');
		const firstVideo = videosContainer.firstElementChild;

		isEnabled = false;

		videosContainer.classList.add('switch__step_right');
		setTimeout(() => {
			videosContainer.removeChild(firstVideo);
			videosContainer.append(firstVideo);
			videosContainer.classList.remove('switch__step_right');
			changeCurrentItem(currentItem + 1);
			isEnabled = true;
		}, timing);
	}

	function stepToLeft(timing) {
		const videosContainer = document.querySelector('.switch__videos');
		const lastVideo = videosContainer.lastElementChild;

		isEnabled = false;

		videosContainer.classList.add('switch__step_left');
		setTimeout(() => {
			videosContainer.removeChild(lastVideo);
			videosContainer.prepend(lastVideo);
			videosContainer.classList.remove('switch__step_left');
			changeCurrentItem(currentItem - 1);
			isEnabled = true;
		}, timing);
	}

	function nextItem() {
		if (!isEnabled) {
			return;
		}
		stepToRight(500);
	}

	function previousItem() {
		if (!isEnabled) {
			return;
		}

		stepToLeft(500);
	}

	document.querySelector('.switch__arrows_right').addEventListener('click', function () {
		nextItem();
	});

	document.querySelector('.switch__arrows_left').addEventListener('click', function () {
		previousItem();
	});

	dots.forEach((dot, index) => {
		dot.addEventListener('click', function () {
			if (index > currentItem) {
				if (currentItem != index) {
					stepToRight(500);
					let dotTimeout = setTimeout(function abc() {
						if (currentItem == index) {
							clearTimeout(dotTimeout);
						} else {
							stepToRight(500);
							dotTimeout = setTimeout(abc, 550);
						}
					}, 550);
				}
			} else {
				if (currentItem != index) {
					stepToLeft(500);
					let dotTimeout = setTimeout(function abc() {
						if (currentItem == index) {
							clearTimeout(dotTimeout);
						} else {
							stepToLeft(500);
							dotTimeout = setTimeout(abc, 550);
						}
					}, 550);
				}
			}
		});
	});
});

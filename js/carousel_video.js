'use strict';

window.addEventListener('DOMContentLoaded', function () {
	// const videosContainer = document.querySelector('.switch__videos');

	const videos = document.querySelectorAll('.switch__video');
	const dots = document.querySelectorAll('.switch__dot');

	let currentItem = 0;
	let isEnabled = true;

	function changeCurrentItem(value) {
		currentItem = (value + videos.length) % videos.length;
	}



	function stepToRight(timing) {
		const videosContainer = document.querySelector('.switch__videos');
		const firstVideo = videosContainer.firstElementChild;

		isEnabled = false;

		dots[currentItem].classList.remove('switch__dot_active');
		changeCurrentItem(currentItem + 1);
		dots[currentItem].classList.add('switch__dot_active');

		setCoreVideo(currentItem);
		pauseAllVideos();

		videosContainer.classList.add('switch__step_right');
		setTimeout(() => {
			videosContainer.removeChild(firstVideo);
			videosContainer.append(firstVideo);
			videosContainer.classList.remove('switch__step_right');
			isEnabled = true;
		}, timing);
	}

	function stepToLeft(timing) {
		const videosContainer = document.querySelector('.switch__videos');
		const lastVideo = videosContainer.lastElementChild;

		isEnabled = false;

		dots[currentItem].classList.remove('switch__dot_active');
		changeCurrentItem(currentItem - 1);
		dots[currentItem].classList.add('switch__dot_active');

		setCoreVideo(currentItem);
		pauseAllVideos();

		videosContainer.classList.add('switch__step_left');
		setTimeout(() => {
			videosContainer.removeChild(lastVideo);
			videosContainer.prepend(lastVideo);
			videosContainer.classList.remove('switch__step_left');
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

	function setCoreVideo(indexCurrentVideo) {
		const coreVideo = document.querySelector('.Video__video');

		coreVideo.setAttribute('src', `assets/video/video${indexCurrentVideo}.mp4`);
		coreVideo.setAttribute('poster', `assets/video/poster${indexCurrentVideo}.webp`);
	}

	function pauseAllVideos() {
		document.querySelectorAll('.switch__video').forEach((video) => {
			video.firstElementChild.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
		});
	}


	document.querySelector('.Video__core').addEventListener('click', function () {
		pauseAllVideos();
	});

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

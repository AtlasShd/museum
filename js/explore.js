'use strict';

window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.slider input').addEventListener('input', function () {
		document.querySelector('.slider__before').style.width = this.value + '%';
	});
});

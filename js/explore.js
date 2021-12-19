'use strict';

window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.slider input').addEventListener('input', function (e) {
		e.preventDefault();

		document.querySelector('.slider__before').style.width = this.value + '%';
	});


});

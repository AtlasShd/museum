window.addEventListener('DOMContentLoaded', function () {

	const basicInput = document.querySelector('#basic-input'),
		seniorInput = document.querySelector('#senior-input'),
		formBasicInput = document.querySelector('#form-basic-input'),
		formSeniorInput = document.querySelector('#form-senior-input'),
		basicDecrement = document.querySelector('#basic-decrement'),
		basicIncrement = document.querySelector('#basic-increment'),
		seniorDecrement = document.querySelector('#senior-decrement'),
		seniorIncrement = document.querySelector('#senior-increment'),
		formBasicDecrement = document.querySelector('#form-basic-decrement'),
		formBasicIncrement = document.querySelector('#form-basic-increment'),
		formSeniorDecrement = document.querySelector('#form-senior-decrement'),
		formSeniorIncrement = document.querySelector('#form-senior-increment');

	basicDecrement.addEventListener('click', e => {
		e.preventDefault();

		const min = basicInput.getAttribute('min');
		const max = basicInput.getAttribute('max');
		const step = basicInput.getAttribute('step');
		const value = basicInput.getAttribute('value');

		const newValue = parseInt(value) - +step;

		if (newValue >= min && newValue <= max) basicInput.setAttribute('value', newValue);
	});

	basicIncrement.addEventListener('click', e => {
		e.preventDefault();

		const min = basicInput.getAttribute('min');
		const max = basicInput.getAttribute('max');
		const step = basicInput.getAttribute('step');
		const value = basicInput.getAttribute('value');

		const newValue = parseInt(value) + +step;

		if (newValue >= min && newValue <= max) basicInput.setAttribute('value', newValue);
	});

	seniorDecrement.addEventListener('click', e => {
		e.preventDefault();

		const min = seniorInput.getAttribute('min');
		const max = seniorInput.getAttribute('max');
		const step = seniorInput.getAttribute('step');
		const value = seniorInput.getAttribute('value');

		const newValue = parseInt(value) - +step;

		if (newValue >= min && newValue <= max) seniorInput.setAttribute('value', newValue);
	});

	seniorIncrement.addEventListener('click', e => {
		e.preventDefault();

		const min = seniorInput.getAttribute('min');
		const max = seniorInput.getAttribute('max');
		const step = seniorInput.getAttribute('step');
		const value = seniorInput.getAttribute('value');

		const newValue = parseInt(value) + +step;

		if (newValue >= min && newValue <= max) seniorInput.setAttribute('value', newValue);
	});

	formBasicDecrement.addEventListener('click', e => {
		e.preventDefault();

		const min = formBasicInput.getAttribute('min');
		const max = formBasicInput.getAttribute('max');
		const step = formBasicInput.getAttribute('step');
		const value = formBasicInput.getAttribute('value');

		const newValue = parseInt(value) - +step;

		if (newValue >= min && newValue <= max) formBasicInput.setAttribute('value', newValue);
	});

	formBasicIncrement.addEventListener('click', e => {
		e.preventDefault();

		const min = formBasicInput.getAttribute('min');
		const max = formBasicInput.getAttribute('max');
		const step = formBasicInput.getAttribute('step');
		const value = formBasicInput.getAttribute('value');

		const newValue = parseInt(value) + +step;

		if (newValue >= min && newValue <= max) formBasicInput.setAttribute('value', newValue);
	});

	formSeniorDecrement.addEventListener('click', e => {
		e.preventDefault();

		const min = formSeniorInput.getAttribute('min');
		const max = formSeniorInput.getAttribute('max');
		const step = formSeniorInput.getAttribute('step');
		const value = formSeniorInput.getAttribute('value');

		const newValue = parseInt(value) - +step;

		if (newValue >= min && newValue <= max) formSeniorInput.setAttribute('value', newValue);
	});

	formSeniorIncrement.addEventListener('click', e => {
		e.preventDefault();

		const min = formSeniorInput.getAttribute('min');
		const max = formSeniorInput.getAttribute('max');
		const step = formSeniorInput.getAttribute('step');
		const value = formSeniorInput.getAttribute('value');

		const newValue = parseInt(value) + +step;

		if (newValue >= min && newValue <= max) formSeniorInput.setAttribute('value', newValue);
	});


	// riple effect
	const ticketsBtn = document.querySelector('.Tickets__buy-btn');

	function rippler(e) {
		let x = e.offsetX;
		let y = e.offsetY;

		let ripples = document.createElement('span');
		ripples.style.left = `${x}px`;
		ripples.style.top = `${y}px`;
		this.appendChild(ripples);
		setTimeout(() => {
			ripples.remove();
		}, 750)
	}

	ticketsBtn.addEventListener('click', rippler);

	//tickets form
	const shadowBg = document.querySelector('.shadow-bg'),
		ticketsForm = document.querySelector('.tickets-form'),
		ticketsFormContainer = document.querySelector('.tickets-form__container'),
		crossButton = document.querySelector('.tickets-form__cross');

	ticketsBtn.addEventListener('click', showForm);
	shadowBg.addEventListener('click', hideForm);
	crossButton.addEventListener('click', hideForm);

	function showForm() {
		ticketsFormContainer.style.display = 'block';
		shadowBg.style.left = 0;
		shadowBg.style.background = 'rgba(0, 0, 0, 0.5)';
		ticketsForm.style.left = 0;
	}

	function hideForm() {
		shadowBg.style.background = 'rgba(0, 0, 0, 0)';
		ticketsForm.style.left = '-100%';
		setTimeout(() => {
			shadowBg.style.left = '-100%';
			ticketsFormContainer.style.display = 'none';
		}, 500);
	}

	//date-time
	const leftDate = document.querySelector('.left-form__date'),
		dateInput = document.querySelector('.date-input'),
		leftTime = document.querySelector('.left-form__time'),
		timeInput = document.querySelector('.time-input');

	leftDate.addEventListener('change', () => {
		dateInput.style.display = 'none';
	});

	dateInput.addEventListener('click', () => {
		leftDate.dispatchEvent(new Event('change'));
	});

	leftTime.addEventListener('change', () => {
		timeInput.style.display = 'none';
	});

	timeInput.addEventListener('click', () => {
		leftTime.dispatchEvent(new Event('change'));
	});
});
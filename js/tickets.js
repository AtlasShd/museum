'use strict';

window.addEventListener('DOMContentLoaded', function () {
	const counterTickets = document.querySelectorAll('.counter');

	const basicInput = document.querySelector('#basic-input'),
		seniorInput = document.querySelector('#senior-input'),
		formBasicInput = document.querySelector('#form-basic-input'),
		formSeniorInput = document.querySelector('#form-senior-input');

	const radios = document.querySelectorAll('.radio'),
		optionsTicketType = document.querySelector('#ticket-type'),
		ticketsTotal = document.querySelector('.Tickets__total'),
		fullPriceBigPrice = document.querySelector('.full-price__big-price'),
		fullPriceCountBasic = document.querySelector('.full-price__count_basic'),
		fullPriceCountSenior = document.querySelector('.full-price__count_senior'),
		entryTicketPriceBasic = document.querySelector('.entry-ticket__price_basic'),
		entryTicketPriceSenior = document.querySelector('.entry-ticket__price_senior'),
		fullPriceTicketBasic = document.querySelector('.full-price__ticket_basic'),
		fullPriceTicketSenior = document.querySelector('.full-price__ticket_senior'),
		fullPriceBlackBoxBasic = document.querySelector('.full-price__black-box_basic'),
		fullPriceBlackBoxSenior = document.querySelector('.full-price__black-box_senior');

	const timetableSelectedDate = document.querySelector('.timetable__selected-date'),
		timetableSelectedTime = document.querySelector('.timetable__selected-time'),
		timetableTicketType = document.querySelector('.timetable__ticket-type'),
		leftFormDate = document.querySelector('.left-form__date'),
		leftFormTime = document.querySelector('.left-form__time');

	const inputsForm = document.querySelector('#tickets-form__form');

	inputsForm.addEventListener('submit', sendForm);

	function sendForm(e) {
		e.preventDefault();

		let formErrors = formValidate(inputsForm);

		if (!formErrors === 0) {
		}

		function formValidate(form) {
			let error = 0,
				formRequary = document.querySelectorAll('.requary-form');

			formRequary.forEach((input) => {
				formRemoveError(input);

				if (input.classList.contains('left-form__date')) {
					console.dir(input);
					if (!validateDate(input)) {
						formAddError(input);
						error++;
					}
				} else if (input.classList.contains('left-form__time')) {
					console.dir(input);
					if (!validateTime(input)) {
						formAddError(input);
						error++;
					}
				} else if (input.classList.contains('left-form__name')) {
					if (!validateName(input)) {
						formAddError(input);
						error++;
					}
				} else if (input.classList.contains('left-form__mail')) {
					if (!validateEmail(input)) {
						formAddError(input);
						error++;
					}
				} else if (input.classList.contains('left-form__phone')) {
					if (!validatePhone(input)) {
						formAddError(input);
						error++;
					}
				} else {
					if (input.value === '') {
						formAddError(input);
						error++;
					}
				}
			});
			return error;
		}

		function formAddError(input) {
			input.parentElement.classList.add('form-warning');
		}

		function formRemoveError(input) {
			input.parentElement.classList.remove('form-warning');
		}

		function validateDate(input) {
			return input.value;
		}

		function validateTime(input) {
			return input.value;
		}

		function validateEmail(input) {
			return /^[-\w]{3,15}@[a-zA-Z]{4,}\.[a-zA-Z]{2,}$/.test(input.value);
		}

		function validateName(input) {
			return /(^[a-zA-Z ]{3,15}$)|(^[а-яёА-ЯЁ ]{3,15}$)/.test(input.value);
		}

		function validatePhone(input) {
			return /(^\d{1,10}$)|(^(\d{2}-){1,4}\d{2}$)|(^(\d{2}\s){1,4}\d{2}$)|(^(\d{3}-){1,2}\d{3}$)|(^(\d{3}\s){1,2}\d{3}$)/.test(
				input.value
			);
		}
	}

	counterTickets.forEach((counter) => {
		counter.firstElementChild.addEventListener('click', function (event) {
			event.preventDefault();
			const input = event.target.parentElement.querySelector('input'),
				deduct = false;
			changeValue(input, deduct);
			toLocalStorage();
		});
		counter.lastElementChild.addEventListener('click', function (event) {
			event.preventDefault();
			const input = event.target.parentElement.querySelector('input'),
				reduct = true;
			changeValue(input, reduct);
			toLocalStorage();
		});
	});

	basicInput.addEventListener('change', function () {
		if (+this.value >= +this.getAttribute('min') && +this.value <= +this.getAttribute('max')) {
			setTotal();
			toLocalStorage();
			setAllAtributes(this, this.value);
		}
	});

	seniorInput.addEventListener('change', function () {
		if (+this.value >= +this.getAttribute('min') && +this.value <= +this.getAttribute('max')) {
			setTotal();
			toLocalStorage();
			setAllAtributes(this, this.value);
		}
	});

	function toLocalStorage() {
		localStorage.setItem('basicInput', basicInput.value);
		localStorage.setItem('seniorInput', seniorInput.value);
		localStorage.setItem('optionsTicketType', optionsTicketType.value);
	}

	optionsTicketType.onchange = function () {
		document.querySelector(`input[value="${this.value}"]`).click();
	};

	radios.forEach((radio) => {
		radio.addEventListener('change', function () {
			setTotal();
			setTicketTypeInTimetable(this.lastChild.textContent);
			toLocalStorage();
		});
	});

	leftFormDate.addEventListener('change', setDateInTimetable);

	leftFormTime.addEventListener('change', setTimeInTimetable);

	function changeValue(input, reductOrDeduct) {
		const min = input.getAttribute('min'),
			max = input.getAttribute('max'),
			step = input.getAttribute('step'),
			value = input.value;

		const newValue = reductOrDeduct ? parseInt(value) + parseInt(step) : parseInt(value) - parseInt(step);

		if (newValue >= min && newValue <= max) {
			setAllAtributes(input, newValue);
			setTotal();
		}
	}

	function setAllAtributes(input, newValue) {
		if (input === basicInput || input === formBasicInput) {
			basicInput.value = newValue;
			formBasicInput.value = newValue;
		} else {
			seniorInput.value = newValue;
			formSeniorInput.value = newValue;
		}
	}

	setMinDate(new Date());

	function setMinDate(today) {
		leftFormDate.setAttribute('min', `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
		leftFormDate.setAttribute('value', `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
		setDateInTimetable();
	}

	setValueTime(new Date());

	function setValueTime(today) {
		if (today.getHours() >= 9 && today.getHours() <= 17) {
			leftFormTime.setAttribute('value', `${today.getHours() + 1}:00`);
			leftFormTime.setAttribute('min', `${today.getHours()}:00`);
		} else {
			leftFormTime.setAttribute('value', `09:30`);
			setMinDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
		}
		setTimeInTimetable();
	}

	function setDateInTimetable() {
		const date = new Date(leftFormDate.valueAsNumber);
		const month = date.toLocaleDateString('en', { month: 'long' });
		const dayOfWeek = date.toLocaleDateString('en', { weekday: 'long' });

		timetableSelectedDate.textContent = `${dayOfWeek}, ${month} ${date.getDate()}`;
	}

	function setTimeInTimetable() {
		const time = new Date(leftFormTime.valueAsNumber);
		const doubleMinutes = String(time.getUTCMinutes()).length > 1 ? time.getUTCMinutes() : '0' + time.getUTCMinutes(),
			doubleHours = String(time.getUTCHours()).length > 1 ? time.getUTCHours() : '0' + time.getUTCHours();
		if (+doubleHours >= 9 && +doubleHours < 18) {
			if (doubleMinutes == '00' || doubleMinutes == '30') {
				timetableSelectedTime.textContent = `${doubleHours} : ${doubleMinutes}`;
			}
		} else if (+doubleHours == 18 && doubleMinutes == '00') {
			timetableSelectedTime.textContent = `${doubleHours} : ${doubleMinutes}`;
		}
	}

	function setTicketTypeInTimetable(value) {
		timetableTicketType.textContent = value;
	}

	function setTotal() {
		const basicValue = basicInput.value,
			seniorValue = seniorInput.value,
			price = getPrice(document.querySelector('input[name="ticket-type"]:checked'));

		ticketsTotal.textContent = `Total €${basicValue * price + seniorValue * (price / 2)}`;
		fullPriceBigPrice.textContent = `${basicValue * price + seniorValue * (price / 2)} €`;

		fullPriceCountBasic.textContent = `${basicValue * price} €`;
		fullPriceCountSenior.textContent = `${seniorValue * (price / 2)} €`;

		entryTicketPriceBasic.textContent = `Basic 18+ (${price} €)`;
		entryTicketPriceSenior.textContent = `Senior 65+ (${price / 2} €)`;

		fullPriceTicketBasic.textContent = `Basic (${price} €)`;
		fullPriceTicketSenior.textContent = `Senior (${price / 2} €)`;

		fullPriceBlackBoxBasic.textContent = `${basicValue}`;
		fullPriceBlackBoxSenior.textContent = `${seniorValue}`;
	}

	function getPrice(element) {
		const price = element.getAttribute('value');
		optionsTicketType.value = `${price}`;
		return price;
	}

	fromLocalStorage();

	function fromLocalStorage() {
		if (localStorage.getItem('basicInput')) {
			setAllAtributes(basicInput, localStorage.getItem('basicInput'));
		}
		if (localStorage.getItem('seniorInput')) {
			setAllAtributes(seniorInput, localStorage.getItem('seniorInput'));
		}
		if (localStorage.getItem('optionsTicketType')) {
			document.querySelector(`input[value="${localStorage.getItem('optionsTicketType')}"]`).click();
		}
		setTotal();
	}

	// riple effect
	const ticketsBtn = document.querySelector('.Tickets__buy-btn');

	function rippler(e) {
		let x = e.offsetX;
		let y = e.offsetY;

		let ripples = document.createElement('span');
		ripples.style.left = `${x}px`;
		ripples.style.top = `${y}px`;
		ticketsBtn.appendChild(ripples);
		setTimeout(() => {
			ripples.remove();
		}, 750);
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

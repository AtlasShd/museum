'use strict';

window.addEventListener('DOMContentLoaded', function () {
	const counterTickets = document.querySelectorAll('.counter');

	const basicInput = document.querySelector('#basic-input'),
		seniorInput = document.querySelector('#senior-input'),
		formBasicInput = document.querySelector('#form-basic-input'),
		formSeniorInput = document.querySelector('#form-senior-input');

	const radios = document.querySelectorAll('.radio'),
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

	counterTickets.forEach((counter) => {
		counter.firstElementChild.addEventListener('click', function (event) {
			event.preventDefault();
			const input = event.target.parentElement.querySelector('input'),
				deduct = false;
			changeValue(input, deduct);
		});
		counter.lastElementChild.addEventListener('click', function (event) {
			event.preventDefault();
			const input = event.target.parentElement.querySelector('input'),
				reduct = true;
			changeValue(input, reduct);
		});
	});

	function changeValue(input, reductOrDeduct) {
		const min = input.getAttribute('min'),
			max = input.getAttribute('max'),
			step = input.getAttribute('step'),
			value = input.getAttribute('value');

		const newValue = reductOrDeduct ? parseInt(value) + parseInt(step) : parseInt(value) - parseInt(step);

		if (newValue >= min && newValue <= max) {
			setAllAtributes(input, newValue);
		}
	}

	function setAllAtributes(input, newValue) {
		if (input === basicInput || input === formBasicInput) {
			basicInput.setAttribute('value', newValue);
			formBasicInput.setAttribute('value', newValue);
		} else {
			seniorInput.setAttribute('value', newValue);
			formSeniorInput.setAttribute('value', newValue);
		}
		setTotal();
	}

	radios.forEach(radio => {
		radio.addEventListener('change', setTotal);
	});

	function setTotal() {
		const basicValue = basicInput.getAttribute('value'),
			seniorValue = seniorInput.getAttribute('value'),
			price = document.querySelector('input[name="ticket-type"]:checked').getAttribute('value');

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

	setTotal()

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

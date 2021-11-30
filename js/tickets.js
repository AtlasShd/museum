const basicInput = document.querySelector('#basic-input');
const seniorInput = document.querySelector('#senior-input');

function basicStepper(b) {
	let id = b.getAttribute('id');
	let min = basicInput.getAttribute('min');
	let max = basicInput.getAttribute('max');
	let step = basicInput.getAttribute('step');
	let value = basicInput.getAttribute('value');

	let calcStep = (id == 'basic-increment') ? (step*1) : (step*(-1));

	let newValue = parseInt(value) + calcStep;

	if (newValue >= min && newValue <= max) {
		basicInput.setAttribute('value', newValue);
	}

}

function seniorStepper(b) {
	let id = b.getAttribute('id');
	let min = seniorInput.getAttribute('min');
	let max = seniorInput.getAttribute('max');
	let step = seniorInput.getAttribute('step');
	let value = seniorInput.getAttribute('value');

	let calcStep = (id == 'senior-increment') ? (step*1) : (step*(-1));

	let newValue = parseInt(value) + calcStep;

	if (newValue >= min && newValue <= max) {
		seniorInput.setAttribute('value', newValue);
	}
}

// riple effect
const ticketsBtn = document.querySelector('.Tickets__buy-btn');

function rippler (e) {
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
 ticketsForm = document.querySelector('.tickets-form');

 ticketsBtn.addEventListener('click', showForm);
 shadowBg.addEventListener('click', hideForm);

 function showForm() {
	shadowBg.style.left = 0;
	shadowBg.style.background = 'rgba(0, 0, 0, 0.5)';
	ticketsForm.style.left = 0;
 }

 function hideForm() {
	shadowBg.style.background = 'rgba(0, 0, 0, 0)';
	ticketsForm.style.left = '100%';
	setTimeout(() => {
		shadowBg.style.left = '100%';
	}, 500);
 }


 const leftDate = document.querySelector('.left-form__date'),
 dateInput = document.querySelector('.date-input');

 leftDate.addEventListener('change', () => {
	dateInput.style.display = 'none';
 });
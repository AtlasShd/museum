// const upperInput = document.querySelector('#basic-input');
// const downInput = document.querySelector('#senior-input');

// const basicDecr = document.querySelector('#basic-decrement'),
// basicIncr = document.querySelector('#basic-increment'),
// seniorDecr = document.querySelector('#senior-decrement'),
// seniorIncr = document.querySelector('#senior-increment');

// basicDecr.addEventListener('click', stepper(upperInput));
// basicIncr.addEventListener('click', stepper(upperInput));
// seniorDecr.addEventListener('click', stepper(downInput));
// seniorIncr.addEventListener('click', stepper(downInput));

// function stepper(b) {
// 	let id = b.getAttribute('id');
// 	let min = b.getAttribute('min');
// 	let max = b.getAttribute('max');
// 	let step = b.getAttribute('step');
// 	let value = b.getAttribute('value');
// 	console.log(id, min, max, step, value);
// }

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
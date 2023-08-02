const btn = document.querySelector('.header__btn');
const formGroups = document.querySelectorAll('.header__form-group');
const dayInfo = document.querySelector('.header__info .header__days');
const monthInfo = document.querySelector('.header__info .header__months');
const yearInfo = document.querySelector('.header__info .header__years');

const checkErrors = () => {
	formGroups.forEach(el => {
		if (el.children[1].value === '') {
			el.classList.add('header__error-form');
		} else {
			el.classList.remove('header__error-form');
			checkForm();
		}
	});
};
const checkForm = () => {
	const day1 = parseInt(document.getElementById('day').value, 10);
	const month1 = parseInt(document.getElementById('month').value, 10);
	const year1 = parseInt(document.getElementById('year').value, 10);
	const date = new Date();
	let day2 = date.getDate();
	let month2 = 1 + date.getMonth();
	let year2 = date.getFullYear();

	let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (day1 > day2) {
		day2 = day2 + months[month2 - 1];
		month2 = month2 - 1;
	}
	if (month1 > month2) {
		month2 = month2 + 12;
		year2 = year2 - 1;
	}
	let day = day2 - day1;
	let month = month2 - month1;
	let year = year2 - year1;

	if (isNaN(day1) || isNaN(month1) || isNaN(year1)) {
		dayInfo.textContent = '--';
		monthInfo.textContent = '--';
		yearInfo.textContent = '--';
	} else {
		dayInfo.textContent = day;
		monthInfo.textContent = month;
		yearInfo.textContent = year;
	}
};
btn.addEventListener('click', checkErrors);

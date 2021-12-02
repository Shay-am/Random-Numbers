const getNumber = () => Math.floor(Math.random() * 100) + 1;
const sortArray = (a, b) => a - b;
const qs = selector => document.querySelector(selector);

const button = qs(".button");

const getRandomNumbers = () => {
	const result = [];

	function random() {
		result.push(getNumber());
		result.length === 20 ? result : random();
	}
	random();

	result.sort(sortArray);

	return result;
};

const createElement = (element, toAppend) => {
	const td = document.createElement("td");
	td.classList.add("count");
	td.textContent = element;
	toAppend.appendChild(td);
};

const handleClickToRenderNumbers = () => {
	const parentEven = qs(".row_even");
	const parentOdd = qs(".row_odd");
	const numbers = getRandomNumbers();

	numbers.forEach(num => (num % 2 === 0 ? createElement(num, parentEven) : createElement(num, parentOdd)));
};

button.addEventListener("click", handleClickToRenderNumbers);

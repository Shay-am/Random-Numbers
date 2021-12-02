import { getRandomNumbers, createDomElement, qs, sortArray, clearColumn } from "./javascript/helpers.js";

const handleClickToRenderNumbers = () => {
	const numbers = getRandomNumbers();
	const parentEven = qs(".row_even");
	const parentOdd = qs(".row_odd");
	clearColumn(parentEven);
	clearColumn(parentOdd);

	return numbers.forEach(num => (num % 2 === 0 ? createDomElement(num, parentEven) : createDomElement(num, parentOdd)));
};

const button = qs(".button");
button.addEventListener("click", handleClickToRenderNumbers);

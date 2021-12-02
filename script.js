import { getRandomNumbers, createDomElement, qs } from "./javascript/helpers.js";

const button = qs(".button");

const handleClickToRenderNumbers = () => {
	const numbers = getRandomNumbers();
	const parentEven = qs(".row_even");
	const parentOdd = qs(".row_odd");

	return numbers.forEach(num => (num % 2 === 0 ? createDomElement(num, parentEven) : createDomElement(num, parentOdd)));
};

button.addEventListener("click", handleClickToRenderNumbers);

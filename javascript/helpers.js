export const getNumber = () => Math.floor(Math.random() * 100) + 1;
export const sortArray = (a, b) => a - b;
export const qs = selector => document.querySelector(selector);

export const getRandomNumbers = () => {
	const result = [];
	function random() {
		result.push(getNumber());
		result.length === 20 ? result : random();
	}
	random();
	result.sort(sortArray);

	return result;
};

export const createDomElement = (element, toAppend) => {
	const td = document.createElement("td");
	td.classList.add("count");
	td.innerText = element;
	toAppend.append(td);
};

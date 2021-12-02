export const getNumber = () => Math.floor(Math.random() * 100) + 1;
export const sortArray = (a, b) => a - b;
export const qs = selector => document.querySelector(selector);
export const clearColumn = coll => (coll.textContent = "");

export const getRandomNumbers = () => {
	const result = [];

	function random() {
		let num = getNumber();

		result[result.length - 1] % 2 !== num % 2 ? result.push(num) : getNumber();

		return result.length === 20 ? result : random();
	}
	random();

	return result.sort(sortArray);
};

export const createDomElement = (element, toAppend) => {
	const td = document.createElement("td");
	td.classList.add("count");
	td.innerText = element;
	toAppend.append(td);
};

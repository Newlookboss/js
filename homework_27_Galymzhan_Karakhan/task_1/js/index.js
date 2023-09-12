document.addEventListener("DOMContentLoaded", function () {
	const container = document.getElementById("container");
	const addButton = document.getElementById("add-item-btn");

	addButton.addEventListener("click", function () {
		const newElement = document.createElement("div");
		newElement.className = "element";
		newElement.textContent = "Element";
		container.appendChild(newElement);
	});
});
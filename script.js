const btn = document.querySelector("#reset");
let pixels = 16;
let pixelWidth = 560/pixels;

btn.addEventListener("click", ()=> {
	pixels = prompt("Enter number of pixels per side");
	pixelWidth = 560/pixels;
	removeGrid();
	drawGrid();
});

function drawGrid() {
	const container = document.querySelector("#container");
	container.classList.add("container");
	const content = document.createElement("div");
	content.setAttribute("id", "content");
	container.appendChild(content);

	let i
	for (i = 0; i < pixels; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		content.appendChild(row);
		let j 
		for (j = 0; j < pixels; j ++) {
			const pixel = document.createElement("span");
			pixel.classList.add("pixel"); 
			pixel.style.width = `${pixelWidth}px`;
			pixel.style.height = `${pixelWidth}px`;
			pixel.addEventListener("mouseover", ()=> {pixel.classList.add("dark-pixel");});
			row.appendChild(pixel);
		}
	}
}

function removeGrid() {
	const grid = document.querySelector("#content");
	grid.remove()
}

drawGrid();

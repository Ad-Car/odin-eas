
const container = document.querySelector("#container");
//const container2 = document.createElement("div");
const body = document.querySelector("body");

function changeBackground(e) {
	console.log(e)
}

let i
for (i = 0; i < 16; i++) {
const row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

let j 
for (j = 0; j < 16; j ++) {
const pixel = document.createElement("span");
pixel.classList.add("pixel"); 
pixel.addEventListener("mouseover", ()=> {pixel.classList.add("dark-pixel");});
row.appendChild(pixel);
}
}



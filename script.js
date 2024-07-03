
const container = document.querySelector("#container");
//const container2 = document.createElement("div");
const body = document.querySelector("body");


let x
for (x = 0; x < 16; x++) {
const row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

let i 
for (i = 0; i < 16; i ++) {
const pixel = document.createElement("span");
pixel.classList.add("pixel"); 
row.appendChild(pixel);
}
}



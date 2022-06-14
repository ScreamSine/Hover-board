const container = document.querySelector("#board");
const SQUARES_NUMBER = 1269;
const colors = [
    "#FF00CC",
    "#FF6EFF",
    "#AD4379",
    "#FF007C",
    "#8D4E85",
    "#8D4E85",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);

    const index = getRandomColor();
    let color = colors[index];
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = color;
        square.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`;
    });

    square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = "#1d1d1d";
        square.style.boxShadow = `0 0 2px #000`;
    });
}

function getRandomColor() {
    let result = Math.floor(Math.random() * colors.length);
    return result;
}
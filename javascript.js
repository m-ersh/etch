











const squares = 256;

const container = document.createElement("div");
container.classList.add("container")
document.body.appendChild(container);

const background = (divs) => { 
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    divs.style.backgroundColor = "#" + randomColor;
};

function addSquares() {
    for (let i = 0; i < squares; i++) {
        const divs = document.createElement("div");
        divs.classList.add("divs");
        container.appendChild(divs);
        divs.addEventListener("mouseover", () => {
            background(divs);
        });
    }
};

addSquares();
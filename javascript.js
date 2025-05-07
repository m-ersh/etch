let squares = 256;

const button = document.createElement("button");
button.classList.add("buton");
button.textContent = "Reset";
document.body.appendChild(button);

const container = document.createElement("div");
container.classList.add("container")
document.body.appendChild(container);

const background = (divs) => { 
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    divs.style.backgroundColor = "#" + randomColor;
};


function findNearestSquare(totalSquares) {
    let root = Math.round(Math.sqrt(totalSquares));
    let nearestSquare = root * root;
    return nearestSquare;
};

function addSquares() {
    container.innerHTML = "";
    let nearestSquare = findNearestSquare(squares);
    let columns = Math.ceil(Math.sqrt(nearestSquare));
    let rows = Math.ceil(nearestSquare / columns);
    
    for (let i = 0; i < squares; i++) {
        const divs = document.createElement("div");
        divs.classList.add("divs");
        let squareSize = 100 / columns;
        divs.style.width = `${squareSize}%`;
        divs.style.height = `${squareSize}%`;
        container.appendChild(divs);
        divs.addEventListener("mouseover", () => {
            background(divs);
        });
    }
};


function changeSquares() { 
    button.addEventListener("click", () => {
        let newSquares = prompt("How many squares do you want?");
        let total = parseInt(newSquares);
        squares = total;
        addSquares();
    });
};


addSquares();
changeSquares();
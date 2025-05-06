











const squares = 256;




const container = document.createElement("div");
container.classList.add("container")
document.body.appendChild(container);


function addSquares() {
    for (let i = 0; i < squares; i++) {
        const divs = document.createElement("div");
        divs.classList.add("divs");
        container.appendChild(divs);
        divs.addEventListener("mouseover", function() {
            divs.style.backgroundColor = "red";
        });
    }
};

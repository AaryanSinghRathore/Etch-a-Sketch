const content = document.querySelector(".container");
const inputField = document.getElementById("numberInput");
const cre = document.querySelector(".create");
const mod = document.getElementById("modes");


createGrid();

cre.addEventListener("click", createGrid);

function createGrid() {
    
    const inputValue = inputField.value;

    content.innerHTML = "";


    for (let i = 1; i <= inputValue; i++) {
        const r = document.createElement("div");
        r.className = `row${i}`;
        r.style.display = "flex";
        content.appendChild(r);

        for (let j = 1; j <= inputValue; j++) {
            const n = document.createElement("div");
            const val = 576 / inputValue;
            n.style.width = `${val}px`;
            n.style.height = `${val}px`;
            n.className = "cell";
            n.style.opacity = "0";
            
            // Add mouseover event listener
            n.addEventListener("mouseover", () => applyMode(n));
            r.appendChild(n);

        }
    }
}

function applyMode(cell) {
    const mode = mod.value;
    
    
    if (mode === "black") {
        const co = cell.style.backgroundColor;
        cell.style.backgroundColor = "black";
        
        let va = parseFloat(window.getComputedStyle(cell).opacity);

        if(co != 'black') va = 0;
        va = va + 0.1; 
        if (va > 1) va = 1;
        cell.style.opacity=`${va}`;
    } else if (mode === "rgb") {
        cell.style.opacity=1;
        const randomColor = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
        cell.style.backgroundColor = randomColor;
    } else if (mode === "erase") {
        cell.style.opacity=1;
        cell.style.backgroundColor = "white";
    }
}

function randomValue() {
    return Math.floor(Math.random() * 256);
}
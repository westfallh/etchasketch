

const grid = document.getElementById('grid');

for(let i = 0; i < 32; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.background = "gray";
    grid.appendChild(newDiv);
}



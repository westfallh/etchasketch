const grid = document.getElementById('grid');
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
grid.style.justifyContent = 'center';
grid.style.width = '100%';
grid.style.height = '100vh';
grid.style.gap = '2px';
for(let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "50px";
    newDiv.style.height = "50px";
    newDiv.style.background = "white";
    grid.appendChild(newDiv);
    
    newDiv.addEventListener('mouseover', function() {
        newDiv.style.background = "black";
    })
    
}



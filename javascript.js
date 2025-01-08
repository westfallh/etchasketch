let size = parseInt(prompt('Enter initial grid size'), 10);


function createGrid(size) {
    const grid = document.getElementById('grid');
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    grid.style.justifyContent = 'center';
    grid.style.width = '800px';
    grid.style.height = '800px';
    grid.style.margin = 'auto';
    grid.style.border = '1px solid black';

    for(let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.width = "50px";
        newDiv.style.height = "50px";
        newDiv.style.background = "white";
        grid.appendChild(newDiv);
        
        newDiv.addEventListener('mouseover', function() {
            newDiv.style.background = "black";
        })
    }
}

createGrid(size);
const gridReset = document.getElementById('gridreset');

gridReset.addEventListener('click',  () => {
     let size = parseInt(prompt('Enter grid size: 1-100. (e.g. 4 for a 4x4 grid)', 16), 10);
        if (Number.isInteger(size) && size >= 1 && size <= 100){
            createGrid(size)
        } 
})



let size = 16;
let colorMode = "black";

function createGrid(size) {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    grid.style.justifyContent = 'center';
    const containerWidth = 800;
    const containerHeight = 800;
    grid.style.width = `${containerWidth}px`;
    grid.style.height = `${containerHeight}px`;

    grid.style.margin = 'auto';
    grid.style.border = '1px solid black';

    
    const squareSize = containerWidth / size;
        for(let i = 0; i < size * size; i++) {
            const newDiv = document.createElement("div");
            newDiv.style.width = `${squareSize}px`;
            newDiv.style.height = `${squareSize}px`
            newDiv.style.background = "white";
            grid.appendChild(newDiv);
            
            newDiv.addEventListener('mouseover', function() {
                if (colorMode === "black") {
                    newDiv.style.background = "black";
                } else if (colorMode === "random") {
                    newDiv.style.background = getRandomColor();
                }
            });
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color ='#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        const randomColor = document.getElementById('randomcolor');
        randomColor.addEventListener('click', () => {
            colorMode = "random";
        });
        
        const blackColor = document.getElementById('blackcolor');
        blackColor.addEventListener('click', () => {
            colorMode = "black";
        });
    }    


createGrid(size);
const gridReset = document.getElementById('gridreset');

gridReset.addEventListener('click',  () => {
     let newSize = parseInt(prompt('Enter grid size: 1-100. (e.g. 4 for a 4x4 grid)', 16), 10);
        if (Number.isInteger(size) && size >= 1 && size <= 99){
            size = newSize;
            createGrid(size);
        } else {
            alert('Invalid input! Please enter a number between 1 and 100.');
        }
});




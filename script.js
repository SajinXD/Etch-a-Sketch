const MAX_GRID_SIZE = 500;
let RAINBOW_MODE = false;
let SINGLECOLOR_MODE = "black";

function createGrid(size){
    let gridSize = MAX_GRID_SIZE / size;
    let container = document.querySelector('.container');
    container.innerHTML = "";
    let dimension = size * size;
    for(let j = 0; j < dimension; j++){
        let row = document.createElement('div');
        row.classList.add('gridSquare');
        row.style.height = `${gridSize}px`;
        row.style.width = `${gridSize}px`;
        row.style.backgroundColor = "white";
        container.appendChild(row);
    }
    document.querySelectorAll('.gridSquare').forEach(function(singleDiv){
    singleDiv.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = `${getRandomColor()}`;
    })
});
}

createGrid(64); //default grid-size.

function getRandomValue(x){
    return Math.floor(Math.random() * x);
}

function getRandomColor(){
    if(RAINBOW_MODE){
        return `rgb(${getRandomValue(256)}, ${getRandomValue(256)}, ${getRandomValue(256)})`;
    }else{
        return SINGLECOLOR_MODE;
    }
}


let resetBtn = document.querySelector('#reset');
let inputBtn = document.querySelector('#input');
let scolor = document.querySelector('#scolor');
let rainbow = document.querySelector('#rainbow');
let customizer = document.querySelector('#customizer');

resetBtn.addEventListener("click", (e)=>{
    document.querySelectorAll('.gridSquare').forEach((grid)=>{
        grid.style.backgroundColor = "white";
    })
})

inputBtn.addEventListener("click", (e)=>{
    let input = prompt("Select new grid from 1 to 100", 64);
    
    if(input !== null){
        let numbers = parseInt(input);
        if(!isNaN(numbers) && (numbers > 0 && numbers <= 100)){
            createGrid(numbers);
        } else {
            alert("Enter only number from 1 to 100");
        }
    }
})

rainbow.addEventListener('click', (e)=>{
    RAINBOW_MODE = true;
})

scolor.addEventListener('click', (e)=>{
    RAINBOW_MODE = false;
})

customizer.addEventListener('change', (e)=>{
    SINGLECOLOR_MODE = customizer.value;
})

document.querySelector(".date").innerHTML = new Date().getFullYear();
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
        row.dataset.interaction = 0;
        container.appendChild(row);
    }
    document.querySelectorAll('.gridSquare').forEach(function(singleDiv){
    singleDiv.addEventListener('mouseover', (e) =>{
        let currentCount = parseInt(e.target.dataset.interaction);
        currentCount++;
        e.target.dataset.interaction = currentCount;
        
        let opacity = currentCount / 10;
        if(opacity > 1) opacity = 1;
        
        let baseColor = getRandomColor();
        e.target.style.background = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), ${baseColor}`;
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
        grid.style.background = "white";
        grid.dataset.interaction = 0;
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
    scolor.classList.remove('pressed');
    rainbow.classList.add('pressed');
    RAINBOW_MODE = true;
})

scolor.addEventListener('click', (e)=>{
    rainbow.classList.remove('pressed');
    scolor.classList.add('pressed');
    RAINBOW_MODE = false;
})

customizer.addEventListener('change', (e)=>{
    SINGLECOLOR_MODE = customizer.value;
    
    // too many BUGs, 
    // this is to change the button accordingly with the type: color selected.
    // problems occurs when it is change into white / black colors ++ hover.


    // if(SINGLECOLOR_MODE.toLowerCase === "#ffffff"){
    //     scolor.setAttribute("style", "color: black; background-color: white;");
    // }else if(SINGLECOLOR_MODE.toLowerCase === "#000000"){
    //     scolor.setAttribute("style", "color: white; background-color: black;");
    // }
    // else{
    //     scolor.style.backgroundColor = SINGLECOLOR_MODE;
    // }
})

document.querySelector(".date").innerHTML = new Date().getFullYear();
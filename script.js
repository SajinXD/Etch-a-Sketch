const MAX_GRID_SIZE = 500;

function createGrid(size){
    let gridSize = MAX_GRID_SIZE / size;
    let container = document.querySelector('.container');
    let dimension = size * size;
    for(let j = 0; j < dimension; j++){
        let row = document.createElement('div');
        row.classList.add('gridSquare');
        row.style.height = `${gridSize}px`;
        row.style.width = `${gridSize}px`;
        container.appendChild(row);
    }
}

createGrid(64); //default grid-size.

document.querySelectorAll('.gridSquare').forEach(function(singleDiv){
    singleDiv.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = "black";
    })
});

document.querySelector('#input').addEventListener("click", (e)=>{
    let input = prompt("Select new grid from 0 to 100", 64);
    
    if(input !== null){
        let numbers = parseInt(input);
        if(!isNaN(numbers) && (!numbers < 0 && !numbers >= 100)){
            console.log(numbers);
        } else {
            alert("Enter only number from 0 to 100");
        }
    }
})
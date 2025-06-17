const container = document.querySelector('.container');


function createGrid(size){
    for(let i = 0; i < 64; i++){
        const div = document.createElement('div');
        div.classList.add('grid-square');
        container.appendChild(div);
    }
}

const gridSquare = document.querySelectorAll('.grid-square');
gridSquare.forEach(function(singleDiv){
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
            alert("Enter only from 0 to 100");
        }
    }
})


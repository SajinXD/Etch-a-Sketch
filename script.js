const container = document.querySelector('.container');

for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('grid-square');
    container.appendChild(div);
}

const gridSquare = document.querySelectorAll('.grid-square');
gridSquare.forEach(function(singleDiv){
    singleDiv.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = "black";
    })
});
let howMany = prompt('How many columns?');
//let width = '50px'
//let height = '50px'

const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add('basicSquare');
const button = document.querySelector('button');
square.addEventListener('click', transform);

addSquares(howMany);


  

function addSquares(howMany) {
    container.style = `grid-template-columns: repeat(${howMany}, 1fr); grid-template-rows: repeat(${howMany}, 1fr)`;

    for ( let i = 0; i < ( howMany * howMany ); i++ ) {
        container.appendChild(square.cloneNode(true));
    }
    
    document.querySelectorAll('.basicSquare').forEach(item => {item.addEventListener('mouseover', (event) => transform(item, event))});
}


function transform(item, event) {
    if ( event.buttons === 1 ) item.classList.add('transSquare');   // add class only when mouse button is pressed
}

function reset() {
    let howMany = prompt('How many columns?');
    document.querySelectorAll('.basicSquare').forEach(item => {item.classList.remove('transSquare')});
    addSquares(howMany);
}




button.addEventListener('click', reset)


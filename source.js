let howMany = 0;

//let width = '50px'
//let height = '50px'

const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add('basicSquare');
const button = document.querySelector('button');
square.addEventListener('click', transform);
button.addEventListener('click', reset);


howMany = input();

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
    howMany = input();
//    document.querySelectorAll('.basicSquare').forEach( (item) => { item.classList.remove('transSquare')});
    document.querySelectorAll('.basicSquare').forEach( (item) => { item.parentNode.removeChild(item)});
    addSquares(howMany);
}

function input() {
    let columns = Number(prompt('How many columns?'));
    if ( columns > 200 ) columns = 200;
    return columns;
}




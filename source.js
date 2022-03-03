let howMany = 0;

const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add('basicSquare');
/*square.setAttribute('style', 'background-color: rgb(255, 0, 0)');*/
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
    let type = document.getElementById('blabla').options.selectedIndex;

    switch (type) {
        case 0:
            if ( event.buttons === 1 ) item.classList.add('transSquare'); 
            break;
        case 1:
            if ( event.buttons === 1 ) item.style = `background-color: rgb(${random()}, ${random()}, ${random()})`;
            break;
        case 2:
            if ( event.buttons === 1 ) {
                if ( item.shade === undefined ) {
                    item.style = `background-color: rgb(225, 0, 0)`;
                    item.shade = 225;
                } else if ( item.shade > 0 ) {
                    item.shade -= 25;
                    item.style = `background-color: rgb(${item.shade}, 0, 0)`;
                }
             }
             break;             
    }
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

function random() {
    let randNum = Math.floor(Math.random()*255);
    return randNum;
}




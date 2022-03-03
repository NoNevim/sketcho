let basicColor = []
let changeColor = []
const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add('basicSquare');
square.setAttribute('style', `background-color: rgb(0, 255, 0)`);
document.querySelector('button').addEventListener('click', reset);
square.addEventListener('click', transform);
document.getElementById('grid').addEventListener('change', reset);

function addSquares(howMany) {
    container.style = `grid-template-columns: repeat(${howMany}, 1fr); grid-template-rows: repeat(${howMany}, 1fr)`;
    getColors()
    square.setAttribute('style', `background-color: rgb(${basicColor[0]}, ${basicColor[1]}, ${basicColor[2]})`);
    for ( let i = 0; i < ( howMany * howMany ); i++ ) {
        container.appendChild(square.cloneNode(true));
    }    
    document.querySelectorAll('.basicSquare').forEach(item => {item.addEventListener('mouseover', (event) => transform(item, event))});
}


function transform(item, event) {
    let type = document.getElementById('blabla').options.selectedIndex;

    switch (type) {
        case 0:
            if ( event.buttons === 1 ) {  
            getColors();  
            item.shade=10;  
            item.color0=changeColor[0];        
            item.color1=changeColor[1];          
            item.color2=changeColor[2];                   
            item.style = `background-color: rgb(${item.color0}, ${item.color1}, ${item.color2})`;
            }
            break;
        case 1:
            
            if ( event.buttons === 1 ) {
            item.shade=10;
            item.color0=random();
            item.color1=random();
            item.color2=random(); 
            item.style = `background-color: rgb(${item.color0}, ${item.color1}, ${item.color2})`;  
            }
            break;
        case 2:
            if ( event.buttons === 1 ) {
                if ( item.shade === undefined ) {
                    getColors();
                    item.shade=10;  
                    item.color0=changeColor[0];        
                    item.color1=changeColor[1];          
                    item.color2=changeColor[2];                   
                    item.style = `background-color: rgb(${item.color0}, ${item.color1}, ${item.color2})`;
                } else if ( item.shade > 0 ) {                    
                    item.color0 = ((item.color0)/item.shade)*(item.shade-1);
                    item.color1 = ((item.color1)/item.shade)*(item.shade-1);
                    item.color2 = ((item.color2)/item.shade)*(item.shade-1);                    
                    item.style = `background-color: rgb(${item.color0}, ${item.color1}, ${item.color2})`;
                    item.shade -= 1;
                }
             }
             break;             
    }
}

function reset() {
    howMany = document.getElementById('grid').value;
    document.querySelectorAll('.basicSquare').forEach( (item) => { item.parentNode.removeChild(item)});
    addSquares(howMany);
}

function random() {
    let randNum = Math.floor(Math.random()*255);
    return randNum;
}

function getColors() {
    basicColor[0] = document.getElementById('basicColor').value.slice(1,3);
    basicColor[1] = document.getElementById('basicColor').value.slice(3,5);
    basicColor[2] = document.getElementById('basicColor').value.slice(5,7);
    basicColor[0] = parseInt(basicColor[0],16);
    basicColor[1] = parseInt(basicColor[1],16);
    basicColor[2] = parseInt(basicColor[2],16);

    changeColor[0] = document.getElementById('changeColor').value.slice(1,3);
    changeColor[1] = document.getElementById('changeColor').value.slice(3,5);
    changeColor[2] = document.getElementById('changeColor').value.slice(5,7);
    changeColor[0] = parseInt(changeColor[0],16);
    changeColor[1] = parseInt(changeColor[1],16);
    changeColor[2] = parseInt(changeColor[2],16);
}



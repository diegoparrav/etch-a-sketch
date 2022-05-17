const mainContainer = document.querySelector('.mainContainer')
function addDivs(){
    for (let j=1; j < 17; j++){
        for (let i = 1; i < 17; i++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('gridElement')
            newDiv.setAttribute('grid-column-start', `${i}`)
            newDiv.setAttribute('grid-column-end', `${i+1}`)
            newDiv.setAttribute('grid-row-start',`${j}`)
            newDiv.addEventListener('mouseleave', function(){
                newDiv.classList.add('on')
            })
            mainContainer.appendChild(newDiv)}
            
    }
}
//addDivs();

let boolController = true;

const gridButton = document.querySelector('.button');
gridButton.addEventListener('click', () => {
        boolController = true;
        while (boolController) {
            let sideSquare = prompt('Select the size of the grid, maximum 100');
            sideSquare = +sideSquare;
            if ((sideSquare > 100) || (isNaN(sideSquare))) {
                alert('Please pick a number between 1 and 100');
                continue;
            } else {
                alert(`you have choosen a ${sideSquare}x${sideSquare} grid`);
                boolController = false;
            }
        }
    })
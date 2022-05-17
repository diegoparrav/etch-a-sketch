const mainContainer = document.querySelector('.mainContainer')
function addDivs(){
    for (let j=1; j < 17; j++){
        for (let i = 1; i < 17; i++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('gridElement', (`item${i}`))
            newDiv.setAttribute('grid-column-start', `${i}`)
            newDiv.setAttribute('grid-column-end', `${i+1}`)
            newDiv.setAttribute('grid-row-start',`${j}`)
            newDiv.addEventListener('mouseleave', function(){
                newDiv.classList.add('on')
            })
            mainContainer.appendChild(newDiv)}
            
    }
}
addDivs();

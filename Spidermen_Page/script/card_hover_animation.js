const card = document.querySelectorAll('.card')

function handleMouseEnter(){
    this.classList.add('card-hovered')  
    for (let i of card){
        i.style.display = 'none'
    } 
    const cardHovered = document.querySelector('.card-hovered')
    cardHovered.style.display = 'block'
}
function handleMouseLeave(){
    this.classList.remove('card-hovered')
    for (let i of card){
        i.style.display = 'inline-block'
    } 
}

function addEventListenerToCard(){

    for (let i of card){
        i.addEventListener('mouseenter',handleMouseEnter)
        i.addEventListener('mouseleave',handleMouseLeave)
    }
}

document.addEventListener("DOMContentLoaded",addEventListenerToCard,false)

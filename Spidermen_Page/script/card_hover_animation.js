const card = document.querySelectorAll('.card')
const button = document.querySelectorAll('.button_controller')

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

function selectCarouselItem(){
    for (let i of button){
        i.classList.remove('button_controller--active')
    }
    const carousel = document.querySelector('#carousel')
    const transform = carousel.style.transform
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    this.classList.add('button_controller--active')
    const rotateYDeg = -120 * (Number(this.id) - 1)
    const newTransform = transform.replace(rotateY[0],`rotateY(${rotateYDeg}deg)`)
    carousel.style.transform = newTransform
    rotateYDeg = -120 * (Number(this.id) - 1) 
    carousel.style.transform = newTransform
}

function addEventListenerToCard(){

    for (let i of card){
        i.addEventListener('mouseenter',handleMouseEnter)
        i.addEventListener('mouseleave',handleMouseLeave)
    }
}

function addEventListenerToButton(){
    for (let i of button){
        i.addEventListener('click',selectCarouselItem)
    }
}

document.addEventListener("DOMContentLoaded",addEventListenerToCard,false)
document.addEventListener("DOMContentLoaded",addEventListenerToButton,false)




window.alert('Feito com base em um vídeo do canal Mr.Web Designer')
window.alert('https://www.youtube.com/watch?v=MJUssi2c6Ls&t=529s')
let menuAtivado = false
let buscaAtivado = false
const main = document.getElementById('home')
let section = document.querySelectorAll('section')
let nav = document.querySelectorAll('header .link a')

setInterval(loading, 3000);
function loading(){
    const loader = document.getElementById('loader')
    loader.style.display = 'none'
}
function manipularMenu(){
    const menuMobile = document.getElementById('menuMobile')
    if(menuAtivado == false){
        menuMobile.style.display = 'block'
        menuAtivado = true
    }
    else{
        menuMobile.style.display = 'none'
        menuAtivado = false
    }
}
function search(){
    const searchArea = document.getElementById('searchArea')
    if(buscaAtivado == false){
        searchArea.style.transform = 'translateY(0px)'
        buscaAtivado = true

    }
    else{
        searchArea.style.transform = 'translateY(-1000px)'
        buscaAtivado = false
    }
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true
  });
 

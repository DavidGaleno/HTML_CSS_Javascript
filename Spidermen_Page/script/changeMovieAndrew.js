const button = document.querySelectorAll('.button_controller')
const video = document.querySelector('video')
const source = document.querySelector('source')
const image = document.querySelectorAll('.img_gallery')
const logo = document.querySelector('#logo > img')

function changeBackground(){
    if(this.id==1){
        video.load();
        source.src = '../videos/amazing-spiderman-2014-trailer.mp4'
        source.type = 'video/mp4'
         video.play();
         image[0].src = '../imagens/Andrew Garfield/filme01/image-01.png'
         image[1].src = '../imagens/Andrew Garfield/filme01/image-02.png'
         image[2].src = '../imagens/Andrew Garfield/filme01/image-03.png'
         logo.src= '../imagens/Andrew Garfield/filme01/logo.png'
     }
    else if(this.id==2){
   video.load();
   source.src = '../videos/amazing-spiderman2-2014-trailer.mp4'
   source.type = 'video/mp4'
    video.play();
    image[0].src = '../imagens/Andrew Garfield/filme02/image-01.png'
    image[1].src = '../imagens/Andrew Garfield/filme02/image-02.png'
    image[2].src = '../imagens/Andrew Garfield/filme02/image-03.png'
    logo.src= '../imagens/Andrew Garfield/filme02/logo.png'
}
}

function addEventListenerToButton(){
    for(i of button){
        i.addEventListener('click',changeBackground)
    }
}

document.addEventListener('DOMContentLoaded',addEventListenerToButton,false)


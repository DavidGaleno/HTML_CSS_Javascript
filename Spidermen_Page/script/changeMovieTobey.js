const button = document.querySelectorAll('.button_controller')
const video = document.querySelector('video')
const source = document.querySelector('source')
const image = document.querySelectorAll('.img_gallery')
const logo = document.querySelector('#logo > img')

function changeBackground(){
    if(this.id==1){
        video.load();
        source.src = '../videos/spiderman-2002-trailer.mp4'
        source.type = 'video/mp4'
         video.play();
         image[0].src = '../imagens/Tobey_Maguire/filme01/image-01.png'
         image[1].src = '../imagens/Tobey_Maguire/filme01/image-02.png'
         image[2].src = '../imagens/Tobey_Maguire/filme01/image-03.png'
         logo.src= '../imagens/Tobey_Maguire/filme01/logo1.png'
     }
    else if(this.id==2){
   video.load();
   source.src = '../videos/spiderman2-2004-trailer.mp4'
   source.type = 'video/mp4'
    video.play();
    image[0].src = '../imagens/Tobey_Maguire/filme02/image-01.png'
    image[1].src = '../imagens/Tobey_Maguire/filme02/image-02.png'
    image[2].src = '../imagens/Tobey_Maguire/filme02/image-03.png'
    logo.src= '../imagens/Tobey_Maguire/filme02/logo.png'
}
    else{
            source.src = '../videos/spiderman3-2007-trailer.mp4'
            source.type = 'video/mp4'
            video.load();
             video.play();
             image[0].src = '../imagens/Tobey_Maguire/filme03/image-01.png'
             image[1].src = '../imagens/Tobey_Maguire/filme03/image-02.png'
             image[2].src = '../imagens/Tobey_Maguire/filme03/image-03.png'
             logo.src= '../imagens/Tobey_Maguire/filme03/logo.png'
    }
}

function addEventListenerToButton(){
    for(i of button){
        i.addEventListener('click',changeBackground)
    }
}

document.addEventListener('DOMContentLoaded',addEventListenerToButton,false)


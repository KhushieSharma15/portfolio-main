const booking=document.querySelector('.booking');
booking.addEventListener('click',()=>{
    document.querySelector('.modal').classList.add('modal-active');
    document.querySelector('.overlay').classList.add('overlay-active');

});
const menu=document.querySelector('#menu');
menu.addEventListener('click',()=>{
    document.querySelector('.menu-modal').classList.add('menu-modal-active');
    document.querySelector('.overlay').classList.add('overlay-active');

});

const close=document.querySelector('.close-modal');
close.addEventListener('click',()=>{
    document.querySelector('.modal').classList.remove('modal-active');
    document.querySelector('.overlay').classList.remove('overlay-active');
});

const close_menu=document.querySelector('.menu-close-modal');
close_menu.addEventListener('click',()=>{
    document.querySelector('.menu-modal').classList.remove('menu-modal-active');
    document.querySelector('.overlay').classList.remove('overlay-active');
});

const overlay=document.querySelector('.overlay');
overlay.addEventListener('click',()=>{
    document.querySelector('.modal').classList.remove('modal-active');
    document.querySelector('.overlay').classList.remove('overlay-active');
    document.querySelector('.menu-modal').classList.remove('menu-modal-active');
})

const reservation=document.querySelector('#Reservation');
reservation.addEventListener('click',()=>{
    document.querySelector('.modal').classList.add('modal-active');
    document.querySelector('.overlay').classList.add('overlay-active');
})

//carousel
const carouselSlide=document.querySelector('.carousel-inner');
const carouselImage=document.querySelectorAll('.carousel-inner img');

const prevBtn=document.querySelector('.carousel-control-prev');
const nextBtn=document.querySelector('.carousel-control-next');

let counter=1;
const size= carouselImage[0].clientWidth;

carouselSlide.style.transform='translateX('+(-size*counter)+'px';

nextBtn.addEventListener('click',()=>{
    if(counter>=carouselImage.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translateX('+(-size*counter)+'px';
});

prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform='translateX('+(-size*counter)+'px';
});

carouselSlide.addEventListener('transitionend',()=>{
 if(carouselImage[counter].id=="lastClone"){
   carouselSlide.style.transition="none";
   counter=carouselImage.length-2;
   carouselSlide.style.transform='translateX('+(-size*counter)+'px';

}
 if(carouselImage[counter].id=="firstClone"){
    carouselSlide.style.transition="none";
    counter=carouselImage.length-counter;
    carouselSlide.style.transform='translateX('+(-size*counter)+'px';
}
});

const darkMode=document.querySelector('.dark-mode-btn');
darkMode.addEventListener('click',()=>{
    console.log(document.querySelector('.main-content').classList)
    if(document.querySelector('.main-content').classList.length==1){
    document.querySelector('.main-content').classList.add('dark-mode');
    document.querySelector('.dark-mode-btn').innerHTML="Normal Mode";
    }
    else{
        document.querySelector('.main-content').classList.remove('dark-mode');
        document.querySelector('.dark-mode-btn').innerHTML="Dark Mode";
    }

    console.log('clicked');
   
});


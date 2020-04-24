var slideIndex = 1;
showSlides(slideIndex);
//Это для переключения слайдов
let prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

    prev.addEventListener('click',()=>{
        plusSlides(-1);
    })
    next.addEventListener('click',()=>{
        plusSlides(1);
    })

//------------------------------------------
let dots = document.querySelector('.dots'),
    dot = document.querySelectorAll('.dot');

dots.addEventListener('click', (e)=>{
   dot.forEach((elem,i)=>{
    if(e.target==elem){
        currentSlide(i+1);
    }
   });
})
//------------------------------------------
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i < dots.length; i++){
        if(dots[i].classList.contains('active')){
            dots[i].classList.remove('active');
        }
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add('active');
}

//------------------Тёмная тема--------------------
let checkboxDark = document.querySelector('#dark');
let darkcss;

checkboxDark.addEventListener('click',()=>{
    if(checkboxDark.checked){
        darkcss = document.createElement('link');
        darkcss.rel = 'stylesheet';
        darkcss.href = 'css/style-dark.css';
        let head = document.querySelector('head');
        head.append(darkcss);
        console.log(darkcss);
    }
    else{
        darkcss.remove();
    }
})
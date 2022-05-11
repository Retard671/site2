// СЛАЙДЕР ВТОРОЙ СЕКЦИИ
let background = ["url(assets/img/2firstscreen/background0.png) center center/ cover no-repeat", "url(assets/img/2firstscreen/background1.png) center center/ cover no-repeat", "url(assets/img/2firstscreen/background2.png) center center/ cover no-repeat", "url(assets/img/2firstscreen/background3.png) center center/ cover no-repeat", "url(assets/img/2firstscreen/background4.png) center center/ cover no-repeat"]

let fscroll__circles = document.querySelectorAll('.fscroll__circle');
for (let i = 0; i < fscroll__circles.length; i++) {
    fscroll__circles[i].addEventListener('click',  function() {
        console.log('нажатие на круг')
        document.querySelector(".fscroll__circle-active").classList.remove('fscroll__circle-active');
        this.classList.add('fscroll__circle-active');
        document.querySelector(".fscreen").style.background = background[i];
    });
}


// предыдущий слайд
document.querySelector('.fscroll__left').addEventListener('click',  function() {
    let active = document.querySelector(".fscroll__circle-active")
    for (let i = 0; i < fscroll__circles.length; i++) {
        if (fscroll__circles[i] == active){
            if (i == 0){
                document.querySelector(".fscroll__circle-active").classList.remove('fscroll__circle-active');
                fscroll__circles[4].classList.add('fscroll__circle-active');
                document.querySelector(".fscreen").style.background = background[4];
            } else{
                document.querySelector(".fscroll__circle-active").classList.remove('fscroll__circle-active');
                fscroll__circles[i-1].classList.add('fscroll__circle-active');
                document.querySelector(".fscreen").style.background = background[i-1];
            }
            // console.log('this')
        }
    }    
    console.log('предыдущий слайд')
});

// следующий слайд
document.querySelector('.fscroll__right').addEventListener('click',  function() {
    let active = document.querySelector(".fscroll__circle-active")
    for (let i = 0; i < fscroll__circles.length; i++) {
        if (fscroll__circles[i] == active){
            if (i == 4){
                document.querySelector(".fscroll__circle-active").classList.remove('fscroll__circle-active');
                fscroll__circles[0].classList.add('fscroll__circle-active');
                document.querySelector(".fscreen").style.background = background[0];
            } else{
                document.querySelector(".fscroll__circle-active").classList.remove('fscroll__circle-active');
                fscroll__circles[i+1].classList.add('fscroll__circle-active');
                document.querySelector(".fscreen").style.background = background[i+1];
            }
            // console.log('this')
        }
    }    
    console.log('следующий слайд')
});

// СЛАЙДЕР ВТОРОЙ СЕКЦИИ




// СЛАЙДЕР ЧЕТВЕРТОЙ СЕКЦИИ
let slides = document.querySelectorAll('.slide');
let slindicators = document.querySelectorAll('.slindicator');
for (let i = 0; i < slindicators.length; i++) {
    slindicators[i].addEventListener('click',  function() {
        console.log('нажатие на переключатели')
        document.querySelector(".slindicator-active").classList.remove('slindicator-active');
        this.classList.add('slindicator-active');
        document.querySelector(".slide-active").classList.remove('slide-active');
        slides[i].classList.add('slide-active');
        // document.querySelector(".fscreen").style.background = background[i];
    });
}


// предыдущий слайд
document.querySelector('.slider4_prev').addEventListener('click',  function() {
    let active = document.querySelector(".slindicator-active")
    for (let i = 0; i < slindicators.length; i++) {
        if (slindicators[i] == active){
            if (i == 0){
                document.querySelector(".slindicator-active").classList.remove('slindicator-active');
                slindicators[5].classList.add('slindicator-active');
                document.querySelector(".slide-active").classList.remove('slide-active');
                slides[5].classList.add('slide-active');
            } else{
                document.querySelector(".slindicator-active").classList.remove('slindicator-active');
                slindicators[i-1].classList.add('slindicator-active');
                document.querySelector(".slide-active").classList.remove('slide-active');
                slides[i-1].classList.add('slide-active');
            }
            // console.log('this')
        }
    }    
    console.log('предыдущий слайд')
});


// следующий слайд
document.querySelector('.slider4_next').addEventListener('click',  function() {
    let active = document.querySelector(".slindicator-active")
    for (let i = 0; i < slindicators.length; i++) {
        if (slindicators[i] == active){
            if (i == 5){
                document.querySelector(".slindicator-active").classList.remove('slindicator-active');
                slindicators[0].classList.add('slindicator-active');
                document.querySelector(".slide-active").classList.remove('slide-active');
                slides[0].classList.add('slide-active');
            } else{
                document.querySelector(".slindicator-active").classList.remove('slindicator-active');
                slindicators[i+1].classList.add('slindicator-active');
                document.querySelector(".slide-active").classList.remove('slide-active');
                slides[i+1].classList.add('slide-active');
            }
            // console.log('this')
        }
    }    
    console.log('следующий слайд')
});

// СЛАЙДЕР ЧЕТВЕРТОЙ СЕКЦИИ


// МОДАЛЬНОЕ ОКНО

let btnModal = document.querySelectorAll('.btn-open_modal');
for (let i = 0; i < btnModal.length; i++) {
    btnModal[i].addEventListener('click',  function() {
        document.querySelector(".overlay").style.display = "block";
        document.querySelector(".modal").style.display = "block";
        console.log('нажатие на переключатели')
    });
}

document.querySelector('.modal__close').addEventListener('click',  function() {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".modal").style.display = "none";
        console.log('акрытие окна')
    });

// ẩn hiện menu
var btn__icon__menu = document.querySelector('.icon__menu')
var menu = document.querySelector('.header__menu');
var dem = 0;

btn__icon__menu.addEventListener('click', function(){
    if (dem == 0){
        btn__icon__menu.classList.add('collapsed');
        menu.style.display = 'flex';
        menu.style.animation = 'hienthimenu 0.3s ease-in-out';
        setTimeout(function () {
            menu.style.animation = 'none';
        }, 300)     
        dem = 1;
    }
    else if (dem == 1) {
        btn__icon__menu.classList.remove('collapsed');
        menu.style.animation = 'anmenu 0.3s ease-in-out';
        menu.style.display = 'flex';
        setTimeout(function () {
            menu.style.display = 'none';
            menu.style.animation = 'none';
        }, 300)
        dem = 0;
    }
})

// nút back-to-top
window.onscroll = function() {scrollFunction()};
var timeOut_scroll = setTimeout(function(){
    document.getElementById("btn-backtop").style.display = "none";
}, 200);
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("btn-backtop").style.display = "block";
        document.getElementById("btn-backtop").style.opacity = "1";
    } else {
        clearTimeout(timeOut_scroll);
        document.getElementById("btn-backtop").style.opacity = "0";
        setTimeout(function(){
            document.getElementById("btn-backtop").style.display = "none";
        }, 200);
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//banner slideshow
var btn_nextslide = document.querySelector(".btn-nextslide");
var btn_prevslide = document.querySelector(".btn-preslide");
var slides = document.querySelectorAll('.banner-slides');
var slideShows = document.querySelectorAll('.banner-slideshow');
var banner = document.querySelectorAll('#banner');
var slide_img = document.querySelectorAll('.slide-img');


var wapper = document.querySelector('.wapper');
let widthWapper = wapper.offsetWidth;

var slideCurrent = 0;
slideShow(0, window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
slides[0].style.display = 'flex';
document.addEventListener('DOMContentLoaded', function(){

    window.addEventListener('resize', function(){
        var widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        slideShow(slideCurrent, widthWindow);
        const widthWappernew = wapper.offsetWidth;
        if (widthWapper != widthWappernew){
            widthWapper = widthWappernew;
            changeSlideReview(widthWapper);
        }
    })
})
let count = 0;
function slideShow(slideCurrent, widthSlideandMargin){
    var widthAllSlides = widthSlideandMargin * slides.length;

    slideShows[0].style.width = `${widthAllSlides}px`;
    slides.forEach(element => {
        element.style.margin = `0 ${30}px`;
        element.style.width = `${widthSlideandMargin - 60}px`;
    })

    let spacing = widthAllSlides - widthSlideandMargin;
    btn_nextslide.addEventListener('click',() =>{
        if (count >=  spacing){
            count = 0;
            slideCurrent = 0;
            slides[slides.length - 1].style.display = 'none';
            slides[slides.length - 1].classList.remove('animate__fadeInRightBig');
        }
        else{
            count += widthSlideandMargin;
            slideCurrent += 1;
            slides[slideCurrent - 1].style.display = 'none';
            slides[slideCurrent - 1].classList.remove('animate__fadeInRightBig');
        }
        slides[slideCurrent].classList.add('animate__fadeInRightBig');
        // console.log(count);
        slides[slideCurrent].style.display = 'flex';
        // console.log(slideCurrent);
    })
    btn_prevslide.addEventListener('click',() =>{
        if (count <=  0){
            count = spacing;
            slideCurrent = slides.length - 1;
            slides[0].style.display = 'none';
            slides[0].classList.remove('animate__fadeInLeftBig');
        }
        else{
            count -= widthSlideandMargin;
            slideCurrent -= 1;
            slides[slideCurrent + 1].style.display = 'none';
            slides[slideCurrent + 1].classList.remove('animate__fadeInLeftBig');
        }
        slides[slideCurrent].classList.add('animate__fadeInLeftBig');
        // console.log(count);
        slides[slideCurrent].style.display = 'flex';
        // console.log(slideCurrent);
    })
    let isDragStart1 = false, prevPageX1, prevScrollLeft1, positionCurrent1 = 0;
const dragStart1 =  (e) => {
    isDragStart1 = true;
    prevPageX1 = e.pageX;
    prevScrollLeft1 = slideShows[0].scrollLeft;
    slideShows[0].classList.add('dragging');
}

const dragging1 = (e) => {
    if (!isDragStart1) return;
    e.preventDefault();
    let positionDiff1 = e.pageX - prevPageX1;
    slideShows[0].style.transform = 'translateX(' + (-positionCurrent1 + positionDiff1) + 'px)';
}

const dragEnd1 = (e) => {
    let positionDiff1 = e.pageX - prevPageX1;
    isDragStart1 = false;
    slideShows[0].classList.remove('dragging');
    slideShows[0].style.transform = 'translateX(0px)';
    if (positionDiff1 < 0){
        if (count >=  spacing){
            count = 0;
            slideCurrent = 0;
            slides[slides.length - 1].style.display = 'none';
            slides[slides.length - 1].classList.remove('animate__fadeInRightBig');
        }
        else{
            count += widthSlideandMargin;
            slideCurrent += 1;
            slides[slideCurrent - 1].style.display = 'none';
            slides[slideCurrent - 1].classList.remove('animate__fadeInRightBig');
        }
        slides[slideCurrent].classList.add('animate__fadeInRightBig');
        // console.log(count);
        slides[slideCurrent].style.display = 'flex';
        // console.log(slideCurrent);
    }
    else if (positionDiff1 > 0){
        if (count <=  0){
            count = spacing;
            slideCurrent = slides.length - 1;
            slides[0].style.display = 'none';
            slides[0].classList.remove('animate__fadeInLeftBig');
        }
        else{
            count -= widthSlideandMargin;
            slideCurrent -= 1;
            slides[slideCurrent + 1].style.display = 'none';
            slides[slideCurrent + 1].classList.remove('animate__fadeInLeftBig');
        }
        slides[slideCurrent].classList.add('animate__fadeInLeftBig');
        // console.log(count);
        slides[slideCurrent].style.display = 'flex';
        // console.log(slideCurrent);
    }
}

slideShows[0].addEventListener('mousedown', dragStart1);
slideShows[0].addEventListener('mousemove', dragging1);
slideShows[0].addEventListener('mouseup', dragEnd1);
}



//count up
var listCounter = document.querySelectorAll('.counter');
var features = document.querySelector('#features');
var targets = [];
listCounter.forEach(ell => {
    targets.push(parseInt(ell.innerHTML));
})

function countup(el, id){
    var count_current= 0;
    var time = 400;
    var step = targets[id]/time;

    let counting = setInterval(() => {
        count_current += step;
        if (count_current > targets[id]){
            clearInterval(counting);
            el.innerHTML = targets[id];
        }
        else{
            el.innerHTML = Math.round(count_current);
        }
    }, 1);
}

var functionCount = function(){
    let id = 0;
    listCounter.forEach(ell => {
        countup(ell, id);
        id++;
    })
}


const obsever = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        functionCount();
    })
})
obsever.observe(features)

// slider infinite loop
/*
    ý tưởng: cho các slide cloned và 2 slide hiển thị
*/
const causolo = document.querySelector('.causolo');
const review_slides = document.querySelectorAll('.slide-item');
let slideNow = 2;
var timeOut_slide = setTimeout(()=>{
    causolo.style.transition = 'all 0s ease';
    causolo.style.transform = 'translateX('+(-positionCurrent )+'px)';
}, 1200);

// khởi tạo slide
function clone() {
    
    for (let i = review_slides.length - 1; i >= 0; i--) {
        slideClone = review_slides[i].cloneNode(true);
        slideClone.classList.add('cloned1');
        causolo.insertBefore(slideClone, causolo.firstChild);
    }
    review_slides.forEach(sli => {
        slideClone = sli.cloneNode(true);
        slideClone.classList.add('cloned');
        causolo.appendChild(slideClone);
    })
}

var makeSlideReview = function (widthWapper){
    causolo.style.width = widthWapper*review_slides.length*(review_slides.length+1) + 'px';
    review_slides.forEach(sli => {
        sli.style.margin = '0 10px';
        sli.style.width = (widthWapper - 20) + 'px';
    })
    clone();
}

var changeSlideReview = function(widthWapper){
    causolo.style.width = widthWapper*review_slides.length*(review_slides.length+1) + 'px';
    const listSlides = document.querySelectorAll('.slide-item');
    listSlides.forEach(sli => {
        sli.style.width = (widthWapper - 20) + 'px';
    })
}


makeSlideReview(widthWapper);

const review_slidess = document.querySelectorAll('.slide-item');
//kéo thả cho slide chạy
let isDragStart = false, prevPageX, prevScrollLeft, positionCurrent = widthWapper*2;
const dragStart = (e)=>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = causolo.scrollLeft;
}

causolo.style.transform = 'translateX('+(-positionCurrent)+'px)';


const dragging = (e)=>{
    if (!isDragStart) return;
    clearTimeout(timeOut_slide);
    e.preventDefault();
    causolo.classList.add('dragging');
    let positionDiff = e.pageX - prevPageX;
    console.log(positionDiff);
    causolo.style.transform = 'translateX(' + (-positionCurrent - positionDiff) + 'px)';
}
const dragEnd = (e)=>{
    let positionDiff = e.pageX - prevPageX;
    isDragStart = false;
    causolo.classList.remove('dragging');
    if (positionDiff < 0){
        causolo.style.transition = 'all 1.2s ease';
        causolo.style.transform = 'translateX(' + (-positionCurrent + widthWapper) +'px)';
        slideNow += 1;
        if (slideNow > 3){
            slideNow = 2;
        }
        positionCurrent = widthWapper*(slideNow - 1);
        timeOut_slide;
    }
    else if (positionDiff > 0){
        causolo.style.transition = '1.2s ease-in-out';
        causolo.style.transform = 'translateX(' + (-positionCurrent - widthWapper) +'px)';
        slideNow -= 1;
        if (slideNow < 2){
            slideNow = 3;
        }
        positionCurrent = widthWapper*(slideNow - 1);
        timeOut_slide;
    }
}


causolo.addEventListener('mousedown', dragStart);
causolo.addEventListener('mousemove', dragging);
causolo.addEventListener('mouseup', dragEnd);

// set button slide
const button_pre = document.querySelector('.pre-slide');
const button_next = document.querySelector('.next-slide');

button_next.addEventListener('click', () => {
    causolo.style.transition = '1.2s ease-in-out';
        causolo.style.transform = 'translateX(' + (-positionCurrent - widthWapper) +'px)';
        slideNow -= 1;
        if (slideNow < 2){
            slideNow = 3;
        }
        positionCurrent = widthWapper*(slideNow - 1);
        setTimeout(()=>{
            causolo.style.transition = 'all 0s ease';
            causolo.style.transform = 'translateX('+(-positionCurrent )+'px)';
        }, 1200);
})
button_pre.addEventListener('click', ()=>{
    causolo.style.transition = 'all 1.2s ease';
        causolo.style.transform = 'translateX(' + (-positionCurrent + widthWapper) +'px)';
        slideNow += 1;
        if (slideNow > 3){
            slideNow = 2;
        }
        positionCurrent = widthWapper*(slideNow - 1);
        setTimeout(()=>{
            causolo.style.transition = 'all 0s ease';
            causolo.style.transform = 'translateX('+(-positionCurrent )+'px)';
        }, 1200);
})




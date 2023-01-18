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
        clearTimeout(timeOut_scroll)
        document.getElementById("btn-backtop").style.opacity = "0";
        timeOut_scroll
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// $(window).scroll(function() {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass('back-to-top');
//     } else {
//         btn.removeClass('back-to-top');
//     }
// });

// btn.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, '1000');
// });



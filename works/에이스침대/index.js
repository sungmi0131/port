
const header = document.querySelector('header'); // header를 변수로
const navs = document.querySelectorAll('.main-menu'); // .main-menu를 변수로 + 2개이상이라 All

navs.forEach((nav) => { // .main-menu가 2개 이상이라 forEach
    nav.addEventListener('mouseenter', function () { // mouseenter Event
        header.classList.add('on'); // header에 class 추가
    })
    nav.addEventListener('mouseleave', function () { // mouseleave Event
        header.classList.remove('on'); // header에 class 제거
    })
});
window.addEventListener('wheel', function (event) {
    let delta = event.deltaY
    // console.log(delta);
    if (delta > 0) {
        header.classList.add('hide')
    } else if (delta < 0) {
        header.classList.remove('hide')
    }


    let currentScroll = $(this).scrollTop()
    // console.log(currentScroll);
    // if(currentScroll == 0){

    // }
})

var swiper22 = new Swiper(".mySwiper2", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


var swiper = new Swiper(".mySwiper1", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});
const prevs = document.querySelectorAll('.prev');
const nexts = document.querySelectorAll('.next');

prevs.forEach((prev) => {
    prev.addEventListener('mouseover', function () {
        this.querySelector('path').setAttribute('d', "M 40 10 Q 10 65 40 140");
    });
    prev.addEventListener('mouseout', function () {
        this.querySelector('path').setAttribute('d', "M 40 10 Q 40 65 40 140");
    });
});

nexts.forEach((next) => {
    next.addEventListener('mouseover', function () {
        this.querySelector('path').setAttribute('d', "M 10 10 Q 40 65 10 140");
    });
    next.addEventListener('mouseout', function () {
        this.querySelector('path').setAttribute('d', "M 10 10 Q 10 65 10 140");
    });
});



// var swiper3 = new Swiper(".sec2-Swiper", {
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".sec2-Swiper2", {
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//         swiper: swiper,
//     },
// });


let sec2Total = $('.tab-list li').length; // 출력 4

let spans = '';
for (let i = 0; i < sec2Total; i++) {
    spans += '<span></span>';
}
$('.sec2-pagination').append(spans);
$('.sec2-pagination').find('span:first').addClass('on');
$('.sec2-pagination').find('span').click(function () {
    // 현재 슬라이드 표시
    $('.sec2-pagination span').removeClass('on')
    $(this).addClass('on')

    // 콘텐츠 이동
    let idx = $(this).index();
    $('.sec2-video .video').stop().animate({
        left: idx * -100 + '%'
    });
    $('.sec2-desc .desc').stop().animate({
        left: idx * -100 + '%'
    });
})



$('.tab-list li').click(function (e) {
    e.preventDefault()
    let idx = $(this).index()
    $('.tab-list li').removeClass('on')
    $(this).addClass('on')
    $('.video').animate({ 'left': idx * -100 + '%' })
    $('.desc li').removeClass('on')
    $('.desc li').eq(idx).addClass('on')
});



// $('.tab-li li').click(function (e) {
//     e.preventDefault()
//     let idx = $(this).index()
//     $('.tab').removeClass('on')
//     $('.tab').eq(idx).addClass('on')

//     $('.tab-li li a').removeClass('on')
//     $(this).find('a').addClass('on')

// })

//SEC3//
$('.tab-li li a').click(function (e) {
    e.preventDefault()
    $('.tab-li li a').removeClass('on')
    $(this).addClass('on')
    let href = $(this).attr('href')
    $('.tab').removeClass('on')
    $(href).addClass('on')
})
$('.sec3-item li').click(function (e) {
    e.preventDefault()
})

var swiper6 = new Swiper(".sec3-Swiper1", {
    spaceBetween: 30,
    // loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});
var swiper7 = new Swiper(".sec3-Swiper2", {
    centeredSlides: true,
    spaceBetween: 30,
    // loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});




//sec4//

$('.sec4-list li').click(function (e) {
    e.preventDefault()
    let idx = $(this).index()
    $('.sec4-list li').removeClass('on')
    $(this).addClass('on')
    $('.image').animate({ 'left': idx * -100 + '%' })
})


var sec4Swiper = new Swiper(".sec4-img", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
})

//sec5//

var swiper8 = new Swiper(".sec5-Swiper", {
  
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
                rows: 4,
            },
        },
        768: {
            slidesPerView: 3,

            grid: {
                rows: 3,
            },
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            grid: {
                rows: 2,
            },
        },
    }
});

$('.right-btn').click(function () {
    $('.left-box').animate({ right: '0%' },300)
})

$('.close-map-btn').click(function () {
    $('.left-box').animate({ right: '-100%' },300)
})

$('.main-left').click(function () {
    $('.sub-left').slideUp()
    $(this).find('.sub-left').slideDown()
})


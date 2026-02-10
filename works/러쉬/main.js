
$('li.nav_mn').mouseenter(function () {
    $(this).find('ul.nav_2').stop().slideDown()
})

$('li.nav_mn').mouseleave(function () {
    $(this).find('ul.nav_2').stop().slideUp()
})

$('.nav_open').on('click', function () {
    $('body').addClass('menu_open');
    $('.total_menu').addClass('show');
});

$('.nav_close').on('click', function () {
    $('body').removeClass('menu_open');
    $('.total_menu').removeClass('show');
});



const visual_swiper = new Swiper('.main .swiper', { /* 팝업을 감싼는 요소의 class명 */
    spaceBetween: 30,
    mousewheel: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});


var custom_swiper = new Swiper(".custom .mySwiper", {
    effect: "cards",
    grabCursor: true,
});

const gallery_swiper = new Swiper('.gallery .swiper', {
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1260: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
});

const intro_swiper = new Swiper('.introduce .swiper', {
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        1260: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
});
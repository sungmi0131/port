const sections = document.querySelectorAll('section')
const footer = document.querySelector('footer')
const sectLast = sections[sections.length - 1]
const sectLastTop = sectLast.offsetTop
// alert(sectLastTop)
// console.log(sections)


sections.forEach((sect, i) => {

    sect.addEventListener('wheel', function (e) {
        e.preventDefault()
        let delta = e.deltaY

        if (delta < 0 && i === 0) {
            return
        } else if (delta > 0 && i === sections.length - 1) {
            footer.scrollIntoView({ behavior: 'smooth' })
            return
        }

        let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
        if (secTop) {
            let targetSecTop = secTop.offsetTop
            window.scrollTo({
                top: targetSecTop,
                behavior: 'smooth'
            })
        }
    })
})

window.addEventListener('wheel', function (e) {
    if (e.deltaY < 0 && window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        e.preventDefault()
        window.scrollTo({ top: sectLastTop, behavior: 'smooth' })
    }
})


//nav
$('li.main-mn').mouseenter(function () {
    $(this).find('ul.sub-mn').stop().slideDown()
})

$('li.main-mn').mouseleave(function () {
    $(this).find('ul.sub-mn').stop().slideUp()
})

$('.util-mn').click(function () {
    $('.sitemap-box').animate({ 'right': '0' })

})
$('.close-map-btn').click(function () {
    $('.sitemap-box').animate({ 'right': '-100%' })
})


// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     effect: "fade",
//     speed: 3000,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
// });


//sec1
gsap.set('.bg > div', { opacity: 0 });
gsap.registerEffect({
    name: 'textEffect',
    extendTimeline: true,
    defaults: {
        x: 20,
        y: -20,

    },
    effect: (target, { x, y }) => {
        const { chars } = new SplitText(target, { type: 'chars' });
        const index = target[0].dataset.index;//인덱스 값읽어들인다
        const tl = gsap.timeline();

        tl.from(chars, { x: x, opacity: 0, filter: 'blur(5px)', stagger: 0.1 })
            .to(`.bg > div:nth-child(${index})`, { opacity: 1 }, 0)
            .to(chars, { delay: 3, opacity: 0, y: y, stagger: 0.05 })
        //   .to(`.bg > div:nth-child(${index})`, { opacity: 0 },2)  
        return tl;
    }
});

function textAnimation() {
    const animation = gsap.timeline({
        repeat: -1
    });
    animation.textEffect('.slide1')
        .textEffect('.slide2')
        .textEffect('.slide3')
        .textEffect('.slide4')
        .textEffect('.slide5')
        .textEffect('.slide6')
        .textEffect('.slide7');
}

textAnimation();




//sec3
const contentSwiper = new Swiper(".content-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 125, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부

    // Navigation arrows 좌/우 컨트롤 버튼
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

//sec4
document.querySelectorAll(".sec4-list li").forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        document.querySelector(".sec4-list .on").classList.remove("on");
        e.classList.add("on");
    });
});


//sec5
$('.tab-li li').click(function (e) {
    e.preventDefault()
    let idx = $(this).index()
    $('.tab').removeClass('on')
    $('.tab').eq(idx).addClass('on')

    $('.tab-li li a').removeClass('on')
    $(this).find('a').addClass('on')
})
$('.tab-lists li').click(function (e) {
    e.preventDefault()
})
//tab-menu--------------------------------------
var swiper1 = new Swiper(".tab1-swiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
var swiper2 = new Swiper(".tab2-swiper", {
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
                rows: 2,
            },
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            grid: {
                rows: 2,
            },
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
var swiper3 = new Swiper(".tab3-swiper", {
    slidesPerView: 1,

    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
                rows: 2,
            },
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            grid: {
                rows: 2,
            },
        },
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper4 = new Swiper(".tab4-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

Fancybox.bind('.video a', {
    groupAll: true,
});  
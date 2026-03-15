/*nav*/
$('nav').mouseenter(function () {
    $('.sub-menu').stop().slideDown(350)
    $('header').addClass('on')
})

$('nav').mouseleave(function () {
    $('.sub-menu').stop().slideUp(350)
    $('header').removeClass('on')
})

/*nav*/


// loop 마지막 페이지이후 끊기지 않고 첫번째 페이지가 보일 수 있도록(연결될 수)//
var swiper = new Swiper(".mySwiper", {
    speed: 800,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

const liElems = document.querySelectorAll('.lnb ul li')
// 슬라이드를 오토플레이 상황에서 몇번째를 보이고 있는건지 확인
swiper.on('slideChange', function () {
    // 해당번째 인덱스값을 get
    // realIndex는 loop를 사용을 위해(loop가 없다면 activeIdx)
    let activeIdx = swiper.realIndex;
    liElems.forEach(function (item) {

        item.classList.remove('on')
    })
    // li모두를 읽으면 배열로 지정되어진다.
    liElems[activeIdx].classList.add('on')

})



// 모든 li를 대상으로 ~ 각각의 li요소
liElems.forEach(function (liElem, idx) {
    // console.log(liElem,idx);
    // 각각 li
    liElem.addEventListener('click', function (e) {
        e.preventDefault()
        // 모든 li
        liElems.forEach(function (item) {
            item.classList.remove('on')
        })
        // 각각 활성화
        liElem.classList.add('on')
        console.log(idx)
        swiper.slideToLoop(idx, 500)
    })
})


document.querySelector('a.prev').addEventListener('click', function (e) {
    e.preventDefault()
    swiper.slidePrev()
})
document.querySelector('a.next').addEventListener('click', function (e) {
    e.preventDefault()
    swiper.slideNext()
})

document.querySelector('a.pause').addEventListener('click', function (e) {
    e.preventDefault()
    this.classList.toggle('active')
    // active 클래스가 존재
    let sw = this.classList.contains('active')
    if (sw) {
        swiper.autoplay.stop()
    }
    else {
        swiper.autoplay.start()
    }
})



let header = document.querySelector('header')

const sectionElems = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY || window.pageYOffset


    sectionElems.forEach(function (section) {
        const stickyTitle = section.querySelector('.sticky-title')

        const sectionTop = section.offsetTop//각 센션의 시작위치
        console.log(scrollPosition);
        const threshold = sectionTop + 300//각센션에서 얼마나 떨어지면
        //  sticky타이틀이 존재하면 실행해줘
        if (stickyTitle) {
            if (scrollPosition >= threshold) {
                stickyTitle.style.opacity = 0
            } else {
                stickyTitle.style.opacity = 1

            }
        }
    })
})

//sec3

$('.menu').find('li:first a').addClass('on')

$('ul.menu li a').click(function (e) {
    e.preventDefault()
    let href = $(this).attr('href')

    $('.menu li a').removeClass('on')
    $(this).addClass('on')

    $('article').removeClass('on')
    $(href).addClass('on')

    dotAni($(this))
})



function dotAni(active) {
    let left = $(active).offset().left
    let wid = $(active).width() / 2
    $('.dot').stop().animate({ 'left': left + wid - 10 })
}

dotAni($('.menu li').first())

$(window).resize(function () {
    dotAni($('.menu li').first())
})



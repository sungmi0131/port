$(document).ready(function () {

    let scrolling
    let scroll_top //header 고정 시작 값
    let window_w
    let mobile_size = 1300
    let pc_mobile

    function scroll_chk() {
        if (pc_mobile == 'pc') {
            scroll_top = 50
        } else {
            scroll_top = 0
        }
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if (scrolling > scroll_top) { //0보다 크다면 - 조금이라도 스크롤
            $('header').addClass('fixed')
        } else {//0이거나 0보다 작을때
            $('header').removeClass('fixed')
        }
    }

    function resize_chk() {
        window_w = $(window).width()
        console.log(window_w)
        if (window_w > mobile_size) { //pc일때
            pc_mobile = 'pc'
        } else { //mobile
            pc_mobile = 'mo'
        }
        console.log(pc_mobile)
    }

    resize_chk() //문서가 로딩되었을 때 한번
    $(window).resize(function () {
        resize_chk()
    })

    scroll_chk()//로딩되었을 때 한번
    $(window).scroll(function () { //스크롤할 때마다 1번 실행
        scroll_chk()
    })

    
    $('header  nav .gnb_wrap ul.main_menu > li').on('mouseenter focusin', function () {
        if (pc_mobile == 'pc') {
            $('header').addClass('menu_over')
            $('header  nav .gnb_wrap ul.main_menu > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function () {
        if (pc_mobile == 'pc') {
            $('header').removeClass('menu_over')
            $('header  nav .gnb_wrap ul.main_menu > li').removeClass('on')
        }
    })
    $('header  nav .gnb_wrap ul.main_menu > li:last-child > ul.sub_menu2 > li:last-child > a').on('focusout', function () {
        if (pc_mobile == 'pc') {
            $('header').removeClass('menu_over')
            $('header  nav .gnb_wrap ul.main_menu > li').removeClass('on')
        }
    })

    /*
        모바일 메뉴를 클릭하면
        1. a링크값을 삭제 (이동을 못하게 막아버림)
        2. li에 open 클래스를 추가
           open 없으면 추가
           open 있으면 삭제
           --> 한번 클릭하면 열리고 두번 클릭하면 닫힘
    */

    $("header  nav .gnb_wrap ul.main_menu > li > a").on("click", function (e) {
        if (pc_mobile == 'mo') {
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
    });
    $("header  nav  .gnb_wrap ul.sub_menu2 > li > a").on("click", function (e) {
        if (pc_mobile == 'mo') {
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
    });


    /*
        header  nav .gnb_open
        메뉴열기를 클릭하면 header에 menu_open 클래스 추가
        메뉴닫기를 클릭하면 header에 menu_opem 삭제
        header  nav .gnb_close
    */
    $('header  nav .gnb_open').on('click', function () {
        $('header').addClass('menu_open')
        $("html, body").css({ overflow: "hidden", height: $(window).height() }).bind("scroll touchmove mousewheel", function (e) { e.preventDefault(); e.stopPropagation(); return false; }, function () { passive: false });
    })
    $('header  nav .gnb_close').on('click', function () {
        $('header').removeClass('menu_open')
        $("html, body").css({ overflow: "visible", height: "auto" }).unbind('scroll touchmove mousewheel');
    })


    gsap.registerPlugin(ScrollTrigger);
    const sections = document.querySelector(".main .inner");  //좌우요소를 감싸는 요소
    const large = document.querySelector(".main .inner .main_cont .cont"); //스크롤될 요소
    gsap.to(large, {
        y: () => (window.innerHeight - large.clientHeight - 0),  /* 실제 스크롤 값보다 더 스크롤 할 값 - 필요없으면 0 */
        ease: "none",
        scrollTrigger: {
            trigger: sections,
            pin: true,
            start: "center center", /* 좌우로 스크롤 될 동안의 위치, top top 상단에 고정, top 20% 상단에서 20% 떨어져서 */
            end: () => "+=1300",
            scrub: 0.5,
            markers: false,
            invalidateOnRefresh: true,
            snap: {
                snapTo: 0.5,
                duration: 1.2,
                delay: 0,
            }
        }
    });


    const sections2 = document.querySelector(".search .wrapper");  //좌우요소를 감싸는 요소
    const large2 = document.querySelector(".search .wrapper .right .pic"); //스크롤될 요소
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", function () {
        gsap.to(large2, {
            y: () => (window.innerHeight - large.clientHeight - 0),  // 실제 스크롤 값보다 더 스크롤 할 값 - 필요없으면 0 
            ease: "none",
            scrollTrigger: {
                trigger: sections2,
                pin: true,
                start: "top 130px",
                end: () => "+=1000",
                scrub: 0.1,
                markers: false,
                invalidateOnRefresh: true,
            }
        });
    })

    const tech_swiper = new Swiper('.tech .swiper', {
        slidesPerView: "auto",
        breakpoints: {
            1024: {
                spaceBetween: 24,
            },
            768: {
                spaceBetween: 24,
            },
            300: {
                spaceBetween: 24,
            },
        },
        centeredSlides: false,
        loop: true,

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.tech .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="item' + (index + 1) + ' ' + className + '"></span>';
            },
            dynamicBullets: false,
        },

        navigation: { 
            nextEl: '.tech_next', 
            prevEl: '.tech_prev',
        },
    });


    const swiper = new Swiper('.sns .swiper', {
        slidesPerView: "auto",
        spaceBetween: 0, 
        centeredSlides: true, 
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
    });


    $('footer .familysite .family_open').on('click', function () {
        $('footer .familysite').addClass('open')
        $('footer .familysite ul').slideDown()
    })
    $('footer .familysite .family_close').on('click', function () {
        $('footer .familysite').removeClass('open')
        $('footer .familysite ul').slideUp()
    })

    
    })
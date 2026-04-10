//nav
const navItems = document.querySelectorAll('.nav__item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
})





//scrolla.js
$(function () {
    $('.animate').scrolla({
        mobile: true,
        once: false
    })
})

//main-project
$(function () {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray('.wrap > section');

    sections.forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            // markers: true,
        });
    });

    ScrollTrigger.create({
        trigger: ".wrap",
        start: "top top",
        end: "bottom bottom",
        snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.3,
            delay: 0.1,
            ease: "power1.out"
        }
    });
});



//con1 gsap 에니메이션
$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con1",
            start: '0% 80%',
            end: '0% 100%',
            scrub: 1,
        }
    })
        .to('.wrap2', { backgroundColor: '#fff', color: '#000', ease: 'none', duration: 5 }, 0)

        .fromTo('.videoWrap video', { 'clipPath': 'inset(60% 60% 60% round 30%)' }, { 'clipPath': 'inset(0% 0% 0% 0% round 0%)', ease: 'none', duration: 10 }, 0)



    //con2
    //title 글자에니메이션
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con2",
            start: '0% 100%',
            end: '0% 20%',
            scrub: 1,
        }
    })

        .fromTo('.con2 .title .a', { x: '-100%' }, { x: '0%', ease: 'none', duration: 5 }, 0)
        .fromTo('.con2 .title .b', { x: '100%' }, { x: '0%', ease: 'none', duration: 5 }, 0)


    //worklist가 나타날때 배경색 검정으로
    gsap.timeline({
        scrollTrigger: {
            trigger: ".workList",
            start: '0% 100%',
            end: '0% 100%',
            scrub: 1,
        }
    })
        .to('.wrap2', { backgroundColor: '#000', color: '#fff', ease: 'none', duration: 5 }, 0)
        .to('.con2 .title', { position: 'fixed', ease: 'none', left: '0', top: '0', width: '100%', duration: 5 }, 0)
        .fromTo('.workList', { margin: '0 auto' }, { margin: '100vh auto 0', position: 'relative', zIndex: 10, duration: 1 }, 0)


    //worklist가 끝날때, .title글자가 화면 밖으로 사라지도록 애니적용
    gsap.timeline({
        scrollTrigger: {
            trigger: ".workList",
            start: '100% 50%',
            end: '100% 0%',
            scrub: 1,
        }
    })
        .to('.con2 .title .a', { x: '-100%', ease: 'none', duration: 5 }, 0)
        .to('.con2 .title .b', { x: '100%', ease: 'none', duration: 5 }, 0)
})


//simplyscroll
$(function () {
    $('.con3 .list').simplyScroll({
        speed: 4,
        pauseOnHover: false,
        pauseOnTouch: false
    });
})
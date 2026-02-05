const home = gsap.timeline();

home.fromTo('.home_t1', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo('.home_t2', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo('.home_t3', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo('.home_t4', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo('.home_t5', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1 })

ScrollTrigger.create({
    animation: home,
    trigger: '#home',
    start: "top top",
    end: "+=3000",
    anticpatePin: 1,
    pin: true, //고정fixed
    scrub: true, //부드럽게 내려가기
})
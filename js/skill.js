gsap.registerPlugin(ScrollTrigger)


let list = gsap.utils.toArray('.skills .list li')
let listA = gsap.utils.toArray('.skills .list .a')
let listB = gsap.utils.toArray('.skills .list .b')
let listC = gsap.utils.toArray('.skills .list .c')

let scrollTween = gsap.to(list, {
    xPercent: -100 * (list.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.skills',
        pin: true,
        scrub: 1,
        start: 'center center',
        end: '200%'

    }
})
gsap.to(listA, {
    y: 50,
    rotation: 10,
    scrollTrigger: {
        trigger: '.skills',
        scrub: 2,
        end: '200%'
    }
})
gsap.to(listB, {
    y: -50,
    rotation: 20,
    scrollTrigger: {
        trigger: '.skills',
        scrub: 2,
        end: '200%'
    }
})
gsap.to(listC, {
    y: -50,
    x: 20,
    rotation: -10,
    scrollTrigger: {
        trigger: '.skills',
        scrub: 2,
        end: '200%'
    }
})



document.querySelectorAll('.skills h2').forEach(text => {
    gsap.to(text, {
        backgroundSize: '100%',
        scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
        }
    })
})

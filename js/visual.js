$(document).on('click', 'a[href="#"]', function (e) { e.preventDefault(); })

//스플리팅 호출
$(function () {
    Splitting();
});

//scrolla.js
$(function () {
    $('.animate').scrolla({
        mobile: true,
        once: false
    })
})


//04 svg path길이구하기
$(function () {
    $('.svgAni').find('.svgAni05').each(function (i, path) {
        var length = path.getTotaiLength();
    })

})

$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: '0% 80%',
            end: '0% 100%',
            scrub: 1,
        }
    })
        .to('.wrap2', { backgroundColor: '#fff', color: '#000', ease: 'none', duration: 5 }, 0)
        .to('.svgAni path', { stroke: '#000', ease: 'none', duration: 5 }, 0)
        .to('.scroll', { opacity: '0', ease: 'none', duration: 5 }, 0)
        .fromTo('.videoWrap video', { 'clipPath': 'inset(60% 60% 60% round 30%)' }, { 'clipPath': 'inset(0% 0% 0% 0% round 0%)', ease: 'none', duration: 10 }, 0)


})

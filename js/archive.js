 gsap.registerPlugin(ScrollTrigger)

        let activeImage;

        gsap.utils.toArray('.archive_list ul li a').forEach((elem) => {
            let image = elem.querySelector('img.fadeImg'),

                align = e => {
                    setX(e.clientX)
                    setY(e.clientY)

                },


            startPoint = () => document.addEventListener('mousemove', align),
                stopPoint = () => document.removeEventListener('mousemove', align),

                fade = gsap.to(image, { autoAlpha: 0.8, ease: 'none', paused: true })

            elem.addEventListener('mouseenter', (e) => {
                fade.play()
                startPoint()

                if (activeImage) {
                    gsap.set(image, {
                        x: gsap.getProperty(activeImage, "x"),
                        y: gsap.getProperty(activeImage, "y"),
                    })
                }

                activeImage = image
                setX = gsap.quickTo(image, "x", { duration: 0.5, ease: Elastic }),
                    setY = gsap.quickTo(image, "y", { duration: 0.5, ease: Elastic })

                align(e);
            })

            elem.addEventListener('mouseleave', () => fade.reverse())

        })
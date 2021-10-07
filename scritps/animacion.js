
        setTimeout(()=>{
            const tl = gsap.timeline();
            tl.to(".main-message", { duration: .8, x: 0, ease: 'expo' });
            tl.to("#dos", { duration: .8, y: 0, opacity: 1,  ease: 'expo' })
            tl.to("#dos", { delay: 5, duration: .8, y: '-100%', opacity: 0,  ease: 'expo' })
            tl.to(".main-message", { duration: .75, x: '-100%', opacity: 0, ease: 'expo' }, '-=.3');

        }, 1000)
    
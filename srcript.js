function homeAnimation() {
    gsap.set(".slidesm", {
        scale: 4,
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
        },
        scale: 1,
        ease: Power2,
    })


    tl.to(".vediodiv", {
        '--clip': "0%",
        ease: Power2,
    }, 'chalja')

    tl.to(".slidesm", {
        scale: 1,
        ease: Power2
    }, 'chalja')
    tl.to(".lft", {
        xPercent: -15,
        ease: Power4,
        stagger: 0.3,
    }, 'a')
    tl.to(".rgt", {
        xPercent: 15,
        ease: Power4,
        stagger: 0.3,
    }, 'a')


}



function realAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        xPercent: -320,
        ease: Power4
    })
}



function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {

            gsap.to(this.querySelector(".picture"), { opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth, -400, 400, dets.clientX), ease: 'power2', duration: 0.5 });
        });
        el.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), { opacity: 0, ease: 'power2', duration: 0.5 });
        });
    });
}


function paraAnimation() {
    var clutter = ""
    document.querySelector(".textpara")
        .textContent.split("")
        .forEach(function (e) {
            if (e === "") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector(".textpara").innerHTML = clutter;

    gsap.set(".textpara span", { opacity: .4 })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            bottom: "110%",
            scrub: .2
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })

}

function locomotive() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation() {
    gsap.to(".newcap", {
        scrollTrigger: {
            trigger: ".capsules",
            start: " top 70%",
            end: "bottom 90%",
            scrub: .5
        },
        y: 0,
        duration: 2,
        ease: Power4
    })
}

function bodyColorChange() {
    document.querySelectorAll(".section")
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e,
                start: "top 50%",
                end: "bottom 50%", 
                onEnter: function () {
                    document.body.setAttribute("theme", e.dataset.color)
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", e.dataset.color)
                }
            })
        })
}

function fotterAnimation() {    
    gsap.from(".fsign", {
        scrollTrigger: {
            trigger: ".footer2",
            start: "top top",
            end: "bottom bottom",
            scrub:2
        },
        y: 60,
        duration:3, 
        stagger:0.2
    })
}

fotterAnimation();





homeAnimation()
realAnimation()
teamAnimation()
paraAnimation()
locomotive()
capsulesAnimation()
bodyColorChange()
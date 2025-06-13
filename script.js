
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// window.addEventListener("load", () => {
//     scroll.update();
// });


// GSAP First Page Animation
function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 2,
        ease: "expo.inOut"
    })
    .to(".boundingelem", {
        y: 0,
        ease: "expo.inOut",
        duration: 2,
        delay: -1,
        stagger: 0.2
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: "expo.inOut"
    });
}

// Mouse circle scale and movement
function circleChaptaKaro() {
    let xscale = 1;
    let yscale = 1;
    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        xscale = gsap.utils.clamp(0.8, 1.2, (dets.clientX - xprev) * 0.01);
        yscale = gsap.utils.clamp(0.8, 1.2, (dets.clientY - yprev) * 0.01);

        xprev = dets.clientX;
        yprev = dets.clientY;

        updateCirclePosition(dets.clientX, dets.clientY, xscale, yscale);
    });
}

// Updates circle position with scaling
function updateCirclePosition(x, y, xscale = 1, yscale = 1) {
    document.querySelector("#minicircle").style.transform =
        `translate(${x}px, ${y}px) scale(${xscale}, ${yscale})`;
}

// Run scripts
circleChaptaKaro();
firstPageAnim();
updateCirclePosition();
 

document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function(details) {
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            duration: 0.3, 
            ease: "power1.out" 
        });
    });
});








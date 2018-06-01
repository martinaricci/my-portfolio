console.log('hello')

// $('.mywork-boxes').on('hover', 'li', function(e) {
//     // debugger
//     $(e.target).find('h2').addClass('.make-visible')
//     // $(e.target).addClass('h2')
// })

$(function () {
    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()
        .fromTo("section.mywork-container", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("section.aboutme-container", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("section.contact-container", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone});

        new ScrollMagic.Scene({
            triggerElement: "#entire-page",
            triggerHook: "onLeave",
            duration: "300%"
        })
        .setPin("#entire-page")
        .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);
});
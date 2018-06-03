console.log('hello')

// $('.mywork-boxes').on('hover', 'li', function(e) {
//     // debugger
//     $(e.target).find('h2').addClass('.make-visible')
//     // $(e.target).addClass('h2')
// })

$(function () {
    var controller = new ScrollMagic.Controller();

    // var wipeAnimation = new TimelineMax()
        // .fromTo("section.panel.mywork-container", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
        // .fromTo("section.panel.contact-container", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone});
        // .fromTo("section.aboutme-container", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
        // .fromTo("section.panel.aboutme-container", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })

        new ScrollMagic.Scene({
            triggerElement: "#mywork-container",
            // triggerHook: "onLeave",
            duration: "200"
        })
        .setPin("#mywork-container")
        // .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#contact-container",
            // triggerHook: "onLeave",
            duration: "200"
        })
        .setPin("#contact-container")
        // .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#aboutme-container",
        // triggerHook: "onLeave",
        duration: "200"
    })
        .setPin("#aboutme-container")
        // .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);        
});
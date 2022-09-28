document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to('#sixth', 6, {
        y: -700
    })
    .to('#fifth', 6, {
        y: -500
    }, '-=6')
    .to('#forth', 6, {
        y: -400
    }, '-=6')
    .to('#third', 6, {
        y: -300
    }, '-=6')
    .to('#second', 6, {
        y: -200
    }, '-=6')
    .to('#first', 6, {
        y: -100
    }, '-=6')
    .to('.content, .blur', 6, {
        top: '0%'
    }, '-=6')
    .to('.title', 3, {
        left: '10px',
        autoAlpha: 0
    }, '-=3.5')
    .from('.one', 3, {
        top: '40px',
        autoAlpha: 0
    }, '-=4')
    .from('.two', 3, {
        top: '40px',
        autoAlpha: 0
    }, '-=3.5')
    .from('.three', 3, {
        top: '40px',
        autoAlpha: 0
    }, '-=3.5')
    .from('.four', 3, {
        left: '40px',
        autoAlpha: 0
    }, '-=3.5')
    .from('.text', 3, {
        left: '40px',
        autoAlpha: 0
    }, '-=3.5')

    let scene = new ScrollMagic.Scene({
        triggerElement: 'section',
        duration: '200%',
        triggerHook: 0
    })
    .setTween(timeline)
    .setPin('section')
    .addTo(controller);
})
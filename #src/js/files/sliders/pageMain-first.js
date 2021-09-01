if(window.screen.width > 766) {
    if (document.querySelector('.first-container')) {
        let slider_first = new Swiper(".first-container", {
            speed: 30000,
            parallax: true,
            autoplay: {
                delay: 1,
                disableOnInteraction: false
            },
            grabCursor: true,
            mousewheelControl: true,
            keyboardControl: true,
        });
    }
}

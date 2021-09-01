if(document.querySelector('.slider-duo')) {

    let swiperOptions = {
        loop: true,
        lazy: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        speed: 8000,
        grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            320: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 30,
            },
            1800: {
                slidesPerView: 5.5,
                spaceBetween: 30,
            },
            2500: {
                slidesPerView: 7.5,
                spaceBetween: 30,
                watchOverflow: true,
            },
        },
    };

    let dou = new Swiper(".slider-duo__container", swiperOptions);
    setTimeout(() => {
        let dou_second = new Swiper(".slider-duo__container-second", swiperOptions);
    }, 2000);
}

// let dou = new Swiper(".slider-duo__container", {
//     loop: true,
//     lazy: true,
//     autoplay: {
//         delay: 1,
//         disableOnInteraction: false
//     },
//     speed: 8000,
//     slidesPerView: 3,
//     spaceBetween: 30
// });
// let dou_second = new Swiper(".slider-duo__container-second", {
//     loop: true,
//     lazy: true,
//     autoplay: {
//         delay: 1,
//         disableOnInteraction: false
//     },
//     speed: 8000,
//     slidesPerView: 3,
//     spaceBetween: 30
// });


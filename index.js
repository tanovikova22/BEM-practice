const swiper1 = new Swiper('.main-slider__swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2= new Swiper(".inspirations-slider__swiper", {
    direction: 'horizontal',
    slidesPerView: 'auto',
    slidersPerGroup: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
});
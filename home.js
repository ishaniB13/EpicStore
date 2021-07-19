const open = document.getElementById("open")
const close = document.getElementById("close")
const menu = document.querySelector(".menu")

open.addEventListener("click", () => {
    menu.classList.add("show")
})

close.addEventListener("click", () => {
    menu.classList.remove("show")
})

const input = document.querySelector(".input")
const search = document.getElementById("sear")

sear.addEventListener("click", () => {
    input.classList.add("show")
    input.focus()
})

$(".slider-one").not(".slick-initialized").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
})

$(".slider-two").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: ".site-slider .slider-btn-two .prev2",
    nextArrow: ".site-slider .slider-btn-two .next2",
})

$(".slider-three").slick({
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: ".site-slider .slider-btn-three .prev3",
    nextArrow: ".site-slider .slider-btn-three .next3",
})
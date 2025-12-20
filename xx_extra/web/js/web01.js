const nextBtn = document.querySelector("#next_btn");
const prevBtn = document.querySelector("#prev_btn");
const slider = document.querySelector("#slider");
const sliderImg = document.querySelectorAll("#slider>li");
console.log(sliderImg);
let sliderIndex = 0;
let timerId;
let timer = 3000;

nextBtn.addEventListener("click", () => {
    nextSlider();
});

prevBtn.addEventListener("click", () => {
    prevSlider();
});

autoSlider();

slider.addEventListener("mouseover", () => {
    stopSlider();
});
nextBtn.addEventListener("mouseover", () => {
    stopSlider();
});
prevBtn.addEventListener("mouseover", () => {
    stopSlider();
});
slider.addEventListener("mouseout", () => {
    autoSlider();
});

function nextSlider() {
    if ((sliderIndex + 1) % sliderImg.length == 0) {
        sliderIndex = 0;
    } else {
        sliderIndex += 1;
    }
    slider.style.transform = `translateX(-${sliderIndex}00vw)`;
}

function prevSlider() {
    if ((sliderIndex + sliderImg.length) % sliderImg.length == 0) {
        sliderIndex = sliderImg.length - 1;
    } else {
        sliderIndex -= 1;
    }
    slider.style.transform = `translateX(-${sliderIndex}00vw)`;
}

function autoSlider() {
    if (!timerId) {
        timerId = setInterval(() => {
            nextSlider();
        }, timer);
    }
}

function stopSlider() {
    clearInterval(timerId);
    timerId = null;
}

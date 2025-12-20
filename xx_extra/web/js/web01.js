const nextBtn = document.querySelector("#next_btn");
const prevBtn = document.querySelector("#prev_btn");
const slider = document.querySelector("#slider");
const sliderImg = document.querySelectorAll("#slider>li");
console.log(sliderImg);
let sliderIndex = 0;

nextBtn.addEventListener("click", () => {
    if ((sliderIndex + 1) % sliderImg.length == 0) {
        sliderIndex = 0;
    } else {
        sliderIndex += 1;
    }
    slider.style.transform = `translateX(-${sliderIndex}00vw)`;
});

prevBtn.addEventListener("click", () => {
    if ((sliderIndex + sliderImg.length) % sliderImg.length == 0) {
        sliderIndex = sliderImg.length - 1;
    } else {
        sliderIndex -= 1;
    }
    slider.style.transform = `translateX(-${sliderIndex}00vw)`;
});

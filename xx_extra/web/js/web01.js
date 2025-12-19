const nextBtn = document.querySelector("#next_btn");
const prevBtn = document.querySelector("#prev_btn");
const slider = document.querySelector("#slider");
const sliderImg = document.querySelectorAll("#slider>li");
console.log(sliderImg);
let sliderNum = 0;

nextBtn.addEventListener("click", () => {
    sliderNum -= 1;
    if (sliderNum == 0 - sliderImg.length) {
        slider.style.transform = `translateX(0)`;
    }
    slider.style.transform = `translateX(${sliderNum}00vw)`;
});

prevBtn.addEventListener("click", () => {
    sliderNum += 1;
    if (sliderNum == sliderImg.length) {
        slider.style.transform = `translateX(${sliderImg.length}00vw)`;
    }
    slider.style.transform = `translateX(${sliderNum}vw)`;
});

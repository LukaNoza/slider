// class CustomRangeSlider {
//     constructor() {
//       this.slideValue = document.querySelector(".sliderValue span");
//       this.inputSlider = document.querySelector(".range input");
//       this.init();
//     }
//     init() {
//       this.inputSlider.addEventListener("input", () => {
//         let value = this.inputSlider.value;
//         this.slideValue.textContent = value;
//         this.slideValue.style.left = `${value / 2}%`;
//         this.slideValue.classList.add("show");
//       });
//       this.inputSlider.addEventListener("blur", () => {
//         this.slideValue.classList.remove("show");
//       });
//     }
//   }
  
//   const customRangeSlider = new CustomRangeSlider();
  

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
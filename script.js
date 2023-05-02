class CustomRangeSlider {
    constructor() {
      this.slideValue = document.querySelector(".sliderValue span");
      this.inputSlider = document.querySelector(".range input");
      this.init();
    }
    init() {
      this.inputSlider.addEventListener("input", () => {
        let value = this.inputSlider.value;
        this.slideValue.textContent = value;
        this.slideValue.style.left = `${value / 2}%`;
        this.slideValue.classList.add("show");
      });
      this.inputSlider.addEventListener("blur", () => {
        this.slideValue.classList.remove("show");
      });
    }
  }
  
  const customRangeSlider = new CustomRangeSlider();
  
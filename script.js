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
  

class MyCarousel extends HTMLElement {
  constructor() {
    super();
    
    // Get the photos array from the attribute and parse it as JSON
    const photos = JSON.parse(this.getAttribute('photos'));
    
    // Create the carousel element
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    // Add the slides to the carousel
    photos.forEach(photo => {
      const slide = document.createElement('div');
      slide.style.backgroundImage = `url(${photo})`;
      slide.classList.add('slide');
      carousel.appendChild(slide);
    });

    // Add the carousel to the custom element
    this.appendChild(carousel);
  }
}

// Define the custom element
customElements.define('my-carousel', MyCarousel);

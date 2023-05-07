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
  

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
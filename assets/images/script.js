
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Altere 2000 para ajustar o tempo de cada slide
}























/*document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let slideIndex = 0;
  
    function showSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function prevSlide() {
      slideIndex = (slideIndex === 0) ? slides.children.length - 1 : slideIndex - 1;
      showSlide(slideIndex);
    }
  
    function nextSlide() {
      slideIndex = (slideIndex === slides.children.length - 1) ? 0 : slideIndex + 1;
      showSlide(slideIndex);
    }
  
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
  });
  */
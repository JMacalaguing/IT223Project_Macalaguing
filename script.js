function myFunction() {
    document.getElementById("navbarNav").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.navbar-toggler')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

const slide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const slideWidth = slide.clientWidth;

let currentPosition = 0;

prevBtn.addEventListener('click', () => {
  currentPosition += slideWidth;
  if (currentPosition >= slideWidth) {
    currentPosition = -2 * slideWidth;
  }
  slide.style.transform = `translateX(${currentPosition}px)`;
});

nextBtn.addEventListener('click', () => {
  currentPosition -= slideWidth;
  if (currentPosition <= -3 * slideWidth) {
    currentPosition = 0;
  }
  slide.style.transform = `translateX(${currentPosition}px)`;
});
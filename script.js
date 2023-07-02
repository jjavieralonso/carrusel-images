const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
const images = carouselContainer.children;

function showImage(index) {
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function goToPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

function goToNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

prevButton.addEventListener('click', goToPrev);
nextButton.addEventListener('click', goToNext);

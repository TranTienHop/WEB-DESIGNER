$(document).ready(function() {
  const $slider = $('.slider');
  const slideWidth = $('.slide').outerWidth(true); // gồm cả margin
  const totalSlides = $('.slide').length;
  let currentIndex = 0;

  function moveSlide() {
    $slider.css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex > totalSlides - 5) { // còn hiển thị 5 ảnh
      currentIndex = 0;
    }
    moveSlide();
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 5;
    }
    moveSlide();
  }

  // Nút bấm
  $('.right').click(nextSlide);
  $('.left').click(prevSlide);

  // Tự động trượt
  setInterval(nextSlide, 3000); // 3 giây trượt 1 ảnh
});

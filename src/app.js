
//   var sliderImages = document.querySelectorAll('.slider img');
//   var current = 0;
//   var interval = setInterval(changeImage, 5000);

//   function changeImage() {
//     sliderImages[current].style.opacity = 0;
//     current = (current + 1) % sliderImages.length;
//     sliderImages[current].style.opacity = 1;
//   }

import 'slick-carousel';

$('.slider').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  autoplaySpeed: 6000,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  slidesToScroll: 1
});

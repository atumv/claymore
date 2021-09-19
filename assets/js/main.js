let position = 0;
const images = $('.slider-item');

$('.arrow-left').click(function() {
  $(images[position]).removeClass('d-inline-block').addClass('d-none');
  !position ? position = images.length - 1 : position -= 1;
  $(images[position]).removeClass('d-none').addClass('d-inline-block');
});

$('.arrow-right').click(function() {
  $(images[position]).removeClass('d-inline-block').addClass('d-none');
  position === images.length - 1 ? position = 0 : position += 1;
  $(images[position]).removeClass('d-none').addClass('d-inline-block');
});
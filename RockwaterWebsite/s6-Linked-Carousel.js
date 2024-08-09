var mainCarousel = new Flickity(".carousel-nav", {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  wrapAround: true,
  groupCells: 1,
  autoPlay: 1600,
});

var navCarousel = new Flickity(".carousel-main", {
  asNavFor: ".carousel-nav",
  contain: true,
  cover: true,
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true,
  groupCells: 1,
});

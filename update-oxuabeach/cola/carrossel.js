function Carrossel(classe, filho, show1, show2, show3, show4, show5) {
  var $item = $("" + classe + "");
  $item.find(".helperComplement").remove();
  if ($item.find("" + filho + "").length > 0) {
    $item.slick({
      infinite: false,
      speed: 600,
      slidesToShow: show1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      dots: false,
      nextArrow: '<span class="lnr lnr-chevron-right"></span>',
      prevArrow: '<span class="lnr lnr-chevron-left"></span>',
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: show2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 879,
          settings: {
            slidesToShow: show3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: show4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: show5,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}

function CarrosselProduto(classe) {
  $(classe).slick({
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  });
}

$(window).scroll(function() {
  var sticky = $("header"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) {
    sticky.addClass("header-scroll");
    $("#logo-header").attr("src", "./imgs/icons/icon_hover_03" + ".png");
    $("#search").attr("src", "./imgs/icons/icon_hover_06" + ".png");
    $("#user").attr("src", "./imgs/icons/icon_hover_09" + ".png");
    $("#bag").attr("src", "./imgs/icons/icon_hover_11" + ".png");
  } else {
    sticky.removeClass("header-scroll");
    $("#logo-header").attr("src", "./imgs/icons/icon_03" + ".png");

    $("#search").attr("src", "./imgs/icons/icon_06" + ".png");
    $("#user").attr("src", "./imgs/icons/icon_09" + ".png");
    $("#bag").attr("src", "./imgs/icons/icon_11" + ".png");
  }
});

$(".autoplay")
  .find("span")
  .each(function(index) {
    var valorAtual = this.innerHTML;
    var valorFinal = calculaPorcentagem(valorAtual, 25);
    this.innerHTML = valorFinal;
  });

function calculaPorcentagem(valor, porcentagem) {
  valor = parseFloat(valor.replace(",", "."));
  valorPorcentagem = (valor * porcentagem) / 100;
  valor += valorPorcentagem;
  valor = valor
    .toFixed(2)
    .toString()
    .replace(".", ",");
  return valor;
}

(function($) {
  function mediaSize() {
    if (window.matchMedia("(max-width: 480px)").matches) {
      $(".autoplay").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
      });
    } else {
      $(".autoplay").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
      });
    }
  }
  mediaSize();
  window.addEventListener("resize", mediaSize, false);
})(jQuery);

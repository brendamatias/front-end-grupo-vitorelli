$(window).scroll(function() {
  var sticky = $("header"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) {
    sticky.addClass("header-scroll");
    $("#logo-header").attr(
      "src",
      "./imgs/header/logo-header-flutuante" + ".svg"
    );
  } else {
    sticky.removeClass("header-scroll");
    $("#logo-header").attr("src", "./imgs/header/logo-header" + ".svg");
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

$(".autoplay").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});

(function() {
  var $html = document.querySelector("html");
  var $btn = document.querySelector(".header-nav__hamburgger");

  //melhorar acessibilidade do menu hamburguer
  var ariaControl = $btn.getAttribute("aria-controls");
  var $menu = document.getElementById(ariaControl);

  $html.classList.remove("no-js");
  $html.classList.add("js");

  $btn.addEventListener("click", function() {
    $html.classList.toggle("menu-opened");

    // para retornar booleano true ou false (convertido) e assim ter o efeito desejado de adicionar ou remover o menu hamburguer, é preciso igualar(===) strings true, como abaixo, caso contrário sempre dará false (strings e não booleano).
    var ariaExpanded = this.getAttribute("aria-expanded") === "true";

    //aqui inverte o booleano retornado do código acima
    $btn.setAttribute("aria-expanded", !ariaExpanded);
    $menu.setAttribute("aria-expanded", !ariaExpanded);
  })
})()
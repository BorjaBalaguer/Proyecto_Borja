$(document).ready(function() {
    $("#btntabla").on("click", function() {
      $(".tablaPrincipal").desaparecerTabla()
    })
    $.fn.desaparecerTabla = function () {
      $(this).fadeOut()
    }

    $("#btntabla2").on("click", function() {
        $(".tablaPrincipal").mostrarTabla()
      })
      $.fn.mostrarTabla = function () {
        $(this).fadeIn()
      }

  });
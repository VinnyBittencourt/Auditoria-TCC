$(document).ready(function() {
  //Adicionar e remover questões
  //Art 45
  $("#45-concurso-on").click(function() {
    if ($("#45-concurso-on").is(":checked")) {
      $("#45-1").removeClass("disp");
      $("#45-1").addClass("rmv-disp");

      $("#45-2").removeClass("disp");
      $("#45-2").addClass("rmv-disp");

      $("#45-3").removeClass("disp");
      $("#45-3").addClass("rmv-disp");

      $("#45-4").removeClass("disp");
      $("#45-4").addClass("rmv-disp");
    }
  });

  $("#45-concurso-off").click(function() {
    if ($("#45-concurso-off").is(":checked")) {
      $("#45-1").removeClass("rmv-disp");
      $("#45-1").addClass("disp");

      $("#45-2").removeClass("rmv-disp");
      $("#45-2").addClass("disp");

      $("#45-3").removeClass("rmv-disp");
      $("#45-3").addClass("disp");

      $("#45-4").removeClass("rmv-disp");
      $("#45-4").addClass("disp");
    }
  });

  $("#45-concurso-off2").click(function() {
    if ($("#45-concurso-off2").is(":checked")) {
      $("#45-1").removeClass("rmv-disp");
      $("#45-1").addClass("disp");

      $("#45-2").removeClass("rmv-disp");
      $("#45-2").addClass("disp");

      $("#45-3").removeClass("rmv-disp");
      $("#45-3").addClass("disp");

      $("#45-4").removeClass("rmv-disp");
      $("#45-4").addClass("disp");
    }
  });

  //Art 46
  $("#46-sim").click(function() {
    if ($("#46-sim").is(":checked")) {
      $("#46-q").removeClass("disp");
      $("#46-q").addClass("block-disp");
    }
  });

  $("#46-nao").click(function() {
    if ($("#46-nao").is(":checked")) {
      $("#46-q").removeClass("block-disp");
      $("#46-q").addClass("disp");
    }
  });

  $("#46-nao2").click(function() {
    if ($("#46-nao2").is(":checked")) {
      $("#46-q").removeClass("block-disp");
      $("#46-q").addClass("disp");
    }
  });

  //Art 46-2
  $("#46-2-sim").click(function() {
    if ($("#46-2-sim").is(":checked")) {
      $("#46-2-q").removeClass("disp");
      $("#46-2-q").addClass("block-disp");
    }
  });
  $("#46-2-nao").click(function() {
    if ($("#46-2-nao").is(":checked")) {
      $("#46-2-q").removeClass("block-disp");
      $("#46-2-q").addClass("disp");
    }
  });

  $("#46-2-nao2").click(function() {
    if ($("#46-2-nao2").is(":checked")) {
      $("#46-2-q").removeClass("block-disp");
      $("#46-2-q").addClass("disp");
    }
  });

  //Art 39
  $("#39-sim").click(function() {
    if ($("#39-sim").is(":checked")) {
      $("#39-q").removeClass("disp");
      $("#39-q").addClass("block-disp");
    }
  });
  $("#39-nao").click(function() {
    if ($("#39-nao").is(":checked")) {
      $("#39-q").removeClass("block-disp");
      $("#39-q").addClass("disp");
    }
  });

  $("#39-nao2").click(function() {
    if ($("#39-nao2").is(":checked")) {
      $("#39-q").removeClass("block-disp");
      $("#39-q").addClass("disp");
    }
  });

  //Art 32
  $("#32-sim").click(function() {
    if ($("#32-sim").is(":checked")) {
      $("#32-q").removeClass("disp");
      $("#32-q").addClass("block-disp");
    }
  });
  $("#32-nao").click(function() {
    if ($("#32-nao").is(":checked")) {
      $("#32-q").removeClass("block-disp");
      $("#32-q").addClass("disp");
    }
  });

  $("#32-nao2").click(function() {
    if ($("#32-nao2").is(":checked")) {
      $("#32-q").removeClass("block-disp");
      $("#32-q").addClass("disp");
    }
  });

  //Art 33
  $("#33-sim").click(function() {
    if ($("#33-sim").is(":checked")) {
      $("#33-q").removeClass("disp");
      $("#33-q").addClass("block-disp");
    }
  });
  $("#33-nao").click(function() {
    if ($("#33-nao").is(":checked")) {
      $("#33-q").removeClass("block-disp");
      $("#33-q").addClass("disp");
    }
  });

  $("#33-nao2").click(function() {
    if ($("#33-nao2").is(":checked")) {
      $("#33-q").removeClass("block-disp");
      $("#33-q").addClass("disp");
    }
  });

  //Art 48
  $("#48-sim").click(function() {
    if ($("#48-sim").is(":checked")) {
      $("#48-q").removeClass("disp");
      $("#48-q").addClass("block-disp");
    }
  });
  $("#48-nao").click(function() {
    if ($("#48-nao").is(":checked")) {
      $("#48-q").removeClass("block-disp");
      $("#48-q").addClass("disp");
    }
  });

  $("#48-nao2").click(function() {
    if ($("#48-nao2").is(":checked")) {
      $("#48-q").removeClass("block-disp");
      $("#48-q").addClass("disp");
    }
  });

  //Art 45
  $("#45-sim").click(function() {
    if ($("#45-sim").is(":checked")) {
      $("#45-q").removeClass("disp");
      $("#45-q").addClass("block-disp");
    }
  });
  $("#45-nao").click(function() {
    if ($("#45-nao").is(":checked")) {
      $("#45-q").removeClass("block-disp");
      $("#45-q").addClass("disp");
    }
  });

  $("#45-nao2").click(function() {
    if ($("#45-nao2").is(":checked")) {
      $("#45-q").removeClass("block-disp");
      $("#45-q").addClass("disp");
    }
  });


  //Art 61
  $("#61-nao").click(function() {
    if ($("#61-nao").is(":checked")) {
      $("#61-q").removeClass("disp");
      $("#61-q").addClass("block-disp");
    }
  });
  $("#61-sim").click(function() {
    if ($("#61-sim").is(":checked")) {
      $("#61-q").removeClass("block-disp");
      $("#61-q").addClass("disp");
    }
  });

  $("#61-nao2").click(function() {
    if ($("#61-nao2").is(":checked")) {
      $("#61-q").removeClass("block-disp");
      $("#61-q").addClass("disp");
    }
  });

  //Mascaras

  // $("#CPFCNPJ").keydown(function () {
  //   try {
  //       $("#CPFCNPJ").unmask();
  //   } catch (e) { }

  //   var tamanho = $("#CPFCNPJ").val().length;

  //   if (tamanho < 11) {
  //       $("#CPFCNPJ").mask("999.999.999-99");
  //   } else {
  //       $("#CPFCNPJ").mask("99.999.999/9999-99");
  //   }

  // // ajustando foco
  // var elem = this;
  // setTimeout(function () {
  //     // mudo a posição do seletor
  //     elem.selectionStart = elem.selectionEnd = 10000;
  // }, 0);
  // // reaplico o valor para mudar o foco
  // var currentValue = $(this).val();
  // $(this).val('');
  // $(this).val(currentValue);
  // });

  //   $("#cpfcnpj").keypress(function(){
  //     $("#cpfcnpj").unmask();
  //     var tamanho = $("#cpfcnpj").val().length;

  //     if(tamanho == 11){
  //         $("#cpfcnpj").mask("999.999.99-99");
  //     } else if(tamanho == 14){
  //         $("#cpfcnpj").mask("99.999.999/9999-99");
  //     }
  //   });
  // $("#cnpjId").on("input", function () {
  // $("#CPFCNPJ").mask("99.999.999/9999-99");
  // });

  //Mascara telefone
  //   var behavior = function (val) {
  //     return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  // },
  //     options = {
  //         onKeyPress: function (val, e, field, options) {
  //             field.mask(behavior.apply({}, arguments), options);
  //         }
  //     };
  // $('#cel').mask(behavior, options);

  //Nome com apenas letras
  $("#nome").on("input", function() {
    var regexp = /[^a-zA-Z áéíóúÁÉÍÓÚÃÕãõ'çâÂêÊîÎôÔûÛäëïöüÄËÏÖÜ]/g;
    if (this.value.match(regexp)) {
      $(this).val(this.value.replace(regexp, ""));
    }
  });

  //Apenas números
  $("#numero").on("input", function() {
    var regexp = /[^0-9]/g;
    if (this.value.match(regexp)) {
      $(this).val(this.value.replace(regexp, ""));
    }
  });

  //function pra validar email

  // function validaEmail(email) {
  //   var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  //   return regex.test(email);
  // }

  /*Preloader*/
  // $(window).load(function () {
  //   $("#preloader").delay(800).fadeOut("slow");
  // });
});

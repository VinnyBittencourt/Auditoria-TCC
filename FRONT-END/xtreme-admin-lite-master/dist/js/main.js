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

  //Art 57
  $("#57-sim").click(function() {
    if ($("#57-sim").is(":checked")) {
      $("#57-q").removeClass("disp");
      $("#57-q").addClass("block-disp");
    }
  });
  $("#57-nao").click(function() {
    if ($("#57-nao").is(":checked")) {
      $("#57-q").removeClass("block-disp");
      $("#57-q").addClass("disp");
    }
  });

  $("#57-nao2").click(function() {
    if ($("#57-nao2").is(":checked")) {
      $("#57-q").removeClass("block-disp");
      $("#57-q").addClass("disp");
    }
  });

  //Art 69
  $("#69-sim").click(function() {
    if ($("#69-sim").is(":checked")) {
      $("#69-q").removeClass("disp");
      $("#69-q").addClass("block-disp");
    }
  });
  $("#69-nao").click(function() {
    if ($("#69-nao").is(":checked")) {
      $("#69-q").removeClass("block-disp");
      $("#69-q").addClass("disp");
    }
  });

  $("#69-nao2").click(function() {
    if ($("#69-nao2").is(":checked")) {
      $("#69-q").removeClass("block-disp");
      $("#69-q").addClass("disp");
    }
  });

  //Art 65
  $("#65-sim").click(function() {
    if ($("#65-sim").is(":checked")) {
      $("#65-q").removeClass("disp");
      $("#65-q").addClass("block-disp");
    }
  });
  $("#65-nao").click(function() {
    if ($("#65-nao").is(":checked")) {
      $("#65-q").removeClass("block-disp");
      $("#65-q").addClass("disp");
    }
  });

  $("#65-nao2").click(function() {
    if ($("#65-nao2").is(":checked")) {
      $("#65-q").removeClass("block-disp");
      $("#65-q").addClass("disp");
    }
  });

  //Art 7
  $("#7-sim").click(function() {
    if ($("#7-sim").is(":checked")) {
      $("#7-q").removeClass("disp");
      $("#7-q").addClass("block-disp");
    }
  });
  $("#7-nao").click(function() {
    if ($("#7-nao").is(":checked")) {
      $("#7-q").removeClass("block-disp");
      $("#7-q").addClass("disp");
    }
  });

  $("#7-nao2").click(function() {
    if ($("#7-nao2").is(":checked")) {
      $("#7-q").removeClass("block-disp");
      $("#7-q").addClass("disp");
    }
  });

  //Art 8
  $("#8-sim").click(function() {
    if ($("#8-sim").is(":checked")) {
      $("#8-q").removeClass("disp");
      $("#8-q").addClass("block-disp");
    }
  });
  $("#8-nao").click(function() {
    if ($("#8-nao").is(":checked")) {
      $("#8-q").removeClass("block-disp");
      $("#8-q").addClass("disp");
    }
  });

  $("#8-nao2").click(function() {
    if ($("#8-nao2").is(":checked")) {
      $("#8-q").removeClass("block-disp");
      $("#8-q").addClass("disp");
    }
  });

  //Art 9
  $("#9-sim").click(function() {
    if ($("#9-sim").is(":checked")) {
      $("#9-q").removeClass("disp");
      $("#9-q").addClass("block-disp");
    }
  });
  $("#9-nao").click(function() {
    if ($("#9-nao").is(":checked")) {
      $("#9-q").removeClass("block-disp");
      $("#9-q").addClass("disp");
    }
  });

  $("#9-nao2").click(function() {
    if ($("#9-nao2").is(":checked")) {
      $("#9-q").removeClass("block-disp");
      $("#9-q").addClass("disp");
    }
  });

  //Art 11
  $("#11-sim").click(function() {
    if ($("#11-sim").is(":checked")) {
      $("#11-q").removeClass("disp");
      $("#11-q").addClass("block-disp");
    }
  });
  $("#11-nao").click(function() {
    if ($("#11-nao").is(":checked")) {
      $("#11-q").removeClass("block-disp");
      $("#11-q").addClass("disp");
    }
  });

  $("#11-nao2").click(function() {
    if ($("#11-nao2").is(":checked")) {
      $("#11-q").removeClass("block-disp");
      $("#11-q").addClass("disp");
    }
  });

  //Art 18
  $("#18-sim").click(function() {
    if ($("#18-sim").is(":checked")) {
      $("#18-q").removeClass("disp");
      $("#18-q").addClass("block-disp");
    }
  });
  $("#18-nao").click(function() {
    if ($("#18-nao").is(":checked")) {
      $("#18-q").removeClass("block-disp");
      $("#18-q").addClass("disp");
    }
  });

  $("#18-nao2").click(function() {
    if ($("#18-nao2").is(":checked")) {
      $("#18-q").removeClass("block-disp");
      $("#18-q").addClass("disp");
    }
  });

  //Art 42
  $("#42-sim").click(function() {
    if ($("#42-sim").is(":checked")) {
      $("#42-q").removeClass("disp");
      $("#42-q").addClass("block-disp");
    }
  });
  $("#42-nao").click(function() {
    if ($("#42-nao").is(":checked")) {
      $("#42-q").removeClass("block-disp");
      $("#42-q").addClass("disp");
    }
  });

  $("#42-nao2").click(function() {
    if ($("#42-nao2").is(":checked")) {
      $("#42-q").removeClass("block-disp");
      $("#42-q").addClass("disp");
    }
  });

  //Art 2
  $("#2-sim").click(function() {
    if ($("#2-sim").is(":checked")) {
      $("#2-q").removeClass("disp");
      $("#2-q").addClass("block-disp");
    }
  });
  $("#2-nao").click(function() {
    if ($("#2-nao").is(":checked")) {
      $("#2-q").removeClass("block-disp");
      $("#2-q").addClass("disp");
    }
  });

  $("#2-nao2").click(function() {
    if ($("#2-nao2").is(":checked")) {
      $("#2-q").removeClass("block-disp");
      $("#2-q").addClass("disp");
    }
  });

  //Art 17
  $("#17-sim").click(function() {
    if ($("#17-sim").is(":checked")) {
      $("#17-q").removeClass("disp");
      $("#17-q").addClass("block-disp");
    }
  });
  $("#17-nao").click(function() {
    if ($("#17-nao").is(":checked")) {
      $("#17-q").removeClass("block-disp");
      $("#17-q").addClass("disp");
    }
  });

  $("#17-nao2").click(function() {
    if ($("#17-nao2").is(":checked")) {
      $("#17-q").removeClass("block-disp");
      $("#17-q").addClass("disp");
    }
  });

  //Art 171
  $("#171-sim").click(function() {
    if ($("#171-sim").is(":checked")) {
      $("#171-q").removeClass("disp");
      $("#171-q").addClass("block-disp");
    }
  });
  $("#171-nao").click(function() {
    if ($("#171-nao").is(":checked")) {
      $("#171-q").removeClass("block-disp");
      $("#171-q").addClass("disp");
    }
  });

  $("#171-nao2").click(function() {
    if ($("#171-nao2").is(":checked")) {
      $("#171-q").removeClass("block-disp");
      $("#171-q").addClass("disp");
    }
  });

  //Art 15
  $("#15-sim").click(function() {
    if ($("#15-sim").is(":checked")) {
      $("#15-q").removeClass("disp");
      $("#15-q").addClass("block-disp");
    }
  });
  $("#15-nao").click(function() {
    if ($("#15-nao").is(":checked")) {
      $("#15-q").removeClass("block-disp");
      $("#15-q").addClass("disp");
    }
  });

  $("#15-nao2").click(function() {
    if ($("#15-nao2").is(":checked")) {
      $("#15-q").removeClass("block-disp");
      $("#15-q").addClass("disp");
    }
  });

  //Art 16
  $("#16-sim").click(function() {
    if ($("#16-sim").is(":checked")) {
      $("#16-q").removeClass("disp");
      $("#16-q").addClass("block-disp");
    }
  });
  $("#16-nao").click(function() {
    if ($("#16-nao").is(":checked")) {
      $("#16-q").removeClass("block-disp");
      $("#16-q").addClass("disp");
    }
  });

  $("#16-nao2").click(function() {
    if ($("#16-nao2").is(":checked")) {
      $("#16-q").removeClass("block-disp");
      $("#16-q").addClass("disp");
    }
  });

  //Art 11
  $("#11-sim").click(function() {
    if ($("#11-sim").is(":checked")) {
      $("#11-q").removeClass("disp");
      $("#11-q").addClass("block-disp");
    }
  });
  $("#11-nao").click(function() {
    if ($("#11-nao").is(":checked")) {
      $("#11-q").removeClass("block-disp");
      $("#11-q").addClass("disp");
    }
  });

  $("#11-nao2").click(function() {
    if ($("#11-nao2").is(":checked")) {
      $("#11-q").removeClass("block-disp");
      $("#11-q").addClass("disp");
    }
  });

  //Art 16
  $("#16-sim").click(function() {
    if ($("#16-sim").is(":checked")) {
      $("#16-q").removeClass("disp");
      $("#16-q").addClass("block-disp");
    }
  });
  $("#16-nao").click(function() {
    if ($("#16-nao").is(":checked")) {
      $("#16-q").removeClass("block-disp");
      $("#16-q").addClass("disp");
    }
  });

  $("#16-nao2").click(function() {
    if ($("#16-nao2").is(":checked")) {
      $("#16-q").removeClass("block-disp");
      $("#16-q").addClass("disp");
    }
  });

  //Art 174
  $("#174-sim").click(function() {
    if ($("#174-sim").is(":checked")) {
      $("#174-q").removeClass("disp");
      $("#174-q").addClass("block-disp");
    }
  });
  $("#174-nao").click(function() {
    if ($("#174-nao").is(":checked")) {
      $("#174-q").removeClass("block-disp");
      $("#174-q").addClass("disp");
    }
  });

  $("#174-nao2").click(function() {
    if ($("#174-nao2").is(":checked")) {
      $("#174-q").removeClass("block-disp");
      $("#174-q").addClass("disp");
    }
  });

  //Art 21
  $("#21-sim").click(function() {
    if ($("#21-sim").is(":checked")) {
      $("#21-q").removeClass("disp");
      $("#21-q").addClass("block-disp");
    }
  });
  $("#21-nao").click(function() {
    if ($("#21-nao").is(":checked")) {
      $("#21-q").removeClass("block-disp");
      $("#21-q").addClass("disp");
    }
  });

  $("#21-nao2").click(function() {
    if ($("#21-nao2").is(":checked")) {
      $("#21-q").removeClass("block-disp");
      $("#21-q").addClass("disp");
    }
  });

  //Art 6
  $("#6-nao").click(function() {
    if ($("#6-nao").is(":checked")) {
      $("#6-q").removeClass("disp");
      $("#6-q").addClass("block-disp");
    }
  });
  $("#6-sim").click(function() {
    if ($("#6-sim").is(":checked")) {
      $("#6-q").removeClass("block-disp");
      $("#6-q").addClass("disp");
    }
  });

  $("#6-nao2").click(function() {
    if ($("#6-nao2").is(":checked")) {
      $("#6-q").removeClass("block-disp");
      $("#6-q").addClass("disp");
    }
  });

  //Art 212
  $("#212-sim").click(function() {
    if ($("#212-sim").is(":checked")) {
      $("#212-q").removeClass("disp");
      $("#212-q").addClass("block-disp");
    }
  });
  $("#212-nao").click(function() {
    if ($("#212-nao").is(":checked")) {
      $("#212-q").removeClass("block-disp");
      $("#212-q").addClass("disp");
    }
  });

  $("#212-nao2").click(function() {
    if ($("#212-nao2").is(":checked")) {
      $("#212-q").removeClass("block-disp");
      $("#212-q").addClass("disp");
    }
  });

  //Art 53
  $("#53-sim").click(function() {
    if ($("#53-sim").is(":checked")) {
      $("#53-q").removeClass("disp");
      $("#53-q").addClass("block-disp");
    }
  });
  $("#53-nao").click(function() {
    if ($("#53-nao").is(":checked")) {
      $("#53-q").removeClass("block-disp");
      $("#53-q").addClass("disp");
    }
  });

  $("#53-nao2").click(function() {
    if ($("#53-nao2").is(":checked")) {
      $("#53-q").removeClass("block-disp");
      $("#53-q").addClass("disp");
    }
  });

  //Art 224
  $("#224-sim").click(function() {
    if ($("#224-sim").is(":checked")) {
      $("#224-q").removeClass("disp");
      $("#224-q").addClass("block-disp");
    }
  });
  $("#224-nao").click(function() {
    if ($("#224-nao").is(":checked")) {
      $("#224-q").removeClass("block-disp");
      $("#224-q").addClass("disp");
    }
  });

  $("#224-nao2").click(function() {
    if ($("#224-nao2").is(":checked")) {
      $("#224-q").removeClass("block-disp");
      $("#224-q").addClass("disp");
    }
  });

  //Art 52
  $("#52-sim").click(function() {
    if ($("#52-sim").is(":checked")) {
      $("#52-q").removeClass("disp");
      $("#52-q").addClass("block-disp");
    }
  });
  $("#52-nao").click(function() {
    if ($("#52-nao").is(":checked")) {
      $("#52-q").removeClass("block-disp");
      $("#52-q").addClass("disp");
    }
  });

  $("#52-nao2").click(function() {
    if ($("#52-nao2").is(":checked")) {
      $("#52-q").removeClass("block-disp");
      $("#52-q").addClass("disp");
    }
  });

  //Art 522
  $("#522-sim").click(function() {
    if ($("#522-sim").is(":checked")) {
      $("#522-q").removeClass("disp");
      $("#522-q").addClass("block-disp");
    }
  });
  $("#522-nao").click(function() {
    if ($("#522-nao").is(":checked")) {
      $("#522-q").removeClass("block-disp");
      $("#522-q").addClass("disp");
    }
  });

  $("#522-nao2").click(function() {
    if ($("#522-nao2").is(":checked")) {
      $("#522-q").removeClass("block-disp");
      $("#522-q").addClass("disp");
    }
  });

  //Art 23z
  $("#23z-sim").click(function() {
    if ($("#23z-sim").is(":checked")) {
      $("#23z-q").removeClass("disp");
      $("#23z-q").addClass("block-disp");
    }
  });
  $("#23z-nao").click(function() {
    if ($("#23z-nao").is(":checked")) {
      $("#23z-q").removeClass("block-disp");
      $("#23z-q").addClass("disp");
    }
  });

  $("#23z-nao2").click(function() {
    if ($("#23z-nao2").is(":checked")) {
      $("#23z-q").removeClass("block-disp");
      $("#23z-q").addClass("disp");
    }
  });

  //Art 62
  $("#62-nao").click(function() {
    if ($("#62-nao").is(":checked")) {
      $("#62-q").removeClass("disp");
      $("#62-q").addClass("block-disp");
    }
  });
  $("#62-sim").click(function() {
    if ($("#62-sim").is(":checked")) {
      $("#62-q").removeClass("block-disp");
      $("#62-q").addClass("disp");
    }
  });

  $("#62-nao2").click(function() {
    if ($("#62-nao2").is(":checked")) {
      $("#62-q").removeClass("block-disp");
      $("#62-q").addClass("disp");
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

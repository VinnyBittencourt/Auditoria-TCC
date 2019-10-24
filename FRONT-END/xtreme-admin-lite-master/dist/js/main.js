$(document).ready(function() {

  //Adicionar e remover questões
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

  //   // ajustando foco
  //   var elem = this;
  //   setTimeout(function () {
  //       // mudo a posição do seletor
  //       elem.selectionStart = elem.selectionEnd = 10000;
  //   }, 0);
  //   // reaplico o valor para mudar o foco
  //   var currentValue = $(this).val();
  //   $(this).val('');
  //   $(this).val(currentValue);
  //   });

  //   $("#cpfcnpj").keypress(function(){
  //     $("#cpfcnpj").unmask();
  //     var tamanho = $("#cpfcnpj").val().length;
  
  //     if(tamanho == 11){
  //         $("#cpfcnpj").mask("999.999.99-99");
  //     } else if(tamanho == 14){
  //         $("#cpfcnpj").mask("99.999.999/9999-99");
  //     }                   
  //   });
    $("#cnpjId").on("input", function () {
      $("#cnpjId").mask("99.999.999/9999-99");
    });


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
  $("#nome").on("input", function () {
    var regexp = /[^a-zA-Z áéíóúÁÉÍÓÚÃÕãõ'çâÂêÊîÎôÔûÛäëïöüÄËÏÖÜ]/g;
    if (this.value.match(regexp)) {
        $(this).val(this.value.replace(regexp, ''));
    }
  });

  //Apenas números
  $("#numero").on("input", function () {
    var regexp = /[^0-9]/g;
    if (this.value.match(regexp)) {
        $(this).val(this.value.replace(regexp, ''));
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

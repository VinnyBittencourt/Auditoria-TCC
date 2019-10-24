$(document).ready(function() {
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
});

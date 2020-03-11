$(function() {
  $("#btnAbout").on("click", function() {
    $("#aboutMore").toggle();
  });
  $("#btnAboutClose").on("click", function() {
    $("#aboutMore").toggle();
  });
  $("#btnFluffy").on("click", function() {
    $("#fluffyMore").toggle();
  });
  $("#btnFluffyClose").on("click", function() {
    $("#fluffyMore").toggle();
  });
  $("#btnPower").on("click", function() {
    $("#powerMore").toggle();
  });
  $("#btnPowerClose").on("click", function() {
    $("#powerMore").toggle();
  });
  $("#imgFluffy").hover(function() {
    $("#fluffyModal").modal({
      show: true,
      backdrop: false
    });
  });
  $("#fluffyModal").on("click", function() {
    $("#fluffyModal").remove();
  });
});

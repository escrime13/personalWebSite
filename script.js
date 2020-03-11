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
  $("#btnFluffyModal").on("click", function() {
    $("#fluffyModal").remove();
  });
  $("#btnExperience").on("click", function() {
    $("#experienceMore").toggle();
  });
  $("#btnExperienceClose").on("click", function() {
    $("#powerMore").toggle();
  });
});

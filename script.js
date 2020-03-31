$(function() {
  $("#btnAbout").on("click", function() {
    if ($("#aboutMe").css("min-height") >= "100vh") {
      $("#aboutMe").css("min-height", "40vh");
      $("#aboutMore").toggle();
    } else if ($("#aboutMe").css("min-height") <= "99vh") {
      $("#aboutMe").css("min-height", "100vh");
      $("#aboutMore").toggle();
    }
  });

  $("#btnAboutClose").on("click", function() {
    $("#aboutMore").toggle();
    $("#aboutMe").css("min-height", "100vh");
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
    $("#experienceMore").toggle();
  });
});

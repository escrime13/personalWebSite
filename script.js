$(function () {
  $("#name").hide().slideDown(1000);
  $("#fullStack").hide().delay(500).slideDown(1000);
  $("#webDev").hide().delay(1000).slideDown(1000);
  $("#symboleV")
    .delay(3000)
    .animate({ "margin-top": "+=100px" }, 1000)
    .animate({ "margin-top": "-=100px" }, 1000)
    .animate({ "margin-top": "+=100px" }, 1000)
    .animate({ "margin-top": "-=100px" }, 1000)
    .animate({ "margin-top": "+=100px" }, 1000)
    .animate({ "margin-top": "-=100px" }, 1000);

  $("#btnAbout").on("click", function () {
    if ($("#aboutMe").css("min-height") >= "100vh") {
      $("#aboutMe").css("min-height", "40vh");
      $("#aboutMore").toggle();
    } else if ($("#aboutMe").css("min-height") <= "99vh") {
      $("#aboutMe").css("min-height", "100vh");
      $("#aboutMore").toggle();
    }
  });
  $(".vibratingImage").mouseenter(function () {
    $(this).addClass("vibrate-1");
  });
  $(".vibratingImage").mouseleave(function () {
    $(this).stop().removeClass("vibrate-1");
  });
  $(".imgSkills").mouseenter(function () {
    $(this).addClass("rotate-scale-up");
  });
  $(".imgSkills").mouseleave(function () {
    $(this).stop().removeClass("rotate-scale-up");
  });

  $("#btnAboutClose").on("click", function () {
    $("#aboutMore").toggle();
    $("#aboutMe").css("min-height", "100vh");
  });

  $("#btnFluffy").on("click", function () {
    $("#fluffyMore").toggle();
  });
  $("#btnFluffyClose").on("click", function () {
    $("#fluffyMore").toggle();
  });
  $("#btnPower").on("click", function () {
    $("#powerMore").toggle();
  });
  $("#btnPowerClose").on("click", function () {
    $("#powerMore").toggle();
  });
  $("#btnExperience").on("click", function () {
    $("#experienceMore").toggle();
  });
  $("#btnExperienceClose").on("click", function () {
    $("#experienceMore").toggle();
  });
  $("#btnMeetFluffy").on("click", function () {
    $("#meetMyFluffy").toggle();
    $("#pictureLeaAndParker").addClass("bounce-in-top");
  });
});

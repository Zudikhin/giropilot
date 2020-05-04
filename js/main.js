$(document).ready(function () {
  "use strict";

  $(".header__mobile-btn").click(function () {
    $(".header__mobile-menu").toggleClass("active");
    if ($(".header__mobile-menu").hasClass("active")) {
      $(".header__fake-modal").css("display", "block");
      $("body").css("overflow", "hidden");
    } else {
      $(".header__fake-modal").css("display", "none");
      $("body").css("overflow", "auto");
    }
  });

  $(".header__fake-modal").click(function () {
    $(this).css("display", "none");
    $(".header__mobile-menu").removeClass("active");
    $("body").css("overflow", "auto");
  });

  $(".header__mobile-menu button").click(function () {
    $(".header__mobile-menu").removeClass("active");
    $(".header__fake-modal").css("display", "none");
    $("body").css("overflow", "auto");
  });
});

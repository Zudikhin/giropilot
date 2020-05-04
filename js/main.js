$(document).ready(function () {
  "use strict";

  $(".header__mobile-btn").click(function () {
    $(".header__mobile-menu").toggleClass("active");
    $("body").toggleClass("notouch");
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
    $("body").removeClass("notouch");
    $(".header__mobile-menu").removeClass("active");
    $("body").css("overflow", "auto");
    $(".header__mobile-cart-content").removeClass("active");
  });

  $(".header__mobile-menu button").click(function () {
    $(".header__mobile-menu").removeClass("active");
    $("body").removeClass("notouch");
    $(".header__fake-modal").css("display", "none");
    $("body").css("overflow", "auto");
  });

  $(".header__mobile-cart button").click(function () {
    $(".header__mobile-cart-content").toggleClass("active");
    if ($(".header__mobile-cart-content").hasClass("active")) {
      $(".header__fake-modal").css("display", "block");
      $("body").css("overflow", "hidden");
    } else {
      $(".header__fake-modal").css("display", "none");
      $("body").css("overflow", "auto");
    }
  });

  $(".header__mobile-cart-content .cart__close").click(function () {
    $(".header__mobile-cart-content").removeClass("active");
    $(".header__fake-modal").css("display", "none");
    $("body").css("overflow", "auto");
  });
});

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
    $(".cart__modal__content").removeClass("active");
    $(".open__modal_cart").removeClass("active");
  });

  $(".header__mobile-menu button").click(function () {
    $(".header__mobile-menu").removeClass("active");
    $("body").removeClass("notouch");
    $(".header__fake-modal").css("display", "none");
    $("body").css("overflow", "auto");
  });

  $(".header__mobile-cart button").click(function () {
    $(".header__mobile-cart-content").toggleClass("active");
    $("body").toggleClass("notouch");
    if ($(".header__mobile-cart-content").hasClass("active")) {
      $(".header__fake-modal").css("display", "block");
      $("body").css("overflow", "hidden");
    } else {
      $(".header__fake-modal").css("display", "none");
      $("body").css("overflow", "auto");
    }
  });

  $(".navigation__content-cart").click(function () {
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
    $("body").removeClass("notouch");
    $("body").css("overflow", "auto");
  });

  $(".main-slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });

  $(".quantity-arrow-minus").click(function () {
    var currentNum = $(this).siblings().first();
    if (currentNum.val() > 1) {
      currentNum.val(+currentNum.val() - 1);
    }
  });

  $(".quantity-arrow-plus").click(function () {
    var currentNum = $(this).siblings().first();
    currentNum.val(+currentNum.val() + 1);
  });

  $(".cart__modal__content .content .item .text .title").each(function () {
    var defaultText = $(this)[0].innerHTML;
    if (defaultText.length > 30) {
      var shortText =
        $.trim(defaultText).substring(0, 21).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(shortText);
    }
  });

  $(".open__modal_cart").click(function () {
    $(this).addClass("active");
    $(".cart__modal__content").addClass("active");
    $(".header__fake-modal").css("display", "block");
  });

  $(".registration__close").click(function () {
    $(".open__modal_cart").removeClass("active");
    $(".cart__modal__content").removeClass("active");
    $(".header__fake-modal").css("display", "none");
  });
});

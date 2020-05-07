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

  $(".tabs__list").on("click", "li:not(.active)", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var numberAttr = $(this).attr("data-tab");
    $(".tabs-content").removeClass("active");
    $(".tabs-content[data-tab='" + numberAttr + "']").addClass("active");
  });

  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 5,
      dots: false,
      focusOnSelect: false,
      infinite: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });

  $(".dropdown__btn").click(function () {
    $(this).toggleClass("active");
    $(".dropdown").toggleClass("active");
  });
});

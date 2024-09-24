$(function () {
  var swiper2 = new Swiper(".thumbnail-slider-top", {
    slidesPerView: 5,
    spaceBetween: 0,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
  var swiper = new Swiper(".main-slider-top", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
    thumbs: {
      swiper: swiper2,
    },
  });
  var swiper3 = new Swiper(".list-video", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 17,
      },
    },
  });
  var swiper4 = new Swiper(".slider-video-customer", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper5 = new Swiper(".slider-thumbnail-product", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },
  });
  var swiper6 = new Swiper(".slider-product-viewed", {
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  var swiper7 = new Swiper(".slider-specifiations-thumbnail", {
    slidesPerView: 5,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper8 = new Swiper(".slider-specifiations-image", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    thumbs: {
      swiper: swiper7,
    },
  });
  $('.button_action .button').on('click', function(){
    var data_scroll = $(this).attr('data-scroll');
    $('html, body').animate({
        scrollTop: $("#"+data_scroll).offset().top - 20
    }, 500);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() < 300) {
      $(".btn-back-to-top, .btn-back-to-top-mobile").addClass("hidden");
    } else {
      $(".btn-back-to-top").removeClass("hidden");
    }
  });
  $(".btn-back-to-top, .btn-back-to-top-mobile").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  $(".btn-search-m button").click(function () {
    $(".header-bottom-mobile, .btn-search-m input").toggleClass("active-search");
    $(".btn-search-m input").focus();
  });
  $(".btn-show").on("click", function () {
    $(this).siblings(".info-more-content").slideToggle("slow");
  });
  $("#btn-hamburger, .list-menu-sns-fixed .btn-menu-hambg").on("click", function () {
    $(".menu-aside-page").toggleClass("show");
    $("body").toggleClass("overflow-hidden-x menu-child-show");
  });
  $(".menu-aside-page .backdrop").on("click", function () {
    $(".menu-aside-page").removeClass("show");
    $("body").removeClass("overflow-hidden-x");
  });
  $(".popup-backdrop, .popup-child .close, btn-done").on("click", function () {
    $("body").removeClass("overflow-hidden");
    $("#guideModal").removeClass("show");
    $("#initiativeModal").removeClass("show");
    $("#topicModal").removeClass("show");
    $("#sendSuccess").removeClass("show");
  });
  var lastScrollTop = 100;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $(".header-fixed").css("opacity", 0);
      $(".header-fixed").css("visibility", "hidden");
    } else {
      if (st >= 120) {
        $(".header_middle").addClass("header-fixed");
        $(".header-fixed").css("visibility", "visible");
        $(".header-fixed").css("opacity", 1);
      } else {
        $(".header_middle").removeClass("header-fixed");
        $(".header-fixed").css("visibility", "hidden");
        $(".header-fixed").css("opacity", 0);
      }
    }
    lastScrollTop = st;
  });
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".header-bottom-mobile").addClass("show-a");
    } else {
      $(".header-bottom-mobile").removeClass("show-a");
    }
  });
  $('.detailed-description div').on('click', function(){
    $(this).parent('.detailed-description .btn-view-all').toggleClass('active');
    $(this).siblings('.detailed-description .content').toggleClass('active');
  });
});

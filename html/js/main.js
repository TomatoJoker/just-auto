"use strict";

var slideHeroLenght = jQuery('.js-hero-slide').length,
  counterHtml = '';
// console.log(slideHeroLenght);
for (var i = 1; i <= slideHeroLenght; i++) {
  counterHtml += "<li class=\"hero__count js-counter-slide\"><span>0".concat(i, "</span></li>");
}
$('.js-counter').html(counterHtml);
$(function ($) {
  $('.js-button-dropdown').on('click', function () {
    $(this).toggleClass('is-active').closest('.js-dropdown-block').find('.js-dropdown-item').toggleClass('is-open');
  });
  function burger(button) {
    var overlay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-overlay';
    $(button).toggleClass('is-active');
    $('.js-header-modal').toggleClass('is-open');
    $(overlay).toggleClass('is-visible');
    $('body').toggleClass('no-scroll');
  }
  $('.js-burger-menu').on('click', function () {
    burger(this);
  });
  $('.js-overlay').on('click', function () {
    burger('.js-burger-menu', this);
  });
  $('[data-fancybox]').fancybox({
    smallBtn: false,
    toolbar: false
  });
  $('[data-fancybox="images"]').fancybox({
    btnTpl: {
      arrowRight: '<button data-fancybox-next="" class="fancybox-button modal__arrow modal__arrow-next">' + '<div class="arrow">' + '    <svg class="icon" width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><path d="M.518.518a1.77 1.77 0 0 0 0 2.503l8.761 8.761-8.76 8.761a1.77 1.77 0 0 0 2.502 2.503l10.012-10.012a1.77 1.77 0 0 0 0-2.503L3.021.518a1.77 1.77 0 0 0-2.503 0Z"/></svg>' + '</div>' + '</button>',
      arrowLeft: '<button data-fancybox-prev="" class="fancybox-button modal__arrow modal__arrow-prev">' + '<div class="arrow">' + '    <svg class="icon" width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.034 23.046a1.77 1.77 0 0 0 0-2.502l-8.762-8.762 8.761-8.761A1.77 1.77 0 0 0 10.532.518L.518 10.531a1.77 1.77 0 0 0 0 2.503l10.013 10.012a1.77 1.77 0 0 0 2.502 0Z"></path></svg>' + '</div>' + '</button>',
      smallBtn: '<button type="button" data-fancybox-close="" class="fancybox-button modal__close fancybox-close-small">' + '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">' + '<path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>' + '</svg>' + '</button>'
    },
    smallBtn: true
  });
  // $('.js-lightbox').on('click', function () {
  //    $(this).fancybox();
  // });
  var counter = '.js-counter',
    heroSlider = '.js-hero-slider',
    startSlide = 2,
    counterItem = '.js-counter-slide',
    dotsContainer = '.js-dots',
    getSpeed = getComputedStyle(document.documentElement).getPropertyValue('--speed'),
    timeFunction = getComputedStyle(document.documentElement).getPropertyValue('--time-function'),
    speed = getSpeed.slice(0, getSpeed.length - 2);
  console.log(speed);
  // console.log(typeof timeFunction);
  $(heroSlider).slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    initialSlide: startSlide - 1,
    asNavFor: counter,
    appendArrows: dotsContainer,
    appendDots: dotsContainer,
    dots: true,
    dotsClass: 'hero__dots',
    swipe: false,
    speed: speed * 1.3,
    cssEase: timeFunction,
    prevArrow: '<button class="hero__arrow hero__arrow-left"><svg class="icon" width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.034 23.046a1.77 1.77 0 0 0 0-2.502l-8.762-8.762 8.761-8.761A1.77 1.77 0 0 0 10.532.518L.518 10.531a1.77 1.77 0 0 0 0 2.503l10.013 10.012a1.77 1.77 0 0 0 2.502 0Z"/></svg></button>',
    nextArrow: '<button class="hero__arrow hero__arrow-right"><svg class="icon" width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><path d="M.518.518a1.77 1.77 0 0 0 0 2.503l8.761 8.761-8.76 8.761a1.77 1.77 0 0 0 2.502 2.503l10.012-10.012a1.77 1.77 0 0 0 0-2.503L3.021.518a1.77 1.77 0 0 0-2.503 0Z"/></svg></button>',
    waitForAnimate: false,
    accessibility: false
  });
  $(counter).slick({
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: startSlide - 1,
    swipe: false,
    touchMove: false,
    accessibility: false
  });
  counterClick(counter);
  counterClick(heroSlider);
  function counterClick(slider) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : counterItem;
    $("".concat(el)).on("click", function () {
      $(counterItem).removeClass('slick-current');
      var index = $(this).attr("data-slick-index");
      $(slider).slick("slickGoTo", index);
      $(counterItem).eq(index).addClass('slick-current');
    });
  }
});
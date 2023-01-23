"use strict";

var slideHeroLenght = jQuery('.js-hero-slide').length,
  counterHtml = '';
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
  var arrowRight = '<button data-fancybox-next="" class="fancybox-button modal__arrow modal__arrow-next">' + '   <div class="arrow">' + arrowRightSvg + '   </div>' + '</button>',
    arrowLeft = '<button data-fancybox-prev="" class="fancybox-button modal__arrow modal__arrow-prev">' + '   <div class="arrow">' + arrowLeftSvg + '   </div>' + '</button>',
    iconClose = '<button type="button" data-fancybox-close="" class="fancybox-button modal__close fancybox-close-small">' + '   <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">' + closeSvg + '   </svg>' + '</button>';
  modal('modal__image-slide');
  function modal(slideClass) {
    var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : iconClose;
    var arrowRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arrowRight;
    var arrowLeft = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arrowLeft;
    $('[data-fancybox]').fancybox({
      smallBtn: false,
      toolbar: false
    });
    $('.js-lightbox-wrapper').each(function () {
      $(this).find('.js-lightbox').fancybox({
        slideClass: slideClass,
        btnTpl: {
          arrowRight: arrowRight,
          arrowLeft: arrowLeft,
          smallBtn: close
        },
        smallBtn: true
      });
    });
  }
  $('.js-video-preview').on('click', function () {
    var src = $(this).attr('data-id');
    $.fancybox.open({
      src: "https://www.youtube.com/embed/".concat(src),
      smallBtn: false,
      toolbar: false,
      youtube: {
        autoplay: 1,
        mute: 1
      }
      // afterShow: function( instance, current) {
      //     frame = $('.fancybox-container').find('iframe');
      //     src = frame.attr('src');
      //     let noMute = src.replace('&mute=1', '');
      //     frame.attr('src', noMute);
      // }
    });
  });

  var counter = '.js-counter',
    heroSlider = '.js-hero-slider',
    startSlide = 1,
    dotsContainer = '.js-dots',
    counterItem = '.js-counter-slide',
    getSpeed = getComputedStyle(document.documentElement).getPropertyValue('--speed'),
    timeFunction = getComputedStyle(document.documentElement).getPropertyValue('--time-function'),
    speed = getSpeed.slice(0, getSpeed.length - 2);
  // console.log(speed);
  // console.log(typeof timeFunction);
  if ($(heroSlider).length) {
    $(heroSlider).slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      initialSlide: startSlide - 1,
      asNavFor: counter,
      appendArrows: $(dotsContainer),
      appendDots: $(dotsContainer),
      dots: true,
      dotsClass: 'dots__block',
      swipe: false,
      speed: speed * 1.3,
      cssEase: timeFunction,
      prevArrow: '<button type="button" class="dots__arrow dots__arrow-left">' + arrowLeftSvg + '</button>',
      nextArrow: '<button type="button" class="dots__arrow dots__arrow-right">' + arrowRightSvg + '</button>',
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
  }
  function counterClick(slider) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : counterItem;
    $("".concat(el)).on("click", function () {
      $(counterItem).removeClass('slick-current');
      var index = $(this).attr("data-slick-index");
      $(slider).slick("slickGoTo", index);
      $(counterItem).eq(index).addClass('slick-current');
    });
  }
  var sliderFree = '.js-slide-free';
  if ($(sliderFree).length) {
    $(sliderFree).slick({
      infinite: true,
      swipeToSlide: true,
      slidesToShow: 7,
      variableWidth: true,
      waitForAnimate: false,
      accessibility: true,
      speed: speed * 1.3,
      cssEase: timeFunction,
      // initialSlide: Math.round(centerSlide),
      rows: 2,
      slideToShow: 8,
      arrows: false
    });
    // let centerSlide = ($('.js-slide-free').find('.slick-slide:not(.slick-clone)').length) / 2;
  }

  var sliderReview = '.js-slider-review',
    sliderVideo = '.js-slider-video';
  if ($(sliderReview).length) {
    $(sliderReview).slick({
      slidesToShow: 2,
      speed: speed * 1.3,
      cssEase: timeFunction,
      waitForAnimate: false,
      prevArrow: '<button class="review__arrow review__arrow-left" type="button">' + arrowLeftSvg + '</button>',
      nextArrow: '<button class="review__arrow review__arrow-right" type="button">' + arrowRightSvg + '</button>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
  if ($(sliderVideo).length) {
    $(sliderVideo).slick({
      infinite: false,
      dotsClass: 'dots__block',
      waitForAnimate: false,
      speed: speed * 1.3,
      cssEase: timeFunction,
      slidesToShow: 2,
      arrows: true,
      appendArrows: $('.js-video-dots'),
      appendDots: $('.js-video-dots'),
      prevArrow: '<button type="button" class="dots__arrow dots__arrow-left">' + arrowLeftSvg + '</button>',
      nextArrow: '<button type="button" class="dots__arrow dots__arrow-right">' + arrowRightSvg + '</button>',
      dots: true,
      responsive: [{
        breakpoint: 540,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
  var sliderVideoWork = '.js-slider-video-our-work';
  if ($(sliderVideoWork).length) {
    $(sliderVideoWork).slick({
      slidesToShow: 6,
      waitForAnimate: false,
      speed: speed * 1.3,
      cssEase: timeFunction,
      infinite: false,
      arrows: false,
      swipeToSlide: true,
      responsive: [{
        breakpoint: 1640,
        settings: {
          slidesToShow: 5.3
        }
      }, {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4.3
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.4
        }
      }, {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.6
        }
      }]
    });
  }
  var itemVideoPage = '.js-our-work-item';
  $('.js-btn-load').hide();
  showCard(56, 1641);
  showCard(54, 1201, 1640);
  showCard(25, 1001, 1200);
  showCard(24, 541, 1000);
  showCard(10, 0, 541);
  btnShowItem(itemVideoPage);
  // load more for page OurWork

  var itemReviewPage = '.js-review-item';
  hideCard(3, itemReviewPage);
  btnShowItem(itemReviewPage);
  // load more for review page

  function btnShowItem(selectorItem) {
    $('.js-btn-load').on('click', function () {
      $(selectorItem).show();
      $(this).hide();
    });
  } // hide btn if small item
  function showCard(itemCard, breakpointMin) {
    var breakpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
    if (breakpointMin < window.innerWidth && window.innerWidth < breakpoint) {
      hideCard(itemCard);
    }
    $(window).resize(function () {
      if (breakpointMin < window.innerWidth && window.innerWidth < breakpoint) {
        hideCard(itemCard);
      }
    });
  } // media function for set breakpoint and item
  function hideCard(item) {
    var selectorItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : itemVideoPage;
    if ($(selectorItem).length > item) {
      $('.js-btn-load').show();
      $(selectorItem).hide();
      for (var _i = 1; _i <= item; _i++) {
        $(selectorItem).eq(_i - 1).show();
      }
    }
  } // hide item and show btn if many item

  $('.js-accordion-btn').on('click', function () {
    $(this).closest('.js-accordion').toggleClass('is-open').find('.js-accordion-item').slideToggle(speed * 0.90);
  });
});
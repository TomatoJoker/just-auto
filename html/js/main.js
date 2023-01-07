"use strict";

$(function ($) {
  $('.js-button-dropdown').on('click', function () {
    $(this).toggleClass('is-active').closest('.js-dropdown-block').find('.js-dropdown-item').toggleClass('is-open');
  });
  function burger(button) {
    var overlay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-overlay';
    $(button).toggleClass('is-active');
    $('.js-header-modal').toggleClass('is-open');
    $(overlay).toggleClass('is-visible');
  }
  $('.js-burger-menu').on('click', function () {
    burger(this);
  });
  $('.js-overlay').on('click', function () {
    burger('.js-burger-menu', this);
  });
});
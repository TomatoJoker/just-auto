"use strict";

$(function () {
  $('.js-button-dropdown').on('click', function () {
    $(this).closest('.js-dropdown-block').toggleClass('is-open');
  });
});
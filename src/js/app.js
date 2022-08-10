import * as functions from './modules/functions.js';
import $ from 'jquery';

// Checking if browsers supports .webp
functions.isWebp();

$(function () {
  //* Popup

  $('.specs__btn').on('click', (e) => {
    e.preventDefault();
    console.log(`clicked`);
  });
});

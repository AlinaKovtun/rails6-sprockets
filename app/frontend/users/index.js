import 'bootstrap';
import $ from 'jquery';

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
})

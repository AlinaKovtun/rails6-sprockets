import 'bootstrap';
import $ from 'jquery';
import './greeting';

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
})

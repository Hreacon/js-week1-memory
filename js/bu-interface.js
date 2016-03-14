var replaceme = require("./../js/replaceme.js").replaceme;

$(document).ready(function() {
  $(".card").click(function() {
    $(this).removeClass('back');
    $(this).addClass('front');
  })
});

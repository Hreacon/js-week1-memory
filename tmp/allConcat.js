var gameBoard = require("./../js/game.js").gameBoard;

$(document).ready(function() {
  var width = 5;
  var height = 4;
  var cards = gameBoard(height,width);
  $(".gameBoard").css('width', width*124+"px");
  // index of cards is id of div/

  $(".back").click(function() {
    var selectedIndex = $(".selected").attr("id");
    var currentIndex = $(this).attr("id");
    if($(".selected").length === 1 && selectedIndex != currentIndex)
    {
      // already chosen a card to match
      if(cards[selectedIndex] === cards[currentIndex] && selectedIndex != currentIndex){
        //when two cards match..
        $(this).off('click');
        $('.selected').off('click');
        $('.selected').removeClass('selected');
      } else {
        //failure when two cards are chosen
        $(this).addClass('selected');
        window.setTimeout(function() {
          $('.selected').each(function(){
            $(this).removeClass('selected');
            $(this).removeClass('front');
            $(this).addClass('back');
            $(this).html('');
          });
        }, 500);

      }

    } else if ($('.selected').length === 2) {
        return false;
    } else {
      // first card chosen
      $(this).toggleClass('selected');
    }
    $('.moveCount').html( parseInt($('.moveCount').html())+1 );
    $(this).toggleClass('back');
    $(this).toggleClass('front');
    $(this).html(cards[$(this).attr("id")]);
  });
});

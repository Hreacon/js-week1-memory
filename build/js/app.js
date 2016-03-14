(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.gameBoard = function(height, width) {
    var board = $(".gameBoard");
    var size = height * width;
    var cards = [];
    for(var i = 0; i < size; i++)
    {
      var value = Math.floor(Math.random() * size/2)+1;
      var count = 2;
      while(count > 1) {
        count = 0;
        value = Math.floor(Math.random() * size/2)+1;
        for(var o = 0; o < cards.length; o++)
        {
          if(cards[o] === value)
            count++;
        }
      }
      cards[i] = value;
      board.append("<div class='card back' id='"+i+"'></div>");
    }
    return cards;
};

},{}],2:[function(require,module,exports){
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

},{"./../js/game.js":1}]},{},[2]);

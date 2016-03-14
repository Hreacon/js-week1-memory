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

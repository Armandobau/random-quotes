$(document).ready(function() {
  getQuote();

  var myQuote;
  var myAuthor;
    
  $('#doQuote').on('click', getQuote);
  $('#twitter').on('click', function() {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + myQuote + '" ' + myAuthor));  
  });
});


function getQuote() {
  $.ajax({
        headers: {
            "X-Mashape-Key": "9vxa1rAvv5mshg6oZmGc1jFbEl6Up1QCkdejsnAoNlGKLx11bj",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(response) {
            var result = JSON.parse(response);
            myQuote = result.quote;
            myAuthor = result.author;
            $('#quote').html('"' +result.quote+ '"');
            $('#author').html('- ' +result.author);
        }
  });
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
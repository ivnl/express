$(document).ready(function() {
    console.log("script.js loaded");
});

function one() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);
}

function update(response) {
  $('#log').prepend('<p>' + $('#response').html() + '</p>');
  $('#response').html(JSON.stringify(response.quoteText));
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}
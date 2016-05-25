var DEFAULT_QUOTE = {
  quote: "Ohai, nice to see you",
  author: "Alex"
};

var bubble = null;
var bubbleTimer = null;
var currentQuote = DEFAULT_QUOTE;
var quoteCategories = null;
var quoteCategoriesCount = 0;

$(document).ready(function() {
  site.requestCategories();
  site.requestQuote();

  $('#me').on('click', function(event) {
    event.preventDefault();

    site.showBubble();
  });

});

var site = site || {};
site.showBubble = function() {

  site.hideBubble();

  bubble = $('<p class="speech">' + currentQuote.quote + '<span class="author"> - ' + currentQuote.author + '</span></p>');
  $('#me').append(bubble);

  bubbleTimer = setTimeout(function() {
    try {
      site.hideBubble();
    } catch ( e ) {}
  }, 5000);

  site.requestQuote();
};

site.hideBubble = function() {
  clearTimeout(bubbleTimer);
  if (bubble) {
    $(bubble).remove();
  }
}

site.requestQuote = function() {
  var url = "http://quotes.rest/qod.json";
  if (quoteCategories !== null) {
    var key = site.getRandomCategory();
    url = "http://quotes.rest/qod.json?category=" + key;
  }

  site.request(url, function(data) {
    if (data.contents && data.contents.quotes && data.contents.quotes.length > 0) {
      currentQuote = data.contents.quotes[0];
    } else {
      currentQuote = DEFAULT_QUOTE;
    }
  });
}

site.requestCategories = function() {
  site.request("http://quotes.rest/qod/categories.json", function(data) {
    if (data) {
      if (data.success && data.success.total) {
        quoteCategoriesCount = data.success.total;
      }
      if (data.contents && data.contents.categories) {
        quoteCategories = data.contents.categories;
      } else {
        quoteCategories = null;
      }
    } else {
      quoteCategories = null;
    }

  });
}

site.request = function(url, success) {
  var xmlHttp = null;
  try {
    xmlHttp = new XMLHttpRequest();
  } catch ( e ) {
    // Fehlerbehandlung, wenn die Schnittstelle vom Browser nicht unterstützt wird.
  }
  if (xmlHttp) {
    xmlHttp.open('GET', url, true);
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4) {
        success(JSON.parse(xmlHttp.responseText));
      }
    };
    xmlHttp.send(null);
  }

  return xmlHttp;
}

site.getRandomCategory = function() {
  var maxIteration = site.getRandomInt(0, quoteCategoriesCount);
  var iteration = 0;
  for (var key in quoteCategories) {
    if (iteration === maxIteration) {
      return key;
    }
    iteration++;
  }
}

site.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

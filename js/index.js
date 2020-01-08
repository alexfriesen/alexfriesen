var DEFAULT_QUOTE = 'Ohai, nice to see you'

var bubble = null
var bubbleTimer = null
var currentQuote = DEFAULT_QUOTE

$(document).ready(function() {
  $('#me').on('click', function(event) {
    event.preventDefault()

    site.showBubble()
  })

  setTimeout(function() {
    site.showBubble()
  }, 500)
})

var site = site || {}
site.showBubble = function() {
  site.hideBubble()

  bubble = $('<p class="speech">' + currentQuote + '</p>')
  $('#me').append(bubble)

  bubbleTimer = setTimeout(function() {
    try {
      site.hideBubble()
    } catch (e) {}
  }, 5000)

  site.activatePromotion()
}

site.hideBubble = function() {
  clearTimeout(bubbleTimer)
  if (bubble) {
    $(bubble).remove()
  }
}

site.activatePromotion = function() {
  currentQuote =
    'Check out my new CV Builder Tool: <a href="https://cv.alexfriesen.net/">cv.alexfriesen.de</a>'
}

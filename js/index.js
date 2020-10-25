const DEFAULT_QUOTE = 'Ohai, nice to see you'

const contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', event => {
  window.location.href = "mailto:info@alexfriesen.net";
});

// const greet = document.querySelector('#greet');
// const me = document.querySelector('.me');
// me.addEventListener('click', event => {
//   greet.show();
// });
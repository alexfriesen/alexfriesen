const contactButton = document.querySelector('#contact');
const content = document.querySelector('#content');

function locationHashChanged(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  let destination = (location.hash || '#').substring(1);
  if (!destination) {
    destination = 'home';
  }

  document.querySelectorAll(`section[attr-content-name]`).forEach(item => {
    item.style.display = 'none';
  });
  document.querySelector(`section[attr-content-name='${destination}']`).style.display = 'block';
  // console.log(destination);
  // content.show(destination);
}

window.onhashchange = locationHashChanged;


contactButton.addEventListener('click', event => {
  window.location.href = "mailto:info@alexfriesen.net";
});

function bootstrap() {
  locationHashChanged();

  // lazy load background animation
  import('./webgl.js');
}

// const greet = document.querySelector('#greet');
// const me = document.querySelector('.me');
// me.addEventListener('click', event => {
//   greet.show();
// });

bootstrap();

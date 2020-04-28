const DEFAULT_QUOTE = 'Ohai, nice to see you'

const app = new Vue({
  el: '#app',
  methods: {
    contact: () => {
      window.location.href = "mailto:info@alexfriesen.net";
    }
  }
});

<template>
  <header class="shadow">
    <Navigation />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Content class="text-center">
      &copy; 2021 - Alexander Friesen
    </Content>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Content from "./components/content.vue";
import Navigation from "./components/navigation.vue";

export default defineComponent({
  name: "App",
  components: {
    Navigation,
    Content,
  },
});
</script>

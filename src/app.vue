<template>
  <header class="shadow">
    <Navigation />
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer>
    <Content class="text-center">
      &copy; 2022 - Alexander Friesen
    </Content>
  </footer>
</template>

<script setup lang="ts">
import Content from "./components/content.vue";
import Navigation from "./components/navigation.vue";
</script>

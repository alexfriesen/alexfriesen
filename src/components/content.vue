<template>
  <section class="max-w-7xl mx-auto px-2 py-6 sm:px-6 lg:px-8">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Content",
});
</script>

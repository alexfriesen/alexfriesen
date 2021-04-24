<template>
  <a
    class="inline-flex gap-1 items-center justify-evenly px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-gray-200 hover:bg-gray-700 text-gray-800 hover:text-gray-200"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LinkButton",
});
</script>

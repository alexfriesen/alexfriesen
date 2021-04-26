<template>
  <span
    class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-gray-600 text-gray-300 rounded-full"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tag",
});
</script>

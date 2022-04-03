<template>
  <Content class="flex flex-col items-center">
    <ExclamationIcon class="block h-32 w-32" />
    <h2 class="text-5xl">
      NOT FOUND
    </h2>
  </Content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ExclamationIcon } from "@heroicons/vue/outline";

import Content from "./content.vue";

export default defineComponent({
  name: "NotFound",
  components: {
    Content,
    ExclamationIcon,
  },
});
</script>

<template>
  <Content class="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-6">
    <article
      v-for="item in items"
      :key="item.title"
      class="flex flex-col justify-between overflow-hidden rounded-lg bg-gray-800 shadow-lg"
    >
      <a v-if="item.img" :href="item.url">
        <img
          class="block h-auto w-full object-cover"
          loading="lazy"
          :alt="item.title"
          :src="item.img"
        />
      </a>

      <header class="leading-tight p-2 md:p-4">
        <h1 class="text-grey-darker font-bold text-xl mb-2">
          {{ item.title }}
        </h1>
        <p class="text-gray-300 text-base">
          {{ item.short }}
        </p>
      </header>

      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
        <div></div>
        <LinkButton v-if="item.url" target="_blank" :href="item.url">
          <span>Open</span>
          <ExternalLinkIcon class="inline w-6 h-6" />
        </LinkButton>
      </footer>
    </article>
  </Content>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Content from "./content.vue";
import LinkButton from "./link-button.vue";
// @ts-ignore
import { ExternalLinkIcon } from "@heroicons/vue/outline";

const items = [
  {
    title: "Mutiny - Core Game",
    short:
      "Recently I played around with Core and made a small Capture the Flag Map.",
    url: "https://www.coregames.com/games/e93347/mutiny",
    img:
      "https://manticoreprod.azureedge.net/screenshots/e933477adb104dde805e61c1e313fad0_0_1zZB5IHaEDWpug6HDuha6u_F05A65A64F46D0FD5D5A799C74560B3B3955348F.jpg",
  },
  {
    title: "Hello World",
    short:
      "Hi guys! In this blog I will be posting my Coding Adventures, stay tuned for more!",
    url: null,
    img: null,
  },
];

export default defineComponent({
  name: "Blog",
  components: {
    Content,
    LinkButton,
    ExternalLinkIcon,
  },
  data() {
    return {
      items,
    };
  },
  setup: () => {},
});
</script>

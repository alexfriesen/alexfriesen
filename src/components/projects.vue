<template>
  <Content class="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <article
      v-for="item in projects"
      :key="item.title"
      class="flex flex-col justify-between overflow-hidden rounded-lg bg-gray-800 shadow-lg"
    >
      <a :href="item.url">
        <img
          class="block h-auto w-full object-cover"
          loading="lazy"
          :alt="item.title"
          :src="item.img"
        />
      </a>

      <header class="leading-tight p-2 md:p-4">
        <h1 class="font-bold text-xl mb-2">
          <a
            class="no-underline hover:underline text-grey-darker"
            :href="item.url"
          >
            {{ item.title }}
          </a>
        </h1>
        <p class="text-gray-300 text-base">
          {{ item.text }}
        </p>
      </header>

      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
        <div class="flex flex-wrap gap-1">
          <Tag v-for="tag in item.tags" :key="tag">{{ tag }}</Tag>
        </div>
        <LinkButton target="_blank" :href="item.url">
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
import Tag from "./tag.vue";
import LinkButton from "./link-button.vue";
// @ts-ignore
import { ExternalLinkIcon } from "@heroicons/vue/outline";

const projects = [
  {
    title: "retro-scene",
    text: "😎🌄🌠",
    url: "https://github.com/alexfriesen/retro",
    img: "https://raw.githubusercontent.com/alexfriesen/retro/main/preview.gif",
    tags: ["three.js", "web component"],
  },
  {
    title: "CV Builder",
    text: "A simple CV-Builder made with Angular",
    url: "http://cv.alexfriesen.net/",
    img: "/images/cv.png",
    tags: ["angular", "print layout"],
  },
];

export default defineComponent({
  name: "Projects",
  components: {
    Tag,
    Content,
    LinkButton,
    ExternalLinkIcon,
  },
  data() {
    return {
      projects,
    };
  },
  setup: () => {},
});
</script>

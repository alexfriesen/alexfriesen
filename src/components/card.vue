<template>
  <article class="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
    <a href="#">
      <img
        alt="Placeholder"
        class="block h-auto w-full"
        src="https://picsum.photos/600/400/?random"
      >
    </a>

    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
      <h1 class="text-lg">
        <a
          class="no-underline hover:underline text-black"
          href="#"
        >
          Article Title
        </a>
      </h1>
      <p class="text-grey-darker text-sm">
        11/1/19
      </p>
    </header>

    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
      <a
        class="flex items-center no-underline hover:underline text-black"
        href="#"
      >
        <img
          alt="Placeholder"
          class="block rounded-full"
          src="https://picsum.photos/32/32/?random"
        >
        <p class="ml-2 text-sm">Author Name</p>
      </a>
      <a
        class="no-underline text-grey-darker hover:text-red-dark"
        href="#"
      >
        <span class="hidden">Like</span>
        <i class="fa fa-heart" />
      </a>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
});
</script>

<template>
  <retro-scene v-if="!motionReduced" class="h-96 w-full"></retro-scene>
  <div :class="!motionReduced ? 'retro-gradient' : ''">
    <Content class="relative">
      <figure
        :class="[
          !motionReduced ? '-mt-24' : '',
          'flex flex-col md:flex-row rounded-xl p-8 items-center justify-center shadow bg-gray-800',
        ]"
      >
        <img
          class="w-32 h-32 md:w-48 md:h-auto rounded-full"
          width="300"
          height="300"
          src="../assets/square300.jpg"
          alt="Me"
        />
        <div class="pt-6 md:px-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <!-- <p class="text-cyan-600">Alexander Friesen</p> -->
            <p class="text-gray-300">
              Hi there! 👋<br />
              I'm Alex a Software Developer specializing in web technologies.
            </p>
            <div class="py-2">
              <p class="text-gray-400">You can follow me on:</p>
              <div class="font-normal flex justify-evenly p-4">
                <a
                  class="inline-flex gap-1 items-center justify-evenly px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-gray-200 hover:bg-gray-700 text-gray-800 hover:text-gray-200"
                  href="https://github.com/alexfriesen/"
                  target="_blank"
                >
                  <GithubIcon class="w-6 h-6" />
                  Github
                </a>

                <a
                  class="inline-flex gap-1 items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-gray-200 hover:bg-gray-700 text-gray-800 hover:text-gray-200"
                  href="https://twitter.com/alexfreezor/"
                  target="_blank"
                >
                  <TwitterIcon class="w-6 h-6" />
                  Twitter
                </a>
              </div>
            </div>
          </figcaption>
        </div>
      </figure>
    </Content>
  </div>
</template>

<style scoped>
.retro-gradient {
  background-image: linear-gradient(
    to bottom,
    var(--pink-dark) 0%,
    var(--pink-dark) 5%,
    #374151 100%
  );
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";

import GithubIcon from "../assets/github.svg?component";
import TwitterIcon from "../assets/twitter.svg?component";
import Content from "./content.vue";

// get reduced motion media query
const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionReduced = ref(motionMediaQuery.matches);

// listen for media query changes
motionMediaQuery.addEventListener("change", (event) => {
  motionReduced.value = event.matches;
});

export default defineComponent({
  name: "Home",
  components: {
    GithubIcon,
    TwitterIcon,
    Content,
  },
  setup() {
    return {
      motionReduced,
    };
  },
});
</script>

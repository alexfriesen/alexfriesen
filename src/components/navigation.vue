<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <!--<img class="h-8 w-auto" src="./assets/logo.png" alt="Logo" />-->
            <h1 class="text-white">Alexander Friesen</h1>
          </div>
          <div class="hidden sm:flex sm:ml-6 flex-1 justify-between gap-4">
            <div class="flex gap-4">
              <router-link
                v-for="item in siteNavigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.href === currentRoute.path
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="
                  item.href === currentRoute.path ? 'page' : undefined
                "
              >
                {{ item.name }}
              </router-link>
            </div>
            <div class="flex gap-4">
              <router-link
                v-for="item in specialNavigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.href === currentRoute.path
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="
                  item.href === currentRoute.path ? 'page' : undefined
                "
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in siteNavigation"
          :key="item.name"
          :to="item.href"
          :class="[
            item.href === currentRoute.path
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.href === currentRoute.path ? 'page' : undefined"
        >
          {{ item.name }}
        </router-link>
        <router-link
          v-for="item in specialNavigation"
          :key="item.name"
          :to="item.href"
          :class="[
            item.href === currentRoute.path
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.href === currentRoute.path ? 'page' : undefined"
        >
          {{ item.name }}
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
// @ts-ignore // bug: https://github.com/tailwindlabs/heroicons/issues/252
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const siteNavigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

const specialNavigation = [{ name: "Contact", href: "/contact" }];

export default defineComponent({
  name: "Navigation",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    XIcon,
  },
  setup() {
    const currentRoute = computed(() => {
      return useRouter().currentRoute.value;
    });
    const open = ref(false);

    return {
      currentRoute,
      siteNavigation,
      specialNavigation,
      open,
    };
  },
});
</script>

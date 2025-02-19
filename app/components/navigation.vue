<template>
	<Disclosure v-slot="{ open }" as="nav" class="bg-gray-50 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700">
		<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div class="relative flex items-center justify-between h-16">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<DisclosureButton class="
						inline-flex
						items-center
						justify-center
						p-2
						rounded-md
						text-gray-400
						hover:text-white hover:bg-gray-700
						focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
						">
						<span class="sr-only">Open main menu</span>
						<Icon v-if="!open" name="heroicons:bars-3" class="block h-6 w-6" aria-hidden="true" />
						<Icon v-else name="heroicons:x-mark" class="block h-6 w-6" aria-hidden="true" />
					</DisclosureButton>
				</div>
				<div class="
					flex-1 flex
					items-center
					justify-center
					sm:items-stretch sm:justify-start
				">
					<div class="flex-shrink-0 flex items-center">
						<!--<img class="h-8 w-auto" src="./assets/logo.png" alt="Logo" />-->
						<h1 class="dark:text-white">Alexander Friesen</h1>
					</div>
					<div class="hidden sm:flex sm:ml-6 flex-1 justify-between gap-4">
						<div class="flex gap-4">
							<NavigationButton v-for="item in siteNavigation" :key="item.name" :url="item.href">
								{{ $t(item.name) }}
							</NavigationButton>
						</div>
						<div class="flex gap-4">
							<NavigationButton v-for="item in specialNavigation" :key="item.name" :url="item.href">
								{{ $t(item.name) }}
							</NavigationButton>
						</div>
					</div>
				</div>
			</div>
		</div>

		<DisclosurePanel class="sm:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1">
				<NavigationButton v-for="item in siteNavigation" :key="item.name" :url="item.href" class="flex">
					{{ $t(item.name) }}
				</NavigationButton>
				<NavigationButton v-for="item in specialNavigation" :key="item.name" :url="item.href" class="flex">
					{{ $t(item.name) }}
				</NavigationButton>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const siteNavigation = [
	{ name: 'home.title', href: '/' },
	{ name: 'snippets.title', href: '/snippets' },
	{ name: 'projects.title', href: '/projects' },
];

const specialNavigation = [{ name: 'contact.title', href: '/contact' }];
</script>

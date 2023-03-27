<template>
	<NuxtLink
		:href="url"
		:target="target"
		class="inline-block px-5 py-3 border border-transparent no-underline font-medium rounded-md bg-gray-200 hover:bg-gray-900 text-gray-800 hover:text-gray-200">
		<span class="flex gap-1 items-center justify-evenly">
			<Icon v-if="icon" :name="icon" class="w-6 h-6" />
			<slot />
			<span v-if="label">{{ label }}</span>
			<Icon v-if="external" name="heroicons:arrow-top-right-on-square-20-solid" class="w-6 h-6" />
		</span>
	</NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
	url: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		default: null,
	},
	icon: {
		type: String,
		default: null,
	}
});
const external = computed(() => { return props.url.startsWith('http') });
const target = computed(() => { return external.value ? '_blank' : '_self' });
</script>

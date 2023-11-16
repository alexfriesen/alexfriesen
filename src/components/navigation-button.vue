<template>
	<NuxtLink
		:to="localePath(props.url)"
		class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
		active-class="bg-gray-900 text-white"
	>
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
	url: {
		type: String,
		required: true,
	},
});

const localePath = useLocalePath();
</script>

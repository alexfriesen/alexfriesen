<template>
	<UButton
		:to="localePath(props.url)"
		size="lg"
		variant="ghost"
		color="primary"
		active-class="bg-primary-50 dark:bg-primary-950 dark:text-white"
	>
		<slot />
	</UButton>
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

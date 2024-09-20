<template>
	<div class="flex align-center justify-center w-full aspect-video">
		<figure class="m-0 w-full">
			<iframe :src="src" class="w-full h-full" />
			<div v-if="$slots.default">
				<slot />
			</div>
		</figure>
	</div>
</template>

<script setup lang="ts">
defineProps({
	src: {
		type: String,
		required: true,
	},
});
</script>

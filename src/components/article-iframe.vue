<template>
	<div class="flex align-center justify-center w-full aspect-video">
		<figure class="m-0 w-full">
			<iframe :src="src" class="w-full h-full" />
			<figcaption v-if="$slots.default">
				<slot />
			</figcaption>
		</figure>
	</div>
</template>

<script setup lang="ts">
defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
});
</script>

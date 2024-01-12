<template>
	<div class="flex align-center justify-center">
		<figure class="m-0">
			<NuxtPicture :src="src" :alt="alt" />
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

<template>
	<UButton
		:to="url"
		:target="target"
		variant="solid"
		color="neutral"
		size="xl"
		class="no-underline"
	>
		<UIcon v-if="icon" :name="icon" class="w-6 h-6" dynamic />
		<slot />
		<span v-if="label">{{ label }}</span>
		<UIcon v-if="external" name="i-lucide-external-link" class="w-6 h-6" />
	</UButton>
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

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		title?: string;
		description: string;
		image?: string;
		imageRound?: boolean;
		siteName?: string;
	}>(),
	{
		title: 'title',
	},
);

const siteConfig = useSiteConfig();
const siteName = computed(() => {
	return props.siteName || siteConfig.name;
});
</script>

<template>
	<div class="w-full h-full relative p-16 bg-indigo-900 text-indigo-200">
		<div
			:style="{
				width: '200%',
				height: '200%',
				backgroundImage: `radial-gradient(circle, rgba(5, 5, 5, 0.3) 50%, rgba(5, 5, 5, 0) 70%)`,
			}"
			class="flex absolute top-0 -right-full"
		/>
		<div class="h-full w-full justify-between relative">
			<div class="flex flex-row justify-between items-start">
				<div class="flex flex-col w-full max-w-[65%] text-balance">
					<h1 class="m-0 font-bold mb-7.5 text-[55px] text-pretty">
						{{ title }}
					</h1>
					<p class="text-[30px] text-indigo-100 text-pretty">
						{{ description }}
					</p>
				</div>
				<div
					v-if="Boolean(image)"
					style="width: 30%"
					class="flex flex-col items-center justify-end gap-6 h-full"
				>
					<img
						:src="image"
						:class="[imageRound ? 'rounded-full' : '']"
						class="overflow-hidden rounded-4 border-4 border-neutral-200 border-solid size-75"
						alt="preview"
					/>
					<p v-if="siteName" class="font-bold text-indigo-400 text-[25px]">
						{{ siteName }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

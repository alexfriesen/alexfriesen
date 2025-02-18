<template>
	<Content>

		<Head v-if="data">
			<Title>{{ data.title }}</Title>
			<Meta name="description" :content="data.description" />
		</Head>

		<ContentRenderer v-if="data" :value="data" tag="article" class="prose dark:prose-invert max-w-none" />
	</Content>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const collection = locale.value === 'en' ? 'projects_en' : 'projects_de'
const { data } = await useAsyncData(route.path, () => {
	return queryCollection(collection).path(route.path).first()
})
</script>
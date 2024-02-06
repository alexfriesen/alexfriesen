<script setup lang="ts">
const props = withDefaults(defineProps<{
    title?: string
    description?: string
    image?: string,
    imageRound?: boolean,
    siteName?: string
}>(), {
    title: 'title',
})

const siteConfig = useSiteConfig()
const siteName = computed(() => {
    return props.siteName || siteConfig.name
})
</script>

<template>
    <div class="w-full h-full flex justify-between relative p-[60px] bg-indigo-900 text-indigo-200">
        <div class="flex absolute top-0 right-[-100%]" :style="{
            width: '200%',
            height: '200%',
            backgroundImage: `radial-gradient(circle, rgba(5, 5, 5, 0.3) 50%, rgba(5, 5, 5, 0) 70%)`,
        }" />
        <div class="h-full w-full justify-between relative">
            <div class="flex flex-row justify-between items-start">
                <div class="flex flex-col w-full max-w-[65%]">
                    <h1 class="m-0 font-bold mb-[30px] text-[75px]">
                        {{ title }}
                    </h1>
                    <p v-if="description" class="text-[35px] text-indigo-100">
                        {{ description }}
                    </p>
                </div>
                <div v-if="Boolean(image)" style="width: 30%;" class="flex items-center justify-end">
                    <img :src="image" alt="preview" class="w-full overflow-hidden rounded-4 border-4 border-gray-200"
                        :class="[imageRound ? 'rounded-full' : '']" />
                </div>
            </div>
            <div class="flex flex-row justify-center items-center text-left w-full">
                <p v-if="siteName" style="font-size: 25px;" class="font-bold text-indigo-400">
                    {{ siteName }}
                </p>
            </div>
        </div>
    </div>
</template>

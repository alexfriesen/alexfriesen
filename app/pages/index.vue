<template>
	<UPage>
		<UPageHero
			orientation="horizontal"
			reverse
			:links="[
				{
					label: $t('contact.title'),
					icon: 'i-lucide-mail',
					to: localePath('/contact'),
				},
				{
					label: $t('projects.title'),
					icon: 'i-lucide-zap',
					to: localePath('/projects'),
					color: 'neutral',
					variant: 'subtle',
				},
			]"
		>
			<template #title>
				{{ $t('home.welcome') }} <span class="wave">👋</span>
			</template>
			<template #description>
				{{ $t('home.intro') }}
			</template>

			<NuxtPicture
				:alt="$t('home.picture')"
				fetchpriority="high"
				width="300"
				height="300"
				densities="x1 x2"
				sizes="100vw sm:120px md:300px"
				format="avif,webp"
				src="/images/me600.jpg"
				class="m-auto relative aspect-square rounded-full overflow-hidden border-4 border-neutral-200 shadow-lg h-32 md:w-48 md:h-auto"
			/>
		</UPageHero>

		<UPageGrid class="lg:grid-cols-2">
			<UPageCard
				:title="$t('snippets.title')"
				:description="$t('snippets.description')"
				:to="$localePath('/snippets')"
				spotlight
				orientation="horizontal"
			>
				<UIcon name="i-lucide-puzzle" class="text-primary size-32 m-auto p-4" />
			</UPageCard>

			<UPageCard
				:title="$t('projects.title')"
				:description="$t('projects.description')"
				:to="$localePath('/projects')"
				spotlight
				orientation="horizontal"
			>
				<UIcon name="i-lucide-zap" class="text-primary size-32 m-auto p-4" />
			</UPageCard>
		</UPageGrid>
	</UPage>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const { t } = useI18n();
useSeoMeta({
	title: t('home.title'),
	description: t('home.description'),
});
</script>

<style>
.wave {
	display: inline-block;
	animation-name: wave;
	animation-duration: 2s;
	animation-delay: 2s;
	animation-iteration-count: infinite;
}

@media (motion) {
	.wave {
		animation: none;
	}
}

@keyframes wave {
	0% {
		transform: rotate(0deg) scale(1);
	}

	10% {
		transform: rotate(5deg) scale(1.1);
	}

	20% {
		transform: rotate(-10deg) scale(1.1);
	}

	30% {
		transform: rotate(5deg) scale(1.1);
	}

	40% {
		transform: rotate(-5deg) scale(1.1);
	}

	50% {
		transform: rotate(0deg) scale(1);
	}
}
</style>

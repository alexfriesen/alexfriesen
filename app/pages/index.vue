<template>
	<Content>
		<UCard>
			<figure class="flex flex-col md:flex-row justify-center items-center">
				<NuxtPicture :alt="$t('home.picture')" fetchpriority="high" width="300" height="300" densities="x1 x2"
					sizes="100vw sm:120px md:300px" format="avif,webp" src="/images/me600.jpg"
					class="relative aspect-square rounded-full overflow-hidden border-4 border-neutral-200 shadow-lg h-32 md:w-48 md:h-auto" />
				<div class="md:px-8 text-center md:text-left space-y-4">
					<div class="font-medium">
						<p class="p-2">
							{{ $t('home.welcome') }} <span class="wave">👋</span><br>
							{{ $t('home.intro') }}
						</p>
						<div class="font-normal flex justify-evenly p-2 pt-4">
							<UButton :to="localePath('/contact')" size="xl" color="primary" variant="solid">
								<UIcon name="i-lucide-mail" class="w-6 h-6" />
								{{ $t('contact.title') }}
							</UButton>
						</div>
					</div>
				</div>
			</figure>
		</UCard>
	</Content>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

definePageMeta({
	title: 'home.title',
	description: 'home.description',
})
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
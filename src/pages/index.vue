<template>
	<Head>
		<Title>{{ $t('navigation.home') }}</Title>
		<Link rel="canonical" :href="toAbsoluteUrl($route.fullPath)" />
	</Head>
	<AltLangHead />

	<Content>
		<UCard>
			<figure class="flex flex-col md:flex-row justify-center items-center">
				<NuxtPicture
					:alt="$t('home.picture')"
					preload
					width="300"
					height="300"
					densities="x1 x2"
					sizes="100vw sm:120px md:300px"
					format="webp,avif"
					src="images/me600.jpg"
					class="relative aspect-square rounded-full overflow-hidden border-4 border-gray-200 shadow-lg h-32 md:w-48 md:h-auto"
				/>
        <div class="md:px-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <p class="p-2">
							{{ $t('home.welcome') }}<br>
              {{ $t('home.intro') }}
            </p>
						<div class="font-normal flex justify-evenly p-2 pt-4">
							<UButton
								:to="localePath('/contact')"
								size="xl"
								color="primary"
								variant="solid"
							>
								<UIcon name="i-ri-mail-send-line" class="w-6 h-6" />
								{{ $t('navigation.contact') }}
							</UButton>
						</div>
          </figcaption>
				</div>
      </figure>
		</UCard>
	</Content>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const toAbsoluteUrl = useAbsoluteUrl();
</script>

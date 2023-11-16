<template>
	<Head>
		<Title>{{ $t('navigation.home') }}</Title>
	</Head>
  <div>
    <Content class="relative">
      <figure
				class="
					flex
					flex-col
					md:flex-row
					items-center
					justify-center
					p-8
					shadow
					rounded-xl
					bg-gray-800
				"
			>
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
        <div class="pt-6 md:px-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <!-- <p class="text-cyan-600">Alexander Friesen</p> -->
            <p class="text-gray-200">
							{{ $t('home.welcome') }}<br>
              {{ $t('home.intro') }}
            </p>
            <div class="py-2">
              <div class="font-normal flex justify-evenly p-4">
                <NuxtLink
								class="
                    inline-flex
                    gap-1
                    items-center
                    justify-evenly
                    px-5
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-gray-300
                    bg-gray-200
                    hover:bg-gray-700
                    text-gray-800
                    hover:text-gray-200
                  "
									:to="localePath('/contact')"
								>
                  <Icon name="uil:envelope" class="w-6 h-6" />
                  {{ $t('navigation.contact') }}
                </NuxtLink>
              </div>
            </div>
          </figcaption>
        </div>
      </figure>
    </Content>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

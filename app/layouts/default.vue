<template>
	<div>
		<AppNavigation />
		<UMain class="flex flex-col justify-between">
			<UContainer>
				<slot />
			</UContainer>
			<AppFooter />
		</UMain>
	</div>
</template>

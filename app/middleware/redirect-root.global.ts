export default defineNuxtRouteMiddleware((to, from) => {
	const { $i18n } = useNuxtApp();

	if (to.path === '/') {
		const defaultLocale = $i18n.defaultLocale || $i18n.fallbackLocale || 'en';
		return navigateTo(`/${defaultLocale}`);
	}
});

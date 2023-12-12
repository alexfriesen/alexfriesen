export const useAbsoluteUrl = () => {
	const appConfig = useAppConfig();

	const toAbsoluteUrl = (url: string) => `${appConfig.urlBase}${url || '/'}`;

	return toAbsoluteUrl;
};

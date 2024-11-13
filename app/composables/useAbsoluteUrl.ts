export const useAbsoluteUrl = () => {
	const config = useSiteConfig();

	const toAbsoluteUrl = (url: string) => `${config.url}${url || '/'}`;

	return toAbsoluteUrl;
};

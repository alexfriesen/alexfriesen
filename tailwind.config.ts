import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'code::before': {
							content: '',
						},
						'code::after': {
							content: '',
						},
					},
				},
			},
			aspectRatio: {
				auto: 'auto',
				square: '1 / 1',
				video: '16 / 9',
			},
		},
	},
};

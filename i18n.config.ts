export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	messages: {
		en: {
			navigation: {
				home: 'Home',
				contact: 'Contact',
				projects: 'Projects',
			},
			home: {
				welcome: 'Hi there! 👋',
				picture: 'Picture of Alex',
				intro: 'I am Alex, a software developer from Paderborn, Germany.',
				follow: 'Follow me on',
			},
			projects: {
				more: 'More',
			},
			contact: {
				email: 'Email',
				message: 'Message',
				send: 'Send',
				sending: 'Sending...',
				success:
					'Thank you for your message! I will get back to you as soon as possible.',
				error: 'Sorry! Something went wrong.',
			},
		},
		de: {
			navigation: {
				home: 'Startseite',
				contact: 'Kontakt',
				projects: 'Projekte',
			},
			home: {
				welcome: 'Hallo! 👋',
				picture: 'Bild von Alex',
				intro:
					'Ich bin Alex, ein Softwareentwickler aus Paderborn, Deutschland.',
				follow: 'Folge mir auf',
			},
			projects: {
				more: 'Mehr',
			},
			contact: {
				email: 'Email',
				message: 'Nachricht',
				send: 'Senden',
				sending: 'Senden...',
				success:
					'Vielen Dank für deine Nachricht! Ich werde mich so schnell wie möglich bei dir melden.',
				error: 'Sorry! Etwas ist schief gelaufen.',
			},
		},
	},
}));

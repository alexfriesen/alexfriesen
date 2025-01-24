export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	messages: {
		en: {
			home: {
				title: 'Home',
				welcome: 'Hi there!',
				description: 'Software developer',
				picture: 'Picture of Alex',
				intro: 'I am Alex, a software developer from Germany.',
				follow: 'Follow me on',
			},
			blog: {
				title: 'Blog',
				description: 'Here are some of my thoughts and experiences.',
				read: 'Read',
			},
			projects: {
				title: 'Open Source Projects',
				description: 'Here are some of my fun and side projects.',
				more: 'More',
			},
			contact: {
				title: 'Contact',
				description: 'Feel free to reach out to me.',
				email: 'Email',
				message: 'Message',
				messagePlaceholder: 'Your message...',
				send: 'Send',
				sending: 'Sending...',
				success:
					'Thank you for your message! I will get back to you as soon as possible.',
				error: 'Sorry! Something went wrong.',
			},
			'404': {
				title: 'Page not found',
				description: 'The page could not be found.',
			},
		},
		de: {
			home: {
				title: 'Startseite',
				welcome: 'Hallo!',
				description: 'Softwareentwickler',
				picture: 'Bild von Alex',
				intro: 'Ich bin Alex, ein Softwareentwickler aus Deutschland.',
				follow: 'Folge mir auf',
			},
			blog: {
				title: 'Blog',
				description: 'Hier sind einige meiner Gedanken und Erfahrungen.',
				read: 'Lesen',
			},
			projects: {
				title: 'Open Source Projekte',
				description: 'Hier sind einige meiner Spaß- und Nebenprojekt.',
				more: 'Mehr',
			},
			contact: {
				title: 'Kontakt',
				description: 'Fühle dich frei, mich zu kontaktieren.',
				email: 'Email',
				message: 'Nachricht',
				messagePlaceholder: 'Deine Nachricht...',
				send: 'Senden',
				sending: 'Senden...',
				success:
					'Vielen Dank für deine Nachricht! Ich werde mich so schnell wie möglich bei dir melden.',
				error: 'Sorry! Etwas ist schief gelaufen.',
			},
			'404': {
				title: 'Seite nicht gefunden',
				description: 'Die Seite konnte nicht gefunden werden.',
			},
		},
	},
}));

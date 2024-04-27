export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	messages: {
		en: {
			navigation: {
				home: 'Home',
				blog: 'Blog',
				projects: 'Open Source Projects',
				contact: 'Contact',
			},
			home: {
				welcome: 'Hi there! 👋',
				description: 'Software developer',
				picture: 'Picture of Alex',
				intro: 'I am Alex, a software developer from Paderborn, Germany.',
				follow: 'Follow me on',
			},
			blog: {
				description: 'Here are some of my thoughts and experiences.',
				read: 'Read',
			},
			projects: {
				description: 'Here are some of my fun and side projects.',
				more: 'More',
			},
			contact: {
				description: 'Feel free to reach out to me.',
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
				blog: 'Blog',
				projects: 'Open Source Projekte',
				contact: 'Kontakt',
			},
			home: {
				welcome: 'Hallo! 👋',
				description: 'Softwareentwickler',
				picture: 'Bild von Alex',
				intro:
					'Ich bin Alex, ein Softwareentwickler aus Paderborn, Deutschland.',
				follow: 'Folge mir auf',
			},
			blog: {
				description: 'Hier sind einige meiner Gedanken und Erfahrungen.',
				read: 'Lesen',
			},
			projects: {
				description: 'Hier sind einige meiner Spaß- und Nebenprojekt.',
				more: 'Mehr',
			},
			contact: {
				description: 'Fühle dich frei, mich zu kontaktieren.',
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

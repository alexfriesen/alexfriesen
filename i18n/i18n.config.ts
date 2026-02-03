export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	messages: {
		en: {
			actions: {
				back: 'Go Back',
			},
			home: {
				title: 'Home',
				welcome: 'Hi there!',
				description: 'Software Developer',
				picture: 'Picture of Alexander',
				intro: "I'm Alexander, a software developer from Germany with a passion for building great web experiences.",
				follow: 'Follow me on',
			},
			snippets: {
				title: 'Snippets',
				description: 'Useful code snippets and guides. Copy, paste, and adapt to your needs!',
				read: 'Read',
			},
			projects: {
				title: 'Open Source Projects',
				description: 'A collection of my open source projects and experiments.',
				more: 'More',
			},
			contact: {
				title: 'Contact',
				description: 'Got a question or want to work together? Drop me a message!',
				email: 'Email',
				message: 'Message',
				messagePlaceholder: 'Your message...',
				send: 'Send',
				sending: 'Sending...',
				success:
					"Thanks for reaching out! I'll get back to you as soon as possible.",
				error: 'Oops! Something went wrong. Please try again.',
			},
			'404': {
				title: 'Page not found',
				description: 'The page could not be found.',
			},
			error: {
				title: 'An error occurred',
				description: 'An error occurred while processing your request.',
			},
		},
		de: {
			actions: {
				back: 'Zurück',
			},
			home: {
				title: 'Startseite',
				welcome: 'Hallo!',
				description: 'Softwareentwickler',
				picture: 'Bild von Alexander',
				intro: 'Ich bin Alexander, ein Softwareentwickler aus Deutschland mit einer Leidenschaft für großartige Web-Erlebnisse.',
				follow: 'Folge mir auf',
			},
			snippets: {
				title: 'Snippets',
				description: 'Nützliche Code-Snippets und Anleitungen. Einfach kopieren, anpassen und nutzen!',
				read: 'Lesen',
			},
			projects: {
				title: 'Open Source Projekte',
				description: 'Eine Sammlung meiner Open-Source-Projekte und Experimente.',
				more: 'Mehr',
			},
			contact: {
				title: 'Kontakt',
				description: 'Hast du eine Frage oder möchtest zusammenarbeiten? Schreib mir!',
				email: 'Email',
				message: 'Nachricht',
				messagePlaceholder: 'Deine Nachricht...',
				send: 'Senden',
				sending: 'Senden...',
				success:
					'Danke für deine Nachricht! Ich melde mich so schnell wie möglich bei dir.',
				error: 'Ups! Da ist etwas schiefgelaufen. Bitte versuche es erneut.',
			},
			'404': {
				title: 'Seite nicht gefunden',
				description: 'Die Seite konnte nicht gefunden werden.',
			},
			error: {
				title: 'Ein Fehler ist aufgetreten',
				description: 'Ein Fehler ist aufgetreten, während deine Anfrage bearbeitet wurde.',
			},
		},
	},
}));

var pissedOffCounter = 0;

$(document).ready(function() {

	$('#me').on('click', function(event) {
		event.preventDefault();

		if (pissedOffCounter < 5) {
			new alex.Bubble(alex.translate('hi'), $('#me'));
			
		} else {
			new alex.Bubble(alex.translate('buggerOff'), $('#me'));
		}
   	pissedOffCounter++;
	});

});

var alex = alex || {};
alex.Bubble = function Bubble(text, parent) {

	var element = $('<p class="speech">' + text + '</p>');
	$(parent).append(element);

	setTimeout(function() {
		try {
			element.remove();
		} catch (e) {
			// so fucking what?!
		}
	}, 5000);
};

alex.translate = function(key) {
	// set language
	if (typeof alex.lang === 'undefined') {
		var lang = navigator.language || navigator.userLanguage || 'en';
		alex.lang = lang.substring(0, 2);
	}
	try {
		if (typeof alex.translation[alex.lang][key] !== 'undefined') {
			return alex.translation[alex.lang][key];
		} else {
			return alex.translation['en'][key];
		}
	} catch (e) {}
	return '';
}

alex.translation = {
	de: {
		hi: "Ohai, schön das du hier bist.",
		buggerOff: "Jetzt reicht es aber, hau endlich ab!"
	},
	en: {
		hi: "Ohai, nice that you're here.",
		buggerOff: "Now thats enough, go away!"
	}
}
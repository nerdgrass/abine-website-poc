var app = (function() {

	'use strict';
	var privateVariable = 'app fired!',
		docElem = document.documentElement;

	return {
		publicFunction: function() {
			console.log(privateVariable);
		},
		userAgentInit: function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		}
	};

})();

(function() {

	'use strict';

	//foundation init
	$(document).foundation();
	$(".subnav.sidebar").foundation("magellan", {
		// specify the class used for active sections
		active_class: 'active',
		// how many pixels until the magellan bar sticks, 0 = auto
		threshold: 0,
		// pixels from the top of destination for it to be considered active
		destination_threshold: 0,
		// calculation throttling to increase framerate
		throttle_delay: 50
	});
	console.log('lols');

	app.publicFunction();
	app.userAgentInit();

})();
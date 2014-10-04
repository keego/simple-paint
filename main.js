/**
 *
 */

$(document).ready(function () {
	'use strict';
	// Imports
	//$.getScript('util.js');

	// Variables
	var particleSize = 20;
	var $particle = $('<div></div>')
		.addClass('particle')
		.css({
			width: particleSize + 'px',
			height: particleSize + 'px'
	});

	// Functions
	function startFire(event) {
		console.log("start firing...");
		document.body.addEventListener('mousemove', fire);
	}

	function ceaseFire(event) {
		console.log("cease firing.");
		document.body.removeEventListener('mousemove', fire);
	}

	function fire(event) {
		console.log("\tfire");
		var $newParticle = $particle.clone();
		$newParticle.css({
			left: event.pageX - (particleSize / 2),
			top: event.pageY - (particleSize / 2)
		});

		console.log(event.screenY);

		$("body").append($newParticle);
	}

	// Main
	document.body.addEventListener('mousedown', startFire);
	document.body.addEventListener('mouseup', ceaseFire);
});
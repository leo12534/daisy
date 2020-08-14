(function ($) {
	'use strict'; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top,
					},
					1000,
					'easeInOutExpo'
				);
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#sideNav',
	});
})(jQuery); // End of use strict



// // Hide and Reveal Copy on scroll
function scrollAppear(hideClass,triggerPosition,appearClass,reversible = false) {
    let copyHide = document.querySelectorAll(hideClass);
	copyHide.forEach((el) => {
		let copyPosition = el.getBoundingClientRect().top;
		let windowHeight = window.innerHeight;
		if (copyPosition <= windowHeight * triggerPosition) {
			el.classList.add(appearClass);
		} else if (copyPosition >= windowHeight && reversible) {
			el.classList.remove(appearClass);
		}
	});
}

window.add

window.addEventListener('scroll', () => {
	scrollAppear('.copy-hide', .5, 'copy-appear', true);
});


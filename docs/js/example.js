$(document).ready(function () {
	$('#eighties').click(function () {
		$('link[href*="css/example.css"]').attr('href', 'css/eighties.css?version=2');
	});
	$('#boring').click(function () {
		$('link[href*="css/eighties.css"]').attr('href', 'css/example.css');
	});
	$(document).on("scroll", onScroll);

	// Smooth scroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		var target = this.hash;
		var menu = target;
		var $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top + 2
		}, 300, 'swing').promise().done(function () {
			// If we use the standard jQuery callback, it fires twice
			// Using .promise().done() forces it to only fire once.
			window.location.hash = target;
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(e.target).addClass('active');
			$(document).on("scroll", onScroll);
		});
	});

	// Active scroll
	function onScroll(event) {
		clearTimeout($.data(this, 'scrolling'))
		$.data(this, 'scrolling', setTimeout(function () {
			var scrollPos = $(document).scrollTop();
			$('nav a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('aside nav ul li a').removeClass("active");
					currLink.addClass("active");
				} else {
					currLink.removeClass("active");
				}
			});
		}, 125))
	}

	// Toggle nav
	$('.toggle-nav').click(function (e) {
		if ($('.toggle-nav').hasClass('active')) {
			$('.toggle-nav').removeClass('active');
		} else {
			$('.toggle-nav').addClass('active');
		}
		$('aside nav').toggle();
		e.stopPropagation();
	});
	$('html').click(function () {
		$('aside nav').hide();
		$('.toggle-nav').removeClass('active');
	});


	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('.primitive').offset().top;
		if (window_top > div_top) {
			$('aside').addClass('fixed');
			$('.content').addClass('margin');
		} else {
			$('aside').removeClass('fixed');
			$('.content').removeClass('margin');
		}
	}

	$(function () {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});

	// Stick to top
	var stickyOffset = $('.primitive').offset().top;

	$(document).scroll(function () {
		var navbar = $('aside');
		var content = $('.content');
		var scroll = $(document).scrollTop();

		if (scroll >= 651) {
			navbar.addClass('fixed');
			content.addClass('margin');
		} else {
			navbar.removeClass('fixed');
			content.removeClass('margin');
		}

	});

});
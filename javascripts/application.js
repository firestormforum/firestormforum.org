jQuery(document).ready(function() {
	active_class();

	$('.link a').click(function (e) {
		e.preventDefault();
		var current = $(this).text();
		$('.link .active').removeClass('active');
		$('section').css('display', 'none');
		$('section#' + current).slideDown(1000);
		$(this).addClass('active');
	});

	$('.hamburguer').click(function(e) {
		e.preventDefault();
		var menu = $('.nav-menu-container').css('left');
		var header = $('.nav-menu-container');
		var fade = $('.fade-screen');
		if(menu != '0px') {
			header.animate({
	      left: '0'
			}, 500);
			fade.css('display', 'block');
		}else {
			header.animate({
	      left: '-100%'
			}, 500);
			fade.css('display', 'none');
		}

	});

	$( window ).resize(function() {
		windowWidth = $(window).width();
		var fadeblock = $('.fade-screen').css('display');
		var menu = $('.nav-menu-container');
		if (windowWidth > 993) {
			if (fadeblock == 'block') {
				$('.fade-screen').css('display', 'none');
			}
			menu.css('left', '0');
		}else {
			if(menu.css('left') == '0px' && windowWidth > 767){
				menu.css('left', '-100%');
				$('.fade-screen').css('display', 'none');
			}
		}
	});

});

var active_class = function() {
	var x = $('.link').length;
	var url = window.location.href;

	for(var i = 0; i < x; i++){
		var linkUrl = $('ul:nth-child(2) a')[i].href;
		if (linkUrl == url) {
			var current = $('ul:nth-child(2) a')[i];
			$(current).addClass('active');
		}
	}

}
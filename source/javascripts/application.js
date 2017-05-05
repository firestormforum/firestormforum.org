jQuery(document).ready(function() {
	active_class();

	$('.link a').click(function (e) {
		e.preventDefault();
		$('.link .active').removeClass('active');
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
		if (windowWidth > 993) {
			if (fadeblock == 'block') {
				$('.fade-screen').css('display', 'none');
			}
			$('.nav-menu-container').css('left', '0');
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
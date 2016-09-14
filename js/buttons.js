(function(){

	$('.settings_button').on('click', function(){
		var $visible_section = $('.visible_section');
		$visible_section.removeClass('visible_section');
		$('.settings_section').addClass('visible_section');
	});

	$('.change_location_button').on('click', function(){
		var $visible_section = $('.visible_section');
		$visible_section.removeClass('visible_section');
		$('.location_section').addClass('visible_section');
	});	

	$('.heading_bar_return').on('click', function(){
		var $visible_section = $('.visible_section');
		$visible_section.removeClass('visible_section');
		$('.extra_info').addClass('visible_section');
	});

	$('.refresh_button').on('click', function(){
		$('.extra_info ul').addClass('refresh_effect');
	});

	$('.extra_info ul').on(
		"webkitAnimationEnd oanimationend msAnimationEnd animationend",
		function(){
			$(this).removeClass('refresh_effect');
		}
	);

})();
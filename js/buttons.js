(function(){

	$('.location_section').addClass('visible_section').removeClass('visible_section');

	$('.extra_info').addClass('visible_section');

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
	})

	$('.refresh_button').on('click', function(){
		toggleRefreshEffect();
	})

	var toggleRefreshEffect = function(){

		$element = $('.extra_info ul');

		$element.removeClass('refresh_effect');

		$element.addClass('refresh_effect');

	}

})();
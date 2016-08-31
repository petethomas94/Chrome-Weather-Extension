(function(){

	$('.chevron_icon_right').on('click', function(){
		var $current = $('li.current');
		var $next = $current.next();
		if($next.is('li')){
			$current.removeClass('current');
			$next.addClass('current');
		}
	});

	$('.chevron_icon_left').on('click', function(){
		var $current = $('li.current');
		var $previous = $current.prev();
		if($previous.is('li')){
			$current.removeClass('current');
			$previous.addClass('current');
		}
	})

})()
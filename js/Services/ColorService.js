(function(){

	Extension.service('ColorService', function($rootScope){

		var currentColorScheme = 0

		var colorSchemes = [
		{
			background_primary : 'background_primary_0',
			background_secondary : 'background_secondary_0',
			ui_element_background_primary : 'ui_element_background_primary_0',
			map_element_background : 'map_element_background_0',
			back_button_background : 'back_button_background_0',
			ui_element_text_color_primary : 'ui_element_text_color_primary_0',
			ui_element_text_color_secondary : 'ui_element_text_color_secondary_0',
			back_button_text_color : 'back_button_text_color_0',
			ui_element_hover : 'ui_element_hover_0',
			back_button_hover : 'back_button_hover_0',
			map_back_button_hover : 'map_back_button_hover_0',
			refresh_animation_color : 'refresh_animation_color_0'
		},
		{
			background_primary : 'background_primary_1',
			background_secondary : 'background_secondary_1',
			ui_element_background_primary : 'ui_element_background_primary_1',
			map_element_background : 'map_element_background_1',
			back_button_background : 'back_button_background_1',
			ui_element_text_color_primary : 'ui_element_text_color_primary_1',
			ui_element_text_color_secondary : 'ui_element_text_color_secondary_1',
			back_button_text_color : 'back_button_text_color_1',
			ui_element_hover : 'ui_element_hover_1',
			back_button_hover : 'back_button_hover_1',
			map_back_button_hover : 'map_back_button_hover_1',
			refresh_animation_color : 'refresh_animation_color_1'
		}
		]

		var getColorScheme = function(){
			return colorSchemes[currentColorScheme];
		}

		var setColorScheme = function(colorScheme){
			currentColorScheme = colorScheme;
			$rootScope.$broadcast('COLOR_SCHEME_CHANGE', '');
		}

		return {
			getColorScheme : getColorScheme,
			setColorScheme : setColorScheme
		}

	});

})();
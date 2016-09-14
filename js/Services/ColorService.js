(function(){

	Extension.service('ColorService', function($rootScope){

		var colorScheme = {
			background_primary : 'background_primary_2',
			background_secondary : 'background_secondary_2',
			ui_element_background_primary : 'ui_element_background_primary_2',
			map_element_background : 'map_element_background_2',
			back_button_background : 'back_button_background_2',
			ui_element_text_color_primary : 'ui_element_text_color_primary_2',
			ui_element_text_color_secondary : 'ui_element_text_color_secondary_2',
			back_button_text_color : 'back_button_text_color_2',
			ui_element_hover : 'ui_element_hover_2',
			back_button_hover : 'back_button_hover_2',
			map_back_button_hover : 'map_back_button_hover_2'
		}

		var getColorScheme = function(){
			return colorScheme;
		}

		var setColorScheme = function(postFix){
			for (var key in colorScheme){
				if(!colorScheme.hasOwnProperty(key)){
					//skip properties from prototype
					continue;
				}
				key = (key.slice(0, -1) + postFix);
			}
		}

		return {
			getColorScheme : getColorScheme,
			setColorScheme : setColorScheme
		}

	});

})();
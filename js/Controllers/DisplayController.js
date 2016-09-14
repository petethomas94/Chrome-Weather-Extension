(function(){

	var DisplayController = function($scope, $rootScope, ColorService){
		
		$scope.color = ColorService.getColorScheme();

		$scope.changeColorScheme = function(colorScheme){
			ColorService.setColorScheme(colorScheme);
		}

		$rootScope.$on('COLOR_SCHEME_CHANGE', function(){
			$scope.color = ColorService.getColorScheme();
		})

	};

	Extension.controller('DisplayController', ['$scope', '$rootScope', 'ColorService', DisplayController]);

})();
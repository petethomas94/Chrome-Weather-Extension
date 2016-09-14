(function(){

	var DisplayController = function($scope, ColorService){
		$scope.color = ColorService.getColorScheme();
	};

	Extension.controller('DisplayController', ['$scope', 'ColorService', DisplayController]);

})();
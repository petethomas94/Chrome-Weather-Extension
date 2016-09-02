(function(){

	var DailyController = function($scope, DailyService){

		$scope.daily = DailyService.getDaily();
		console.log($scope.daily);

		$scope.$on('DAILY_FORECAST_CHANGE', function(response){
			$scope.daily = DailyService.getDaily();
		})

	}

	Extension.controller('DailyController', ["$scope", "DailyService", DailyController]);

})();
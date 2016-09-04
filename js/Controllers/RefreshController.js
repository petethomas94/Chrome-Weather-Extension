(function(){

	var RefreshController = function($scope, $rootScope){

		$scope.refresh = function(){
			$rootScope.$broadcast('REFRESH_FORECAST', '');
			console.log('refresh_forecast');
		}

	}

	Extension.controller('RefreshController', ["$scope", "$rootScope", RefreshController])

})();
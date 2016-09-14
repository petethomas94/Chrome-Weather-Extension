(function(){

	var RefreshController = function($scope, $rootScope){

		$scope.refresh = function(){
			$rootScope.$broadcast('REFRESH_FORECAST', '');
		}

	}

	Extension.controller('RefreshController', ["$scope", "$rootScope", RefreshController])

})();
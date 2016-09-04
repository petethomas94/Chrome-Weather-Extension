(function(){

	Extension.service('DailyService', function($rootScope){

		var daily = {};

		var getDaily = function(){
			return daily;
		}

		var setDaily = function(newDaily){
			daily = newDaily;
			$rootScope.$broadcast('DAILY_FORECAST_CHANGE', '');
		}

		return{
			getDaily : getDaily,
			setDaily : setDaily
		}

	})

})();
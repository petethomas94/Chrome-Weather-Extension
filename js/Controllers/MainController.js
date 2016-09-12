(function(){

    var MainController = function($scope, $rootScope, $http, ForecastService, LocationService){

      $scope.location = LocationService.getLocation();

    	var currentDaily = 0;

      $('.refreshIcon').addClass('loading');

      ForecastService.requestForecast($scope.location.lat, $scope.location.long).then(function(d){
          $scope.forecast = ForecastService.getForecast();
      })

      $scope.nextForecast = function(){
      	if(currentDaily < $scope.forecast.DailyForecast.length - 1){
          $scope.forecast.currentDailyForecast = $scope.forecast.DailyForecast[currentDaily + 1];
      		currentDaily++;
      	}
      }

      $scope.prevForecast = function(){
      	if(currentDaily > 0){
          $scope.forecast.currentDailyForecast = $scope.forecast.DailyForecast[currentDaily - 1];
      		currentDaily--;
      	}
      }

      $rootScope.$on('REFRESH_FORECAST', function(response){
        var forecast = ForecastService.getForecast();
        ForecastService.requestForecast(forecast.location.lat, forecast.location.long).then(function(d){
          $scope.forecast = ForecastService.getForecast();
        })
      })

      $rootScope.$on('UPDATED_FORECAST', function(response){
        $scope.forecast = ForecastService.getForecast();
      })

      $rootScope.$on('LOCATION_CHANGED', function(response){
        var location = LocationService.getLocation();
        $scope.location = location;
        ForecastService.requestForecast(location.lat, location.long).then(function(d){
          $scope.forecast = ForecastService.getForecast();
        })
      })

    }

    Extension.controller('MainController', ["$scope", "$rootScope", "$http", "ForecastService", "LocationService", MainController]);

})()
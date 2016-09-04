(function(){

	  var appId = "dcbe324b",
        appKey = "7822caa830c01489a67c1ca71d434eee",
        baseUrl = "https://api.weatherunlocked.com/api/forecast/",
        defaultLat = "50.820688",
        defaultLong = "-1.575503"

    var MainController = function($scope, $http, ForecastService, $rootScope){

    	var currentDaily = 0;

      $('.refreshIcon').addClass('loading');

    	ForecastService.getForecast().then(function(d){
        $scope.forecast = d;
        $('.refreshIcon').removeClass('loading');
      });

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
            $('.refreshIcon').addClass('loading');
            ForecastService.getForecast().then(function(d){
                  $('.refreshIcon').removeClass('loading');
                  $scope.forecast = d;
            })
      })

    }

    Extension.controller('MainController', ["$scope", "$http", "ForecastService", "$rootScope", MainController]);

})()
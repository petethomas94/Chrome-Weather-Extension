(function(){

	var LocationController = function($scope, $rootScope, $log, LocationService, GoogleMapApi){

		var location = LocationService.getLocation();

		angular.extend($scope, {
	        map: {center: 
	          {
	            latitude: location.lat, 
	            longitude: location.long  
	          }, 
	          zoom: 7 
	        },
	        searchbox: { 
	          template:'searchbox.tpl.html', 
	          events:{
	            places_changed: function (searchBox) {
	            	updateLocation(searchBox);
	            }
	          }
	        },
	        options: {
	          scrollwheel: true
	        }
      	});

		var updateLocation = function(searchBox){
			LocationService.updateLocation(searchBox);
		}

		$rootScope.$on('LOCATION_CHANGED', function(response){
			location = LocationService.getLocation();
			$scope.map.center.latitude = location.lat;
			$scope.map.center.longitude = location.long;
		})
      
      	GoogleMapApi.then(function(maps) {
        	maps.visualRefresh = true;
      	});
	}

	Extension.controller('LocationController', ['$scope', '$rootScope', '$log', 'LocationService', 'uiGmapGoogleMapApi', LocationController]);

})();
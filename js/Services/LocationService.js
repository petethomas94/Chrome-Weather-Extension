(function(){

	Extension.service('LocationService', function($rootScope){

		var currentLocation = {};

		var defaultLocation = {
			lat: 51.5073509, 
			long: -0.12775829999998223,
			formatted_address: 'London, UK'
		}

		var updateLocation = function(searchBox){
			currentLocation.lat = searchBox.getPlaces()[0].geometry.location.lat();
			currentLocation.long = searchBox.getPlaces()[0].geometry.location.lng();
			currentLocation.formatted_address = searchBox.getPlaces()[0].formatted_address;

			$rootScope.$broadcast('LOCATION_CHANGED', '');
		}

		var getLocation = function(){
			if(currentLocation.lat && currentLocation.long){
				console.log('Current location: ' + currentLocation);
				return currentLocation;
			}
			return defaultLocation;
		}


		return {
			updateLocation : updateLocation,
			getLocation : getLocation
		}
	})


})();
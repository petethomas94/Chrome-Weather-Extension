(function(){
	
	Extension.service('ForecastService', function($rootScope, $http){

		var appId = "dcbe324b",
        appKey = "7822caa830c01489a67c1ca71d434eee",
        baseUrl = "https://api.weatherunlocked.com/api/forecast/";

    var forecast = {};

    //http://stackoverflow.com/questions/12505760/processing-http-response-in-service
		var requestForecast = function(lat, long){
      var url = baseUrl + lat + "," + long + "?app_id=" + appId + "&app_key=" + appKey;
			var promise = $http.get(url, { headers: { 'Accept': 'application/json' } }).then(function(response){
				setForecast(response.data, lat, long);
        //return getForecast();
			})
			return promise;
		}

		var setForecast = function (data, lat, long) {
			var dailyForecast = []
      for (var i = 0 ; i < data.Days.length; i++) {
          dailyForecast.push(setDailyForecast(data.Days[i]))
      }
      //DailyService.setDaily($scope.forecast[0]);
      forecast =  {
        location : {
          lat: lat,
          long : long,
          placeName : '',
          country : ''
        },
      	DailyForecast : dailyForecast,
      	currentDailyForecast : dailyForecast[0]
      }
      $rootScope.$broadcast('UPDATED_FORECAST', '');
    }

    var getForecast = function(){
      if(forecast != null){
        return forecast;
      }
      return {};
    }

    var setDailyForecast = function (data) {
      return {
          date: data.date,
          max_temp: data.temp_max_c,
          max_temp_main: Math.floor(data.temp_max_c),
          min_temp: data.temp_min_c,
          precipitation_probability: data.prob_precip_pct,
          max_humidity: data.humid_max_pct,
          timeframes: setTimeFrames(data.Timeframes)
      }
    }

    var setTimeFrames = function (timeframes) {
      var _timeframes = [];
      for (var i = 0; i < timeframes.length; i++) {
          var _timeframe = timeframes[i];
          var timeframe = {
              time: getTime(_timeframe.time).substring(0, 5),
              desc: _timeframe.wx_desc,
              code: _timeframe.wx_code,
              icon_class: setIconClass(_timeframe.wx_code),
              temp: Math.floor(_timeframe.temp_c),
              winddir_compass: _timeframe.winddir_compass,
              windspeed_mph: _timeframe.windspd_mph
          }
          _timeframes.push(timeframe)
      }
      return _timeframes;
    }

    var getTime = function (time) {
      var d1 = new Date();
      var d2 = new Date(d1);
      d2.setHours(d1.getHours() + (time / 100));
      return getFormattedTime(d2);
    }

    var getFormattedTime = function(date){
      var hours = date.getHours().toString();
      if (hours.length < 2) {
          hours = "0" + hours;
      }
      var minutes = date.getMinutes().toString();
      if (minutes.length < 2) {
          minutes = "0" + minutes;
      }
      var seconds = date.getSeconds().toString();
      if (seconds.length < 2) {
          seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    }

		var onError = function(){

		}

		var setIconClass = function(code){
      switch(code){
          case 0:
            return 'wi-day-sunny'; 
            break;
          case 1:
            return 'wi-day-cloudy-high';
            break;
          case 2:
            return 'wi-cloudy';
            break;
          case 3:
            return 'wi-cloudy';
            break;
          case 10:
            return 'wi-sleet';
            break;
          case 39:
            return 'wi-snow';
          case 45:
            return 'wi-fog';
            break;
          case 49:
            return 'wi-fog';
            break;
          case 50:
            return 'wi-rain';
            break;
          case 51:
            return 'wi-rain';
            //drizzle
            break;
          case 60:
            return 'wi-rain';
            //light rain
            break;
          case 61:
            return 'wi-rain';
            //light rain
            break;
          case 64:
            return 'wi-rain-mix';
            //heavy rain
            break;
          case 65:
            return 'wi-rain-mix';
            //heavy rain
            break;
      }
    }

		return {
			requestForecast : requestForecast,
      getForecast : getForecast
		}

	})

})();
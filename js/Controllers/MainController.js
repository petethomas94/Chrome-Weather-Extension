(function(){

	var appId = "dcbe324b",
        appKey = "7822caa830c01489a67c1ca71d434eee",
        baseUrl = "https://api.weatherunlocked.com/api/forecast/",
        defaultLat = "50.820688",
        defaultLong = "-1.575503"

    var MainController = function($scope, $http, DailyService){

    	var currentDaily = 0;

    	$scope.forecast = [];

        $scope.getForecast = function () {
            $http.get(url, { headers: { 'Accept': 'application/json' } }).then(onComplete, onError);
        }

        $scope.nextForecast = function(){
        	if(currentDaily < $scope.forecast.length - 1){
        		DailyService.setDaily($scope.forecast[currentDaily + 1]);
        		currentDaily++;
        	}
        }

        $scope.prevForecast = function(){
        	if(currentDaily > 0){
        		DailyService.setDaily($scope.forecast[currentDaily - 1]);
        		currentDaily--;
        	}
        }

        var url = baseUrl + defaultLat + "," + defaultLong + "?app_id=" + appId + "&app_key=" + appKey;

        var setForecast = function (data) {
            for (var i = 0 ; i < data.Days.length; i++) {
                $scope.forecast.push(setDailyForecast(data.Days[i]))
            }
            DailyService.setDaily($scope.forecast[0]);
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

        var setIconClass = function(code){
            switch(code){
                case 0:
                   //sunny skies/clear skies
                   break;
                case 1:
                   //partly cloudy
                   break;
                case 2:
                   //cloudy
                   break;
                case 3:
                   //overcast
                   break;
                case 10:
                   //misty
                   break;
                case 39:
                   //blizard
                   break;
                case 45:
                   //fog
                   break;
                case 49:
                   //fog
                   break;
                case 50:
                   //drizzle
                   break;
                case 51:
                   //drizzle
                   break;
                case 60:
                   //light rain
                   break;
                case 61:
                   //light rain
                   break;
                case 64:
                   //heavy rain
                   break;
                case 65:
                   //heavy rain
                   break;



            }
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

        var onComplete = function (response) {
            setForecast(response.data)
        }

        var onError = function (reason) {
            $scope.error = "There has been an error:" + reason.data;
        }

        $scope.getForecast();

    }

    Extension.controller('MainController', ["$scope", "$http", "DailyService", MainController]);

})()
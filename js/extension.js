(function(){
	var Extension = angular.module('Extension', []);

	var appId = "dcbe324b",
        appKey = "7822caa830c01489a67c1ca71d434eee",
        baseUrl = "https://api.weatherunlocked.com/api/forecast/",
        defaultLat = "50.820688",
        defaultLong = "-1.575503"

    var MainController = function($scope, $http){

    	$scope.forecast = [];

        $scope.getForecast = function () {
            $http.get(url, { headers: { 'Accept': 'application/json' } }).then(onComplete, onError);
        }

        var url = baseUrl + defaultLat + "," + defaultLong + "?app_id=" + appId + "&app_key=" + appKey;

        var setForecast = function (data) {
            for (var i = 0 ; i < data.Days.length; i++) {
                $scope.forecast.push(setDailyForecast(data.Days[i]))
            }
        }

        var setDailyForecast = function (data) {
            return {
                date: data.date,
                max_temp: data.temp_max_c,
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
                    time: getTime(_timeframe.time),
                    desc: _timeframe.wx_desc,
                    code: _timeframe.wx_code,
                    temp: _timeframe.temp_c,
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

        var onComplete = function (response) {
            setForecast(response.data)
        }

        var onError = function (reason) {
            $scope.error = "There has been an error:" + reason.data;
        }

        $scope.getForecast();

    }

    Extension.controller('MainController', ["$scope", "$http", MainController]);

})()
var Extension = angular.module('Extension', ['uiGmapgoogle-maps'])
.config(function(uiGmapGoogleMapApiProvider){
	uiGmapGoogleMapApiProvider.configure({
		key: 'AIzaSyDxXaP7UCo_Io_3xqlPsAIFYA0_hokhCBI',
		v: '3.26',
		libraries: 'weather,geometry,visualization,places'
	});
})

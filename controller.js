var countryApp = angular.module('countryApp',['ngRoute']);

countryApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'country-list.html',
		controller: 'countryCntrl'		
	}).
	when('/:countryName/:population',{
		templateUrl: 'country-detail.html',
		controller: 'countryDetailCntrl'
	}).
	when('/:countryName',{
		templateUrl: 'country-detail.html',
		controller: 'countryDetailCntrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});

countryApp.controller('countryCntrl', function($scope, $http){
	$http.get('countries.json').success(function(countryData){
		$scope.countries = countryData;
	});
});

countryApp.controller('countryDetailCntrl', function($scope, $routeParams, $http){
	$scope.name = $routeParams.countryName;
	$http.get('countries.json').success(function(countryDetailData){
		var country = countryDetailData.filter(function(currCountry){
			return currCountry.name === $scope.name;
		})[0];
		console.log(country);
		$scope.country = country;

	});
});







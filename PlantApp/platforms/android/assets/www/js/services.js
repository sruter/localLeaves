'use strict';
/* Services 
*/
var plantServices = angular.module('plantServicesModule', []);
plantServices.service('plantObjectModel', ['$http', function($http) {
    var fanType = [];
    var dataIcons = [];
    //breaking up file this way so that the indexing in the html page is simplified
    $http.get('json/searchIcons1.json').success(function(data) {
        //console.log(data);
    
        //still not real sure what's going on -- seems to need to run through a function to actually write to the variable on plantObjectModel, although it shows up on console.log, and data outputs differently in console from the dataIcons I construct here.
        for (var key in data[0]) {
            dataIcons.push(key)
            dataIcons[key] = data[0][key]
            //console.log(data[0][key])
            fanType.push(key);
        };
    });
    this.fanType = fanType;
    this.dataIcons = dataIcons;
    $http({method: 'get', url:'json/searchIcons.json'})
        .success(function(data, status, headers, config) {
                //searchIcons = data
            var searchIcons = data;
        return  searchIcons
                //this.searchIcons = searchIcons;
    })
    .error(function(data, status, headers, config){
        alert(data);
    });
    //can't figure out how to get it to set the value on searchIcons!!!
    
    this.localStorageSet = function(gardenObject) { 
        localStorage.setItem('gardenObject' + gardenObject.id, JSON.stringify(gardenObject));
        //return this.localStorageGetAll();
    },
    this.localStorageGet = function(index) {
        return JSON.parse(localStorage.getItem('gardenObject' + index));
    },
    this.localStorageGetAll = function() {
        console.log('in the service');
        var gardenObjects = [];
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf('gardenObject') !== -1) {
                    var gardenObject = localStorage.getItem(localStorage.key(i));
                    gardenObjects.push(JSON.parse(gardenObject));
                }
            }
        console.log(gardenObjects.length);
        return gardenObjects;
    };
    
}]);
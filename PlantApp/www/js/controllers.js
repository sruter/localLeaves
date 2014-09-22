 'use strict';

/* Controllers */
    var plantAppControllerModule = angular.module('plantAppControllerModule', []);

    plantAppControllerModule.controller('mainCtrl', ['$scope', '$state', '$http','plantObjectModel',
        function ($scope, $state, $http, plantObjectModel) {
			
            $scope.plantObjectModel = plantObjectModel; //may not need
            $scope.alert = function(text) {
                alert(text);
            };
            //$scope.txt = 'asdf';
            //var searchIcons = []
            $http.get('json/searchIcons.json').success(function(data) {
                //searchIcons = data
                $scope.searchIcons = data;
            });
            $scope.htmlInclude = '<svg style="position:absolute"><path d="M200,100 a500,500 0 0,1 300,0" style="stroke:#BC9D73;stroke-width:18px; fill:none;"/></svg>'
			$scope.state = $state;
//			alert('loaded')
            //console.log($scope.searchIcons)
             
        }]);

plantAppControllerModule.controller('menuCtrl', ['$scope', '$state',
    function($scope, $state) {
//        console.log("HI");
        $scope.$goBack = function() {
            window.history.back();
        };
		$scope.$noRotate = function() {
			if(window.innerHeight > window.innerWidth){
				document.getElementsByTagName("body").style.transform = "rotate(90deg)";
			}
		};
    }]);



plantAppControllerModule.controller('SearchResultsCtrl', ['$scope','$http', function($scope, $http) {  
        $scope.plantPics = [];
        $http.get('json/searchResults.json').success(function (data) {
            $scope.plantPics = data;
            //alert('I loaded');
			
			for (var i=0; i<4; i++) {
                $scope.addSlide(i);
          }
        });
        var slides = $scope.slides = [];
          $scope.addSlide = function(i) {
            var newWidth = 600 + slides.length;
            slides.push({
              image: $scope.plantPics[i].image,
              comName: $scope.plantPics[i].plantCommonName,
			  sciName: $scope.plantPics[i].plantScientificName
            })};              
       }]);

 plantAppControllerModule.controller('PlantInfoCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.plantInfo = [];
		$scope.images = [];
		$scope.plantTraits = [];	
		$scope.info=[];

	//to pull data and put into variable $scope.plantInfo
		$http.get('json/plantInfo.json').success(function (data) {
		$scope.plantInfo=data;
	
		//to pull list data into variable $scope.listNames
		$http.get('json/plantInfoListNames.json').success(function (data) {
			$scope.listNames=data;	
			
			
		//to separate objects in json file:
			$scope.images= $scope.plantInfo.images;
			$scope.plantTraits=	$scope.plantInfo.plantTraits;
			$scope.info=$scope.plantInfo.plantInfo;

		//to display the main images
				for(var k=0;k<$scope.images.length;k++){
					$scope.addSlide(k);
				}
		//to display the plant trait icons
				for(var t=0;t<$scope.plantTraits.length;t++){
					$scope.addTrait(t);
				}
		//to display common name
			document.getElementById("commonName").innerHTML=$scope.plantInfo.plantCommonName;

		//to display scientific name
			document.getElementById("scientificName").innerHTML=$scope.plantInfo.plantScientificName;

		//to display the plant info
				var text= "";
				for(var i=0;i<$scope.info.length;i++){
					text +="<b>"+$scope.listNames[i] +"</b>"+": "+ $scope.info[i] +"<br>";
				}
			document.getElementById("plantInfo").innerHTML=text;
		});
		});

			var traits = $scope.traits = [];
			  $scope.addTrait = function(i) {
				var newWidth = 600 + traits.length;
				traits.push({
				  image: $scope.plantTraits[i]
				});
			  };

			var slides = $scope.slides = [];
			  $scope.addSlide = function(i) {
				var newWidth = 600 + slides.length;
				slides.push({
				  image: $scope.images[i]
				});
			  };
    }]);   

 plantAppControllerModule.controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
	 
		$scope.favImage = "";
		$scope.userTraits = [];		 
		$scope.myGarden = [];
		$scope.morePlants=[];

	//to pull data and put into variable $scope.plantInfo
		$http.get('json/homeInfo.json').success(function (data) {
		$scope.homeInfo=data;
			
	
	//to separate objects in json file:
		var favImage=$scope.favImage= $scope.homeInfo.favoritePlant;
		$scope.userTraits=	$scope.homeInfo.userTraits;
		$scope.myGarden = $scope.homeInfo.gardenImages;
		$scope.morePlants=$scope.homeInfo.moreImages;

	//to display the plant trait icons
			for(var t=0;t<$scope.userTraits.length;t++){
				$scope.addTrait(t);
			}	
	//to display garden images
			for(var k=0;k<$scope.myGarden.length;k++){
					$scope.addGarden(k)
			}		
	//to display more plant images
			for(var k=0;k<$scope.morePlants.length;k++){
				$scope.addSlide(k);
			}	
		});

		var traits = $scope.traits = [];
		  $scope.addTrait = function(i) {
			var newWidth = 600 + traits.length;
			traits.push({
			  image: $scope.userTraits[i]
			});
		  };

		var gardens = $scope.gardens = [];
		  $scope.addGarden = function(i) {
			var newWidth = 600 + gardens.length;
			gardens.push({
			  image: $scope.myGarden[i]
			});
		  };

		var slides = $scope.slides = [];
		  $scope.addSlide = function(i) {
			var newWidth = 600 + slides.length;
			slides.push({
			  image: $scope.morePlants[i]
			});
		  };
    }]);		
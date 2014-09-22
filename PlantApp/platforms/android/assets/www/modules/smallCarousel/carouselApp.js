angular.module('FundooCarouselApp', ['fundoo.directives'])
  .controller('smallCarouselCtrl', ['$scope', 'FlickrApi', function($scope, flickr) {
    var carousel;

    $scope.hasPrevious = function() {
      return carousel ? carousel.hasPrevious() : false;
    };
    $scope.previous = function() {
      if (carousel) { carousel.prev(); }
    };
    $scope.hasNext = function() {
      return carousel ? carousel.hasNext() : false;
    };
    $scope.next = function() {
      if (carousel) { carousel.next(); }
    };

    var loadPhotos = function(carouselScope, page) {
      carousel.updatePageCount(6);
      carouselScope.photos = flickr.getPhotos(page);
      carouselScope.getPhotoUrl = function(photo) {
        return flickr.getPhotoUrl(photo);
      };
    };
    $scope.loadPage = function(page, tmplCb) {
      var newScope = $scope.$new();
      loadPhotos(newScope, page);
      tmplCb(newScope);
    };
    $scope.onCarouselAvailable = function(car) {
      carousel = car;
    };
  }]).factory('FlickrApi', function() {
    var pages = [
      	[ {"image":"iconflower1.png"},
		  {"image":"iconflower2.png"},
		  {"image":"iconflower3.png"}
		],
		[ {"image":"iconmaint1.png"},
		  {"image":"iconmaint2.png"},
		  {"image":"iconmaint3.png"}
		]
	];

    return {
      getPhotos: function(page) {
        // Ideally, go off and fetch the next page of data from the server, but we'll do it locally in the sample
        return pages[page];
      },
      getPhotoUrl: function(photo) {
        return photo.image;
		  
      }
    };
  });

/*
	PlantApp to do:
		
	LANDING PAGE (splash screen):
	-UH logo at bottom from corbin

	TOP BAR:
	-search bar get request (to the correct site)
	-slide out on search icon click feature using ng-show or separate view
	
	BOTTOM MENU BAR:
	-selector button might need more descriptive logo, maybe just a one or two word text line below the image
	
	SEARCH PAGE:
	-fan search page
	-program selector buttom
	-add user traits and rate a plant fan pages

	SEARCH RESULTS PAGE:
	-program selector buttom
	-feed with info from database
	-might need different colors for titles

	PLANT INFO PAGE:
	-program favorite plant buttom: adds plant to local storage and main image on home page
	-program add plant buttom: adds plant to local storage and my garden on home page
	-feed with info from database:
		* carousel of images
		* trait images that match search items
		* scrolling text information
	
	HOME PAGE:
	-feed from local storage:
		* main image is the favorite plant (maybe carousel)
		* icons are user traits
		* "my garden" are the main images of plants from the add buttom on plant info page, will have link to that plant
		* "more like this" are the plants from the algorithm with links to the respective plant info page
	
	
	LOCAL STORAGE FOR FAVORITES:
	
	-controller.js ideas from art app:
			//Uses local storage instead of http requests	
				$scope.favorites = JSON.parse(localStorage.getItem("favorites"));



				//opens profile and set fav/add as active or not
					$scope.openProfile = function(art){
					  console.log('open profile');
						$scope.$apply(function () {
							  $scope.selectedMarker = art;
							  console.log("is fav: "+$rootScope.isFavorite(art.artwork_id));                         $rootScope.favActive = $rootScope.isFavorite(art.artwork_id);
						});
					};

		-app.js:
			localStorage.removeItem("favorites");
            $rootScope.favActive = false;
            $rootScope.favorite = function (id,toggle) {
                var temp = [];
                if (localStorage.getItem("favorites")!=null) {
                    temp = JSON.parse(localStorage.getItem("favorites"));
                } 
                
                if (toggle){
                    console.log("add favorite: "+id);
                    temp.push(id);
                }else{
                    console.log("remove favorite: "+id);
                    var index = temp.indexOf(id);
                    if (index > -1) {
                        temp.splice(index, 1);
                    }
                }
                
                console.log(temp);
                localStorage.setItem("favorites",JSON.stringify(temp));
            };
            
            $rootScope.isFavorite = function (id) {
                var temp = [];
                if (localStorage.getItem("favorites")!=null) {
                    temp = JSON.parse(localStorage.getItem("favorites"));
                }
                
                for(var q=0; q<temp.length;q++) {
                    if (temp[q]==id){
                       return true; 
                    }
                }
                return false;
            };
			
			
		-html file  (use img instead of svg): 
			<span id="favorite_button_svg">
                <svg ng-click="$root.favActive = !$root.favActive;favorite(selectedMarker.artwork_id,$root.favActive)" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="82.529px" height="82.529px" viewBox="0 0 82.529 82.529" enable-background="new 0 0 82.529 82.529" xml:space="preserve" class="sizeofbutton">
                <circle fill="#6798AC" cx="41.264" cy="41.265" r="41.265"/>
                <path ng-class="{'fav': !$root.favActive, 'fav active': $root.favActive}" d="M58.016 26.693c-6.045-2.799-13.953-0.166-16.75 5.865 -2.797-6.031-10.703-8.667-16.75-5.865 -6.439 2.986-9.52 10.615-4.432 19.616 3.609 6.404 10.012 11.229 21.182 19.881 11.168-8.652 17.572-13.48 21.182-19.881C67.533 37.309 64.453 29.68 58.016 26.693z"/>
                </svg>
            </span>
		
*/
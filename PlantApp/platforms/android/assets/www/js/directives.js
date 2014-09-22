'use strict';

/* Directives */
angular.module('plantAppControllerModule').directive('fan', ['$http','plantObjectModel', function($http, plantObjectModel) {  
        //<div icon></div> in the html
    //have the service define searchTypes, and then search can sort through which ones show on page
    //widths, below can all be percentages of that, etc.
          return{
              restrict:'AE',
              scope:{
                icon: '=',
                },
			  templateUrl: 'partials/fanCarousel.html',
              link: function(scope, element, attrs) {
                  //console.log('wtf')
                    var ind4cat = attrs.num;
                    var widthDivWrap = element[0].offsetWidth;
                    var heightDivWrap = element[0].offsetHeight;
                    var divPercentOffSet = scope.divPercentOffSet = 100-(3*ind4cat);
//                    var svgWidth = 4*divPercentOffSet;
                    element.children().css({'width':divPercentOffSet+'%','height':divPercentOffSet+'%'});
                    var typetoShow = attrs.categ;
                    scope.selection = 0;
                    scope.selectionData = {};
                    var slides = scope.slides = [];
                    var POM = plantObjectModel
                    var dataIcons = POM.dataIcons //from service
                    var newObj = dataIcons[typetoShow];
                    scope.addSlide = function(i) {
                        slides.push({
                            image: newObj.icons[i]
                                });
                        };
                    for (var i=0; i<newObj.icons.length; i++) {
					   scope.addSlide(i);
                        };  
                    function touchHandlerDummy($event){ 
                       /* $event.preventDefault();
                        return false;*/
                    };
                    document.addEventListener("touchstart", touchHandlerDummy, false);
                    document.addEventListener("touchmove", touchHandlerDummy, false);
                    document.addEventListener("touchend", touchHandlerDummy, false);
                    document.addEventListener("mousedown", touchHandlerDummy, false);
                    scope.moveDirection = 'Left';
                    var slideLength = slides.length;
                    var slideCenter = Math.floor(slideLength/2);
                    scope.imagePosition = function(ind4img) {
                        
                        var newInd = ind4img - slideCenter;
                        var rotate = (newInd * 6);
                        if (slideLength == 4){
                            var left = 130+ind4img*30;};
                        if (slideLength == 3){
                            var left = 120+ind4img*30;};
                        if (slideLength == 5){
                            var left = 140+ind4img*30;};
                        var top = 28;
//                        console.log(top)
                        return {
                            left:left,
                            top:top,
                            rotate:rotate
                        }
                    }
                    scope.moveStylesOLD = function(ind4img){
                        var slideLength = slides.length;
                        
                        var centerTranslate = (divWidthOffSet*widthDivWrap/200)-80;  //assuming original size of image is 100x100
                        //console.log(centerTranslate)
                        var slideCenter = Math.floor(slideLength/2);
                        var newInd = ind4img - slideCenter;
                        if (newInd == 0){ //should also set it as selected for form
                            var rotateAngle = -90;
                            var rotateAngleTwo = 90;
                            var translateImg = 0;
                        }else{
                            var rotateAngle = (newInd*10);
                            var rotateAngleTwo = newInd*15;
                            var translateImg = (divWidthOffSet*widthDivWrap/400)*newInd;
                        };
                        var displayImg = 'block';
                        if (newInd > 2 || newInd < -2){displayImg = 'none';};
                        if (scope.moveDirection == 'Left'){
                            scope.animName = 'fadeInLeftNOTYET'+newInd};
                        if (scope.moveDirection == 'Right'){
                            scope.animName = 'fadeInRight'+newInd};
                        
                        return 'position:absolute;'+
                            'display:'+displayImg+';'+
                            'width:'+(.85*divWidthOffSet)+'px;'+
                            '-webkit-animation-name: '+scope.animName+';'+
                            '-webkit-animation-duration: .75s;'+
                            '-webkit-transform: translate('+centerTranslate+
                                'px) rotate('+rotateAngle+
                                'deg) translate('+translateImg+
                                'px) rotate('+rotateAngleTwo+'deg);' 
                    }
                    scope.moveRight = function(){
                        scope.moveDirection = 'Right';
                        var myPop = slides.pop();
                        slides.splice(0,0,myPop);
                    };
                    
                    scope.moveLeft = function(){ 
                        scope.moveDirection = 'Left';
                        var myShift = slides.shift();  
                        slides[slides.length] = myShift;
                    }
                }             
          }
    }]);

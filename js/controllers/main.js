eventManager.controller('mainCtrl',['$scope','$window',function($scope,$window){

    $scope.filters = 0;
    $scope.events = [{
        id: 0,
        type:  "Country",
        title: "Kenny Chesney w/ Grace Potter",
        city: "Nashville",
        state: "TN",
        currentMedia: {
            'background-image': '',
            'background-size':'',
            'background-position':''},
        image: {
            file: 'chesney.png',
            media: {
                mobile:{
                    width: 427,
                    height: 261,
                    top: 0,
                    left: -84,
                },
                tablet:{
                    width: 713,
                    height: 436,
                    top: -11,
                    left: -18,
                },
                tabDesk:{
                    width: 713,
                    height: 436,
                    top: -11,
                    left: -18,
                },
                desktop:{
                    width: 427,
                    height: 261,
                    top: 0,
                    left: -84,
                }
            },
        },
        priceLow: 30,
        priceHigh: 260
    },{
        id: 1,
        type:  "Jazz",
        title: "Gerald Albright Band",
        city: "Atlanta",
        state: "GA",
        currentMedia: {},
        image: {
            file: 'sax.png',        
            media: {
                mobile:{
                    width: 430,
                    height: 263,
                    top: 0,
                    left: 0,
                },
                tablet:{
                    width: 430,
                    height: 263,
                    top: 0,
                    left: 0,
                },
                tabDesk:{
                    width: 713,
                    height: 436,
                    top: -11,
                    left: -18,
                },
                desktop:{
                    width: 430,
                    height: 263,
                    top: 0,
                    left: 0,
                }
            }
        },
        priceLow: 15,
        priceHigh: 90
    },{
        id: 0,
        type:  "Electronic Rock",
        title: "The Rock Church",
        city: "Birmingham",
        state: "AL",
        currentMedia: {},
        image: {
            file: 'keyboard.png',        
            media: {
                mobile:{
                    width: 408,
                    height: 281,
                    top: -21,
                    left: -60,
                },
                tablet:{
                    width: 408,
                    height: 281,
                    top: -19,
                    left: -60,
                },
                tabDesk:{
                    width: 760,
                    height: 345,
                    top: -25,
                    left: -11,
                },
                desktop:{
                    width: 408,
                    height: 281,
                    top: -19,
                    left: -60,
                }
            }
        },
        priceLow: 20,
        priceHigh: 40
    }];

    setImage();

    var appWindow = angular.element($window);
    
      appWindow.bind('resize', function () {
          setImage();
          $scope.$apply();
      });

function setImage(){
    var media = '';
    var screenWidth = $window.innerWidth;

    if (screenWidth <= 320){
        media = 'mobile';
    }else if(320 < screenWidth && screenWidth <= 768){
        media = 'tablet';
    }else if(769 < screenWidth && screenWidth <= 1130){
        media = 'tabDesk';
    }else if(screenWidth > 1130){
        media = 'desktop';
    }
    for(var i=0;i<$scope.events.length;i ++){
        $scope.events[i].currentMedia['background-image'] = 'url(../img/' + $scope.events[i].image.file + ')';
        $scope.events[i].currentMedia['background-size'] = $scope.events[i].image.media[media].width + 'px '+ $scope.events[i].image.media[media].height + 'px',
        $scope.events[i].currentMedia['background-position'] = 'left ' + $scope.events[i].image.media[media].left + 'px top ' + $scope.events[i].image.media[media].top + 'px'
    }
}

}]);
eventManager.controller('mainCtrl',['$scope','$window',function($scope,$window){

    $scope.events = [{
        id: 0,
        type:  "Country",
        title: "Kenny Chesney w/ Grace Potter",
        city: "Nashville",
        state: "TN",
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
                desktop:{
                    width: 427,
                    height: 261,
                    top: 0,
                    left: -87,
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

    var appWindow = angular.element($window);
    
      appWindow.bind('resize', function () {
          console.log('Resized your browser ' + appWindow.innerWidth + 'px');
      });

$scope.setImage = function(img){

    var media = '';
    var screenWidth = $window.innerWidth;

    if (screenWidth <= 320){
        media = 'mobile';
    }else if(320 < screenWidth && screenWidth <= 768){
        media = 'tablet';
    }else if(screenWidth > 768){
        media = 'desktop';
    }

    return {
        'background-image':'url(../img/' + img.file + ')',
        'background-size': img.media[media].width + 'px '+ img.media[media].height + 'px',
        'background-position':'left ' + img.media[media].left + 'px top ' + img.media[media].top + 'px'
    }

}

}]);
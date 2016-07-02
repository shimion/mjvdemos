angular.module('applyForm')
 .controller('formCtrl', ['$scope', '$http', '$cookieStore','$state', '$timeout', '$rootScope', 'API_CONFIG',
 	function ($scope, $http, $cookieStore, $state, $timeout, $rootScope, API_CONFIG) {
	
    $scope.apply = {};
    $scope.yearList = [
      {years:  '1 year', value: 1},
      {years: '2 years', value: 2},
      {years: '3 years', value: 3},
      {years: '4 years', value: 4},
      {years: '5 years', value: 5},
      {years: '6 years', value: 6},
      {years: '7 years', value: 7},
      {years: '8 years', value: 8},
      {years: '9 years', value: 9},
      {years: '10 years', value: 10},
      {years: '11 years', value: 11},
      {years: '12 years', value: 12},
      {years: '13 years', value: 13},
      {years: '14 years', value: 14},
      {years: '15 years', value: 15},
      {years: '16 years', value: 16},
      {years: '17 years', value: 17},
      {years: '18 years', value: 18},
      {years: '19 years', value: 19},
      {years: '20 years', value: 20},
      {years: '21 years', value: 21},
      {years: '22 years', value: 22},
      {years: '23 years', value: 23},
      {years: '24 years', value: 24},
      {years: '25 years', value: 25},
      {years: '26 years', value: 26},
      {years: '27 years', value: 27},
      {years: '28 years', value: 28},
      {years: '29 years', value: 29},
      {years: '30 years', value: 30}
    ];

    $scope.stateList= [
      {value: "AL", state: "Alabama"},
      {value: "AK", state: "Alaska"},
      {value: "AZ", state: "Arizona"},
      {value: "AR", state: "Arkansas"},
      {value: "CA", state: "California"},
      {value: "CO", state: "Colorado"},
      {value: "CT", state: "Connecticut"},
      {value: "DE", state: "Delaware"},
      {value: "DC", state: "District of Columbia"},
      {value: "FL", state: "Florida"},
      {value: "GA", state: "Georgia"},
      {value: "HI", state: "Hawaii"},
      {value: "ID", state: "Idaho"},
      {value: "IL", state: "Illinois"},
      {value: "IN", state: "Indiana"},
      {value: "IA", state: "Iowa"},
      {value: "KS", state: "Kansas"},
      {value: "KY", state: "Kentucky"},
      {value: "LA", state: "Louisiana"},
      {value: "ME", state: "Maine"},
      {value: "MD", state: "Maryland"},
      {value: "MA", state: "Massachusetts"},
      {value: "MI", state: "Michigan"},
      {value: "MN", state: "Minnesota"},
      {value: "MS", state: "Mississippi"},
      {value: "MO", state: "Missouri"},
      {value: "MT", state: "Montana"},
      {value: "NE", state: "Nebraska"},
      {value: "NV", state: "Nevada"},
      {value: "NH", state: "New Hampshire"},
      {value: "NJ", state: "New Jersey"},
      {value: "NM", state: "New Mexico"},
      {value: "NY", state: "New York"},
      {value: "NC", state: "North Carolina"},
      {value: "ND", state: "North Dakota"},
      {value: "OH", state: "Ohio"},
      {value: "OK", state: "Oklahoma"},
      {value: "OR", state: "Oregon"},
      {value: "PA", state: "Pennsylvania"},
      {value: "RI", state: "Rhode Island"},
      {value: "SC", state: "South Carolina"},
      {value: "SD", state: "South Dakota"},
      {value: "TN", state: "Tennessee"},
      {value: "TX", state: "Texas"},
      {value: "UT", state: "Utah"},
      {value: "VT", state: "Vermont"},
      {value: "VA", state: "Virginia"},
      {value: "WA", state: "Washington"},
      {value: "WV", state: "West Virginia"},
      {value: "WI", state: "Wisconsin"},
      {value: "WY", state: "Wyoming"}   
    ];

    $scope.submitForm = function(form)    
    { 
       
        var req = 
        {
          method : 'POST',
          url    : API_CONFIG.API_URL + '/classes/applyForm',
          data   : $scope.apply,
          headers: { 
            'X-Parse-Application-Id' : API_CONFIG.APP_ID,
            'X-Parse-REST-API-Key'   : API_CONFIG.API_KEY
          }        
        }        
        $http(req)
        .success(function (data, status)
        { 
          alert("created");
        })
        .error(function (data, status)
        {
          alert(data, status);
        })
      	
		};//SubmitForm Function
 }]);
      
    
      
          
                  
     
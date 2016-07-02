'use strict';

var app = angular.module
('applyNow',
	[
		'ui.router',
		'angular-loading-bar',
		'ngCookies',
		'dropdown',
		'checkbox'
	]
)
app.config
	(
		[
			'$stateProvider',
			'$urlRouterProvider',
			'$locationProvider',
			'API_CONFIG',
			function ($stateProvider, $urlRouterProvider, $locationProvider, API_CONFIG)
			{
				$stateProvider
					.state
					('form',
						{
							url : '/',
							templateUrl : API_CONFIG.WP_URL + 'js/app/applyNow/get-started.html',
							controller: 'formCtrl'
						}
					)
					.state
					('form.step',
						{
							url : 'step/:step',
							templateUrl : API_CONFIG.WP_URL + 'js/app/applyNow/steps.html',
							controller: 'formCtrl'
						}
					)
				$urlRouterProvider.otherwise('/');
			}
		]
	)
app.constant
	('API_CONFIG',
		{
			// WP_URL  : 'http://empire4b.gouken/wp-content/themes/empire-america-v4/assets/',
			WP_URL  : 'http://mjvdemos.com/empire4b/wp-content/themes/empire-america-v4/assets/',
		  API_URL : 'https://api.parse.com/1',
		  APP_ID  : 'rj8KutBCAtAy3P4j6stbmaLBzN12STNzLzbFgvav',
		  API_KEY : 'k5MJiwTzrNj9x2a1EN40b7a4GraW9msENbgkm9RN'
		}
	)

app.run(['$rootScope', '$cookieStore', 'API_CONFIG', '$http', '$state',
		function($rootScope, $cookieStore, API_CONFIG, $http, $state)
		{
	    $rootScope.currentStep;

			$rootScope.$on
		      ('$stateChangeSuccess',
		        function (event, to, toParams, from, fromParams)
		        {
		          $rootScope.checkState($state.$current);
		        }
		      );
		      $rootScope.checkState = function(state){
		        switch(state.name)
		        {
		        	case 'form.step1':
		            $rootScope.currentStep = 1;
		          break;
		          case 'form.step2':
		            $rootScope.currentStep = 2;
		          break;
		          case 'form.step3':
		            $rootScope.currentStep = 3;
		          break;
		          case 'form.step4':
		            $rootScope.currentStep = 4;
		          break;
		          case 'form.step5':
		            $rootScope.currentStep = 5;
		          break;
		          case 'form.step6':
		            $rootScope.currentStep = 6;
		          break;
		          case 'form.step7':
		            $rootScope.currentStep = 7;
		          break;
		          case 'form.finish':
		            $rootScope.currentStep = 8;
		          break;
		        }
		      };
}])
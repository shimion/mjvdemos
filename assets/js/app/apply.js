'use strict';

var app = angular.module
('applyForm',
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
							url : '/applyNow',
							templateUrl : API_CONFIG.WP_URL + 'js/app/form/stepsSideBar.html',
							controller: 'formCtrl'
						}
					)
					.state
					('form.step1',
						{
							url : '/Getting_Started',
							templateUrl : API_CONFIG.WP_URL + 'js/app/form/step.html'
						}
					)
					.state
					('form.step2',
						{
							url : '/Current_Address',
							templateUrl : API_CONFIG.WP_URL + 'js/app/form/step2.html'
						}
					)
					.state
					('form.step3',
						{
							url : '/Subject_Property',
							templateUrl : API_CONFIG.WP_URL + 'js/app/form/step3.html'
						}
					)
					.state
					('form.step4',
						{
							url : '/Employment',
							templateUrl : API_CONFIG.WP_URL + 'js/app/form/step4.html'
						}
					)
					.state
					('form.step5',
						{
							url : '/Declarations1',
							templateUrl : API_CONFIG.WP_URL + 'js/app/form/step5.html'
						}
					)
					.state
					('form.step6',
						{
							url : '/Declarations2',
							templateUrl : API_CONFIG.WP_URL + 'js/app/form/step6.html'
						}
					)
					.state
					('form.step7',
						{
							url : '/Additional Information',
							templateUrl : API_CONFIG.WP_URL + 'js/app/form/step7.html'
						}
					)
					.state
					('form.finish',
						{
							url : '/Application_Complete',
							templateUrl : API_CONFIG.WP_URL + 'js/app/form/finish.html'
						}
					)
				$urlRouterProvider.otherwise('/applyNow/Getting_Started');
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
var app = angular.module
('quoteSearch',
	[
		'ui.router',
		'angular-loading-bar',
		'ngCookies',
		'dropdown',
		'modal',
		'currency'
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
							templateUrl : API_CONFIG.WP_URL + 'assets/js/app/search/main.html',
							controller  : 'searchCtrl'
						}
					)
				$urlRouterProvider.otherwise('/');
			}
		]
	)
app.constant
	('API_CONFIG',
		{
			// WP_SITE_URL : 'http://empire4b.gouken/',
			// WP_URL  : 'http://empire4b.gouken/wp-content/themes/empire-america-v4/',
			WP_SITE_URL : 'http://mjvdemos.com/empire4b/',
			WP_URL  : 'http://mjvdemos.com/empire4b/wp-content/themes/empire-america-v4/',
		  // APP_ID  : '',
		  // API_KEY : ''
		}
	)
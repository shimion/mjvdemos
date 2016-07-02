'use strict';

angular.module('dropdown', [])
	.directive('dropdown', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs, element) {
				$timeout(function(){
					(iElement).dropdown();
				},500)
			}
		};
	}])
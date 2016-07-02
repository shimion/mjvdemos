'use strict';

angular.module('checkbox', [])
	.directive('checkbox', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs, element) {
				$timeout(function(){
					(iElement).checkbox();
				},500)
			}
		};
	}])
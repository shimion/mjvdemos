'use strict';

angular.module('modal', [])
	.directive('modal', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs, element) {
				var target = iAttrs.target;
				jQuery(iElement).click(function(e){
					e.preventDefault();
					console.log(target);
					jQuery(target).modal('show');
				});
			}
		};
	}])
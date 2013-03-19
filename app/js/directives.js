'use strict';


var appDirectives = angular.module('PromptApp.directives', []);
appDirectives.directive('selectclick', function () {
    return function(scope, element) {
        element.bind('click', function () {
            console.log(element);
            var nodeName = element[0].nodeName;
            var getSelection = window.getSelection();
            var select = document.createRange();
            select.selectNodeContents(document.getElementsByTagName(nodeName)[0]);
            getSelection.addRange(select);
        });
    };
});
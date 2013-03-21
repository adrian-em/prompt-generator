'use strict';

/* Filters */

angular.module('PromptApp.filters', []).
  filter('beautify', function() {
    return function(input) {
      var output = input.charAt(0).toUpperCase();
        if (input.indexOf("Bold") >= 0) {
            output += input.slice(1, input.indexOf("Bold")) + " Bold";
        } else {
            output += input.slice(1);
        }

        return output;
    };
    }
  );
// Generated by CoffeeScript 1.3.1
/*global define
*/

define(['filters/filters'], function(filters) {
  'use strict';
  return filters.filter('twitterfy', [
    function() {
      return function(username) {
        return "@" + username;
      };
    }
  ]);
});

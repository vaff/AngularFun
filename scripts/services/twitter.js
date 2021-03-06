// Generated by CoffeeScript 1.3.3
/*global define
*/

define(['services/services', 'services/message'], function(services) {
  'use strict';
  return services.factory('twitter', [
    '$resource', 'message', function($resource, message) {
      var activity, get, tweets;
      tweets = {
        result: {}
      };
      activity = $resource('http://search.twitter.com/search.json', {
        callback: 'JSON_CALLBACK'
      }, {
        get: {
          method: 'JSONP'
        }
      });
      get = function(criteria, success, failure) {
        return tweets.result = activity.get({
          q: criteria
        }, function(Resource, getResponseHeaders) {
          message.publish('search', {
            source: 'Twitter',
            criteria: criteria
          });
          if (angular.isFunction(success)) {
            return success.apply(this, arguments);
          }
        }, failure);
      };
      return {
        get: get,
        tweets: tweets
      };
    }
  ]);
});

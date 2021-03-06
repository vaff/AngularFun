// Generated by CoffeeScript 1.3.3
/*global define
*/

define(['services/services'], function(services) {
  'use strict';
  return services.factory('people', [
    '$resource', function($resource) {
      var activity, get, getPerson, people, person, personActivity, post;
      people = {
        result: []
      };
      person = {
        result: {}
      };
      activity = $resource('./people', {}, {
        get: {
          method: 'GET',
          isArray: true
        },
        post: {
          method: 'POST'
        }
      });
      personActivity = $resource('./people/details/:id', {}, {
        get: {
          method: 'GET',
          isArray: false
        }
      });
      get = function(success, failure) {
        return people.result = activity.get(function() {
          if (angular.isFunction(success)) {
            return success.apply(this, arguments);
          }
        }, function() {
          if (angular.isFunction(failure)) {
            return failure.apply(this, arguments);
          }
        });
      };
      post = function(name, success, failure) {
        if (name == null) {
          name = "Somebody else";
        }
        return activity.post({
          "name": name
        }, function(person) {
          people.result.push(person);
          if (angular.isFunction(success)) {
            return success.apply(this, arguments);
          }
        }, failure);
      };
      getPerson = function(id, success, failure) {
        return person.result = personActivity.get({
          id: id
        }, function() {
          if (angular.isFunction(success)) {
            return success.apply(this, arguments);
          }
        }, function() {
          if (angular.isFunction(failure)) {
            return failure.apply(this, arguments);
          }
        });
      };
      return {
        get: get,
        people: people,
        post: post,
        person: person,
        getPerson: getPerson
      };
    }
  ]);
});

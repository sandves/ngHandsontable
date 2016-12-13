(function() {

  function hotRegisterer() {
    var instances = {};
    var subscriptions = {};

    return {
      getInstance: function(id) {
        return instances[id];
      },

      registerInstance: function(id, instance) {
        instances[id] = instance;
        if (id in subscriptions) {
          subscriptions[id]();
        }
      },

      removeInstance: function(id) {
        instances[id] = void 0;
      },

      subscribe: function(id, callback) {
        subscriptions[id] = callback;
      }
    };
  }
  hotRegisterer.$inject = [];

  angular.module('ngHandsontable.services').factory('hotRegisterer', hotRegisterer);
}());

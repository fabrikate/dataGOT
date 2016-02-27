(function() {
  angular
  .module('gotData')
  .factory('dataFactory', dataFactory);

  dataFactory.$inject = ['$http'];

  function dataFactory ($http) {
    var Characters = {};
    Characters.info = [];
    $http.get('../characters.json').then(function(data) {
      Characters.info = data.data;
    })
    return Characters;

  }


})();

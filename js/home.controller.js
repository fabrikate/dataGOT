(function() {
  angular
  .module('gotData')
  .controller("MainController", MainController);

  MainController.$inject = ['dataFactory'];

  function MainController (dataFactory) {
    var vm = this;
    vm.characters = dataFactory

    $.getJSON('../characters.json', function (data) {
      console.log(data);
      vm.people = data;
      vm.deadCharacters = searchBy('dead');
      vm.married = searchBy('marriage')
    })

    function searchBy(searchable) {
      vm.results = [];
      vm.people.forEach(function(person) {
        person[searchable] ? vm.results.push(person) : console.log('nope');
      })
      return vm.results;
    }


  }
})();

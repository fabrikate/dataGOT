(function() {
  angular
  .module('gotData')
  .controller("MainController", MainController);

  MainController.$inject = ['dataFactory'];

  function MainController (dataFactory) {
    var vm = this;
    vm.characters = dataFactory
    vm.info = vm.characters["info"]
    console.log(vm.characters["info"]);



  }
})();

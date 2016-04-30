(function() {
  'use strict';

  angular
    .module('which-beer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

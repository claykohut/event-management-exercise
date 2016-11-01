angular.module('ui.common', [])
.directive('alertBanner', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'assets/templates/ui/alert-banner.html',
    scope: {
       alert: '='
    },
    link: function(scope, elem, attrs){

    }
  };
})
.directive('guestListWrap', function(GuestList) {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'assets/templates/ui/guest-list.html',
    scope: {
       items: '='
    },
    link: function(scope, elem, attrs){
      scope.guestList = GuestList

      scope.sortableOptions = {
         handle: '> .drag-handle-wrap'
      }
    }
  };
})
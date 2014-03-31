'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('RunnerCtrl', ['$scope', function($scope) {
    $scope.runners = [
      {id: 1, name: 'Arthur'},
      {id: 2, name: 'Betty'}
    ];
    angular.forEach($scope.runners, function(runner) {
      runner.marathonResult = null;
    });
    $scope.race = {  //TODO: Need race abstraction?  Encapsulate everything in the race abstraction?
      track: function(runner_id, finish) {
        var result = ($scope.runners[runner_id].id == 1);
        finish(runner_id, result);
      }
    };
    $scope.gridOptions = {
      data: 'runners',
      enableCellSelection: true,
      enableRowSelection: false,
      enableCellEdit: true
//      columnDefs: [{field: 'marathonResult', displayName: 'Result', enableCellEdit: false}]
    };
    $scope.run = function() {
      for (var i=0; i<$scope.runners.length; i++) {  //TODO: Use angular.forEach?
        $scope.race.track(i, function(runner_id, result) {
          $scope.runners[runner_id].marathonResult = result ? 'win' : 'lose';
        });
      }
    };
  }])
;

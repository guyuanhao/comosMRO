/**
 * @author Leo GU
 * created on 31.05.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.routineMaintenance', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('routineMaintenance', {
            url: '/routineMaintenance',
            title: '日常维修',
            templateUrl: 'app/pages/routineMaintenance/routineMaintenance.html',
            controller: 'routineMaintenanceCtrl',
            sidebarMeta: {
              icon: 'ion-android-desktop',
              order: 0,
            },
          });
    }
  
  })();
  
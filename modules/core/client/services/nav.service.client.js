'use strict';

angular.module('tropicalbs')
  .factory('navService', navService);

navService.$inject = ['$http', '$location', '$window'];

function navService ($http, $location, $window) {

  var nav = {
    tabs: [
      { title:'Home', href:'#/home', uisref:'home', visibleRoles: ['public', 'user', 'admin', 'owner']},
      { title:'Blog', href:'#/blog', uisref:'blog', visibleRoles: ['public', 'user', 'admin', 'owner']},
      { title:'About', href:'#/about', uisref:'about', visibleRoles: ['public', 'user', 'admin', 'owner']},
      { title:'Admin', href:'#/admin', uisref:'admin', visibleRoles: ['admin', 'owner']}
    ]
  };

  return nav;
}

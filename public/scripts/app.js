/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */
angular
  .module('shopping', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/product.html',
      controllerAs: 'productsIndexCtrl',
      controller: 'ProductsIndexController'
    })
    .when('/products/:id', {
      templateUrl: '/templates/products-show.html',
      controllerAs: 'productsShowCtrl',
      controller: 'ProductsShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}

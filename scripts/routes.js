route
  .when('/', {
    templateUrl: 'views/main.html',
    handler: hljs.initHighlighting
  })
  .when('/api', {
    redirectTo: '/api/Home'
  })
  .when('/api/:article', {
    templateUrl: 'views/api.article.html',
  })
  .when('/404', {
    templateUrl: 'views/404.html'
  })
  .otherwise('/404');
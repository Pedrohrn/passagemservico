app = angular.module('passagem-servico',['ngRoute', 'sc.commons.directives.modal', 'sc.commons.directives.scStopClick', 'sc.commons.factories.toggle', 'sc.commons.service.scAlert', 'sc.commons.scTopMessages', 'sc.commons.filters.nl2br' ])

.config(function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide){
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  function carregarCssJs(obj) {
   	return {
	   	load: [ '$q', '$rootScope', function($q, $rootScope) {
        var head = document.getElementsByTagName('head')[0];
        var deferred = $q.defer()

        createElementsBy = function(moduleList, tagName, moduleType, fun){
          if (!moduleList || moduleList.length == 0){ return }

          $('head '+tagName+'[id="'+moduleType+'"]').remove();//remove dentro do head o que tiver com link/script (tagname) e id="moduleType"(css ou js)
          moduleList.forEach(function(moduleKey){
            var el = document.createElement(tagName);

            el.id = moduleType; //js/css

            var path = moduleType+"/"+moduleKey+"."+moduleType; //css/produto.css

            switch(tagName){
              case 'link':
                el.rel = "stylesheet";
                el.href = path; //css/produto.css
              case 'script':
                el.src = path; // /js/produto.js
            }

            head.insertBefore(el, head.lastChild);
          });
        };

        if (obj.js && obj.js.length > 0)   { createElementsBy(obj.js,  'script',  'js'); }
        if (obj.css && obj.css.length > 0) { createElementsBy(obj.css,   'link', 'css'); }

        setTimeout(() => {
          $rootScope.$apply(function(){ deferred.resolve(); })
        }, 30)

        return deferred.promise;
	   	}]
   	}
  }

  $routeProvider.otherwise({
    templateUrl: 'templates/index.html',
    resolve: carregarCssJs({
    	js: ['index', 'form'],
    })
  });

  app.lazy = {
    controller: $controllerProvider.register,
    directive: $compileProvider.register,
    filter: $filterProvider.register,
    factory: $provide.factory,
    service: $provide.service
  };
})

.run(function($rootScope, scAlert, scTopMessages) {
	$rootScope.scAlert = scAlert
	$rootScope.scTopMessages = scTopMessages

	window.onresize = function(){
    screenWidth = window.innerWidth

    $rootScope.$apply(function(){
      $rootScope.screen = {
        isXs: screenWidth < 479,
        isSm: screenWidth > 479 && screenWidth <= 768,
        isMd: screenWidth > 768 && screenWidth <= 1024,
        isLg: screenWidth > 1024,
      }
    })
  };
  window.onresize() // iniciando 'screen'
});
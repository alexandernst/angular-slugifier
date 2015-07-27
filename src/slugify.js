var slugify = angular.module('slugify', []);

slugify.provider('$speakingurl', function() {
    this.$get = ['$window', function($window) {
        return {
            slugify: $window.getSlug
        };
    }];
});

slugify.filter('slugify', ['$speakingurl', function($speakingurl) {
    return function(input, data) {
        data = data || {};
        return $speakingurl.slugify(input, data);
    };
}]);
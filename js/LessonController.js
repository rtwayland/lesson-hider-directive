angular.module('directivePractice')
    .controller('LessonController', function($scope, LessonService) {
        $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    });

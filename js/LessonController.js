angular.module('directivePractice')
    .controller('LessonController', function($scope, LessonService) {
        $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

        $scope.announceDay = function(lesson, day) {
          if (day) {
            alert(lesson + ' lesson was taught on ' + day + '.');
          } else {
            alert(lesson + ' has not been scheduled yet.');
          }
        };
    });

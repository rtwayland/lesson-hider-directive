angular.module('directivePractice')
    .directive('lessonHider', function() {
        return {
            restrict: 'E',
            templateUrl: 'lessonHider.html',
            scope: {
                lesson: '=',
                dayAlert: '&'
            },
            link: function(scope, elem, attrs) {
                scope.getSchedule.then(function(response) {
                    for (var i = 0; i < scope.schedule.length; i++) {
                        if (scope.schedule[i].lesson === scope.lesson) {
                            scope.lessonDay = scope.schedule[i].weekday;
                            elem.css('text-decoration', 'line-through');
                            return;
                        }
                    }
                });
            },
            controller: function($scope, LessonService, $element) {
                $scope.getSchedule = LessonService.getSchedule()
                    .then(function(response) {
                        $scope.schedule = response.data;
                    });

                $scope.deleteLesson = function() {
                    $element.remove();
                    $scope.$destroy();
                };
            }
        };
    });

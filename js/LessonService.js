angular.module('directivePractice')
    .service('LessonService', function($http) {
        this.getSchedule = function() {
            return $http.get('schedule.json');
        }
    });

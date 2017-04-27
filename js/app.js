var router = angular.module("router", ["ui.router"]);
router.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when("","/information");
    $urlRouterProvider.when("/activity","/activity/activity.summary");
    $stateProvider
        .state({
            name:"information",
            url:"/information",
            templateUrl:"sum/information.html"
        })
        .state({
            name:"activity",
            url:"/activity",
            templateUrl:"sum/activity.html"
        })
        .state({
            name:"activity.duce",
            url:"/activity.duce",
            templateUrl:"sum/duce.html"
        })
        .state({
            name:"activity.resident",
            url:"/activity.resident",
            templateUrl:"sum/resident.html",
            controller:function($scope,$http){
                $scope.check = false;
                $scope.che=function(check){
                    if($scope.check){
                        $scope.check = false;
                    }else{
                        $scope.check = true;
                    }


                };
                $http.get("data/list.json")
                    .then(function(data){
                        $scope.arr = data.data
                    });
                return $scope.arr;

            }

        })
        .state({
            name:"activity.presentation",
            url:"/activity.presentation",
            templateUrl:"sum/presentation.html"
        })
        .state({
            name:"activity.summary",
            url:"/activity.summary",
            templateUrl:"sum/summary.html"
        })
});

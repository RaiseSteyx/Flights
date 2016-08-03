(function (app) {
    var flightsController = function ($scope) {
        $scope.flights = [
            {
                airline: "United",
                number: 207,
                startTime:"13:00",
                endTime:"15:00",
                totalDuration:2,
                price:500,
                date: "12/1/2014",
                cities: ["ORD", "LAS"]
            },
            {
                airline: "United",
                number: 208,
                startTime:"13:00",
                endTime:"15:00",
                totalDuration:2,
                price:500,
                date: "12/1/2014",
                cities: ["SFA", "LAS"]
            }
        ];
    };

    app.controller("flightsController", ["$scope", flightsController]);

}(angular.module("airlineApp")));
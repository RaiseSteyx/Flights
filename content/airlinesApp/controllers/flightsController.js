(function (app) {
    var flightsController = function ($scope) {
        $scope.selectFlight = function (flight) {
            var toggle = !flight.approved;

            for (var f in $scope.flights) {
                $scope.flights[f].approved = false;
            }

            flight.approved = toggle;
        };

        $scope.flights = [
            {
                airline: "United",
                number: 207,
                startTime:"13:00",
                endTime:"15:00",
                totalDuration:2,
                price:500,
                date: "12/1/2014",
                cities: ["ORD", "LAS"],
                approved: false
            },
            {
                airline: "United",
                number: 208,
                startTime:"13:00",
                endTime:"15:00",
                totalDuration:2,
                price:500,
                date: "12/1/2014",
                cities: ["SFA", "LAS"],
                approved: false
            }
        ];
    };

    app.controller("flightsController", ["$scope", flightsController]);

}(angular.module("airlineApp")));
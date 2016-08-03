(function (app) {
    var flightsController = function ($scope, flightService, $timeout) {
        $scope.selectFlight = function (flight) {
            var toggle = !flight.approved;

            for (var f in $scope.flights) {
                $scope.flights[f].approved = false;
            }

            flight.approved = toggle;
            if (flightService.selectFlight(flight.id)) {
                if (toggle) {
                    $scope.status = "You have made a great decision!";
                    $timeout(function () {
                        $scope.status = null;
                    }, 1000);
                }
            }

        };
            $scope.flights = flightService.getFlights();
    };

    app.controller("flightsController", ["$scope", "flightService", "$timeout", flightsController]);

}(angular.module("airlineApp")));
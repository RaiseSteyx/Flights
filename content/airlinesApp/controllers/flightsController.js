(function (app) {
    var flightsController = function ($scope, flightService) {
        $scope.selectFlight = function (flight) {
            var toggle = !flight.approved;

            for (var f in $scope.flights) {
                $scope.flights[f].approved = false;
            }

            flight.approved = toggle;
            if (flightService.selectFlight(flight.id)) {
                $scope.status = "You have made a great decision!";
            }
            if (!toggle) {
                $scope.status = false;
            }

        };
            $scope.flights = flightService.getFlights();
    };

    app.controller("flightsController", ["$scope", "flightService", flightsController]);

}(angular.module("airlineApp")));
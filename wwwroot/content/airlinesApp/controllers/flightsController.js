(function (app) {

    var onError = function () {
        alert("error!!");
    };

    var flightsController = function ($scope, flightService, $timeout) {
        var onFlights = function(response) {
            $scope.flights = response.data;
        }

        var init = function () {
            $scope.flights = flightService.getFlights().then(onFlights,onError);
        };

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
        init();   
    };
    app.controller("flightsController", ["$scope", "flightService", "$timeout", flightsController]);

}(angular.module("airlineApp")));
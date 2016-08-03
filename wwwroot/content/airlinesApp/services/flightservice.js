(function (app) {
    var flightService = function ($http) {
        var flightFactory = {};
        var baseUrl = "http://localhost:5000/api/flights";
        flightFactory.getFlights = function () {
            return $http.get(baseUrl)
        };
        flightFactory.selectFlight = function (id) {
            //
            //  $http.put("/flight/select/3", id)
            //
            return true;
        };
        return flightFactory;
    };
    app.factory("flightService", ["$http", flightService]);
}(angular.module("airlineApp")));
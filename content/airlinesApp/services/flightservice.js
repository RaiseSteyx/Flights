(function (app) {
    var flightService = function () {
        var flightFactory = {};
        var data = [
                {
                    id:1,
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
                    id:2,
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

        flightFactory.getFlights = function () {
            return data;
        };
        flightFactory.selectFlight = function (id) {
            //
            //  $http.put("/flight/select/3", id)
            //
            return true;
        };
        return flightFactory;
    };
    app.factory("flightService", flightService);
}(angular.module("airlineApp")));
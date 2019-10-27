$(document).ready(function () {
    $("#submitWeather").on("click", function (event) {
        event.preventDefault();
        //get date now
        var now = moment().format('L');
        $(".date").append(now);

        //grab text user types into search input
        var city = $("#city").val().trim();

        // queryURL is the url we'll use to query the API
        var APIKey = "4ba053499928c9cc55c84c5428ed0660";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;

        /**
     * takes API data (JSON/object) and turns it into elements on the page
     * 
     */
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(queryURL);
                console.log(response);

                $(".city").html("<h2>" + response.name + "</h2)>");
                $(".temp").text("Temperature: " + (response.main.temp) + "F");
                $(".humidity").text("Humidity: " + response.main.humidity + "%");
                $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
                $(".icon").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");

            });


        //AJAX call for uv index
        $("#submitWeather").on("click", function (event) {
            event.preventDefault();
            //get date now
            //var now = moment().format('L');
            //$(".date").append(now);

            //grab text user types into search input
            var city = $("#city").val().trim();

            var APIKey = "4ba053499928c9cc55c84c5428ed0660";
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;
            var UVquery;

            $.ajax({
                url: queryURL,
                method: "GET"
            })
                // We store all of the retrieved data inside of an object called "response"
                .then(function (response) {
                    var lat = response.coord.lat;
                    var lon = response.coord.lon;


                    //var APIKey = "4ba053499928c9cc55c84c5428ed0660";
                    UVquery = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon + "&units=imperial";

                    $.ajax({
                        url: UVquery,
                        method: "GET"
                    }).then(function (response) {
                        console.log(UVquery);
                        console.log(response);

                        $(".uv").text("UV index: " + response.value);

                    });
                });
        });






        //AJAX call for 5-day forecast
        //$("#submitWeather").on("click", function (event) {
        //event.preventDefault();
        //get date now
        //var now = moment().format('L');
        //$(".date").append(now);

        //grab text user types into search input
        //var city = $("#city").val().trim();


        //pull information from the form and build the query URL
        //function buildQueryURL() {
        // queryURL is the url we'll use to query the API
        //function getFiveForecast(citySubmitted) {
        //var APIKey = "4ba053499928c9cc55c84c5428ed0660";
        //var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=${citySubmitted}&units=imperial&appid=" + APIKey;




        //$(".city").html("<h2>" + response.name + "</h2)>");
        //$(".temp").text("Temperature: " + (response.main.temp) + "F");
        //$(".humidity").text("Humidity: " + response.main.humidity + "%");
        //$(".icon").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");




        //$(".forecast").text("5-Day forecast: " + response.list);



    });
});
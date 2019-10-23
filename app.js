$(document).ready(function () {

    var now = moment().format('L');
    $(".date").append(now);

    //pull information from the form and build the query URL
    function buildQueryURL() {
        // queryURL is the url we'll use to query the API
        //var APIKey = "4ba053499928c9cc55c84c5428ed0660";
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?";

        //build object to contain API call's query parameters
        //set API key
        var queryParams = { "api-key": "4ba053499928c9cc55c84c5428ed0660" };
        //grab text user types into search input, add to queryParams object
        queryParams.q = $("#search-term")
            .val()
            .trim();

        return queryURL + $.param(queryParams);
    }

    function updatePage(data) {

        $(".city").html("<h2>" + data.name + "</h2>");
        $(".temp").text("Temperature " + data.main.temp + "F");
        $(".humidity").text("Humidity: " + data.main.humidity + "%");
        $(".wind").text("Wind Speed: " + data.wind.speed + "MPH");
        $(".icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");

    };

    $("#submitWeather").on("click", function (event) {
        event.preventDefault();

        var queryURL = buildQueryURL();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(updatePage);
    });
    // We store all of the retrieved data inside of an object called "response"


    var APIKey = "4ba053499928c9cc55c84c5428ed0660";
    var queryURL = "http://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);

            $(".uv").text("UV index: " + response.value);
        });

    var APIKey = "4ba053499928c9cc55c84c5428ed0660";
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=" + APIKey;

    //build object to contain API call's query parameters
    //set API key
    //var queryParams = { "api-key": "4ba053499928c9cc55c84c5428ed0660" };
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);

            $(".forecast").text("5-Day forecast: " + response.list);

        });
});

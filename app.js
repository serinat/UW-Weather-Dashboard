//$(document).ready(function () {
$("#submitWeather").on("click", function (event) {
    event.preventDefault();
    //get date now
    var now = moment().format('L');
    $(".date").append(now);

    //grab text user types into search input
    var city = $("#city").val().trim();

    //pull information from the form and build the query URL
    //function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var APIKey = "4ba053499928c9cc55c84c5428ed0660";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;

    //build object to contain API call's query parameters
    //set API key
    //var APIKey = "4ba053499928c9cc55c84c5428ed0660";

    //queryParams.q = $("#city")
    //.val()
    //.trim();

    //return queryURL + $.param(queryParams);
    //}

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

            //var weather = $("<div></div>");
            $(".city").html("<h2>" + response.name + "</h2)>");
            $(".temp").text("Temperature: " + (response.main.temp) + "F");
            $(".humidity").text("Humidity: " + response.main.humidity + "%");
            $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
            $(".icon").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");



        });


    //AJAX call for uv index
        var APIKey = "4ba053499928c9cc55c84c5428ed0660";
        var UVIqueryURL = "https://api.openweathermap.org/data/2.5/uvi?q=&lat" + lat + "&lon=" + lon + "&appid=" + APIKey;
        
        var lat = response.lat;
        var lon = response.lon;
        getUV(lat, lon); 

        $.ajax({
            url: UVIqueryURL,
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
                //console.log(queryURL);

                // Log the resulting object
                //console.log(response);

                $(".forecast").text("5-Day forecast: " + response.list);

            });
    });
$(document).ready(function () {
    $("#submitWeather").on("click", function (event) {
        //event.preventDefault();
        //get date now
        var now = moment().format('L');
        $(".date").append(now);
        event.preventDefault();

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
                //console.log(queryURL);
                console.log(response);
                getFullData(response);
                fiveDay(city);
            });
    });

    function getFullData(response) {
        console.log(response);
        var city = response.name;
        //var icon = "<img src=`http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>";
        var temp = response.main.temp;
        var humidity = response.main.humidity;
        var wind = response.wind.speed;
        var lat = response.coord.lat;
        var lon = response.coord.lon;


        $(".city").html("<h2>" + city + "</h2)>");
        console.log(city);
        $(".temp").text("Temperature: " + temp + "F");
        $(".humidity").text("Humidity: " + humidity + "%");
        $(".wind").text("Wind Speed: " + wind + "MPH");
        $(".icon").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");

        getUVIndex(lon, lat);

    }

    function getUVIndex(lon, lat) {

        var APIKey = "4ba053499928c9cc55c84c5428ed0660";
        var UVqueryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;

        $.ajax({
            url: UVqueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var UVindex = response.value;
            $(".uv").text(UVindex);

        });
    };
});


function fiveDay(city) {

        //var city = $("#city").val().trim();
        var APIKey = "4ba053499928c9cc55c84c5428ed0660";
        var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=" + APIKey + "&cnt=5";

        $.ajax({
            url: forecastQueryURL,
            method: "GET"
        })
            .then(function (response) {
                //console.log(forecastQueryURL);
                console.log(response);
                var forecastData = response.list;
                for (var i = 0; i < forecastData.length; i += 6) {
                    console.log(forecastData[i]);

                    var postDate = response.list[i].dt_txt.split(" ")[0];
                    var date = moment(postDate).format('L');
                    $(".date").text(date);
                    console.log(date);

                    var temp = forecastData[i].main.temp;
                    $(".temp").text("Temperature: " + temp + "F");
                    console.log(temp);

                    var humidity = forecastData[i].main.humidity;
                    $(".humidity").text("Humidity: " + humidity + "%");
                
                }
            })
        }
    


        


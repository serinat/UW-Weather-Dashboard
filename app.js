//pull information from the form and build the query URL
//function buildQueryURL() {
// queryURL is the url we'll use to query the API
var APIKey = "4ba053499928c9cc55c84c5428ed0660";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" + APIKey;

//build object to contain API call's query parameters
//set API key
//var queryParams = { "api-key": "4ba053499928c9cc55c84c5428ed0660" };
$.ajax({
    url: queryURL,
    method: "GET"
})
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".temp").text("Temperature (F) " + response.main.temp);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".wind").text("Wind Speed: " + response.wind.speed);

        console.log("Temperature (F): " + response.main.temp);

    });
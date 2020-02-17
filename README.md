# UW-Weather-Dashboard

- Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. In this homework assignment, your challenge is to build a weather dashboard using the OpenWeather API.

## Instructions

Build a weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities. Following the common templates for user stories, we can frame this challenge as follows:
As a traveler
I want to see the weather outlook for multiple cities
so that I can plan a trip accordingly
How do you deliver this? Here are some guidelines:


Use the OpenWeather API to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions.


Use AJAX to hook into the API to retrieve data in JSON format.


Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


Display the following under current weather conditions:


City


Date


Icon image (visual representation of weather conditions)


Temperature


Humidity


Wind speed


UV index

![Demo](demo/06-Server-Side-APIs_02-Homework_Assets_06-Server-Side-APIs-homework-demo.png)


Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city.


Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:


Date


Icon image (visual representation of weather conditions)


Temperature


Humidity

## Hints


Create multiple functions within your application to handle the different parts of the dashboard:


Current conditions


5-Day Forecast


Search history


UV index




You will need to make more than one AJAX call.


You will need to hardcode some of the parameters in the API's URL. User input will determine some of the other parameters.


Use localStorage to store any persistent data.
- The objective of this homework is to build a weather dashboard application with search functionality using a third party API (in this case, openweathermap). The idea is to run various ajax calls to retrieve data in JSON format from the API to find the temperature, humidity, wind speed, UV index and 5 day forecast for desired city.

- Before coding/building I reviewed the class slides and activities. Similar to the activity, I performed a test/response for a particular city (in my case, London) and was able to grab the above weather parameters. However, I did need to refer to the API documentation frequently to make sure I used the correct API call for whatever data I needed in my application.



## Resources
 - https://openweathermap.org/
 - https://stackoverflow.com/
 - https://www.w3schools.com/

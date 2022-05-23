// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });
$(function () {

    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: 30.097162,
        lon: -95.616055,
        units: "imperial"
    }).done(function (data) {
        console.log('The entire response:', data);
        data.daily.forEach(function (i) {
            if (i < 5) {

                //displays date in spot on card
                let date = new Date(i.dt * 1000).toDateString()


                //displays the temperature
                let tempMin = i.temp.min;
                let tempMax = i.temp.max;
                let dailyTemp = parseInt(tempMin) + '' + '°f / ' + '' + parseInt(tempMax) + '°f';


                //display description
                let weatherCondition = i.weather[0].description;
                // $(".card-descript").html("Description: " + weatherCondition);

                //display humidity
                let humidity = i.humidity;
                // $(".card-humidity").html("Humidity: " + humidity);

                //display wind speed
                let wind = i.wind_speed;
                // $(".card-wind").html("Wind speed: " + wind);

                //display pressure
                let pressure = i.pressure;
                // $(".card-pressure").html("Pressure: " + pressure);


                let dailyIcon = i.weather[0].icon;
                let iconLink = "http://openweathermap.org/img/wn/" + dailyIcon + "@2x.png";
                // $(".weather-icon").attr("src", iconLink)

                $("#card-list").append(
                    "<div class=\"card col-sm-12 col-md-4 col-lg-3\">" +
                    "<div class=\"card-top d-flex flex-column p-0\">" +
                    "<p class=\"card-date text-center bg-light mb-0\">" + date + "</p>" +
                    "<p class=\"card-temp text-center my-1 p-0\">" + dailyTemp + "</p>" +
                    "<img class=\"weather-icon align-self-center\" src=\"#\" alt=\"weather-icon\">" +
                    "</div><div class=\"container card-bottom\">" +
                    "<p class=\"card-descript mb-1 ms-1\">" + "Description: " + weatherCondition + "</p>" +
                    "<p class=\"card-humidity my-1 ms-1\">" + "Humidity: " + humidity + "</p>" +
                    " <hr class=\"m-0\">" +
                    "<p class=\"card-wind my-1 ms-1\">" + "Wind: " + wind + "</p>" +
                    "<hr class=\"m-0\">" +
                    "<p class=\"card-pressure my-1 ms-1\">" + "Pressure: " + pressure + "</p>" +
                    "</div></div>"
                );
                $(".weather-icon").attr("src", iconLink)
            }
        });

    });
});

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });
$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    30.097162,
    lon:   -95.616055,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    for (let i = 0; i < data.length; i++) {
        if (i < 5)

            //displays date in spot on card
            let date = new Date(data.daily[i].dt * 1000).toDateString()
        $(".card-date").html(date)

        //displays the temperature
        let tempMin = data.daily[i].temp.min;
        let tempMax = data.daily[i].temp.max;
        let dailyTemp = parseInt(tempMin) + '' + '°f / ' + '' + parseInt(tempMax) + '°f';
        $(".card-temp").html(dailyTemp);

        //display description
        let weatherCondition = data.daily[i].weather[0].description;
        $(".card-descript").html("Description: " + weatherCondition);

        //display humidity
        let humidity = data.daily[i].humidity;
        $(".card-humidity").html("Humidity: " + humidity);

        //display wind speed
        let wind = data.daily[i].wind_speed;
        $(".card-wind").html("Wind speed: " + wind);

        //display pressure
        let pressure = data.daily[i].pressure;
        $(".card-pressure").html("Pressure: " + pressure);


        let dailyIcon = data.daily[i].weather[0].icon;
        let iconLink = "http://openweathermap.org/img/wn/" + dailyIcon + "@2x.png";
        $(".weather-icon").attr("src", iconLink)
    }

});

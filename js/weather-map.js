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
    // console.log('Diving in - here is current information: ', data.current);
    // console.log(data.current.weather[0].description)
    // data.daily.forEach(function(dailyforecast, index){
    //     if(index < 5)
    //     console.log(dailyforecast.temp.max)
    //     console.log(dailyforecast.temp.min)
    // })
    // console.log('A step further - information for tomorrow: ', data.daily[1]);

    //displays date in spot on card
    let date = new Date(data.daily[0].dt * 1000).toDateString()
    $(".card-date").html(date)

    //displays the temperature
    let tempMin = data.daily[0].temp.min;
    let tempMax = data.daily[0].temp.max;
    let dailyTemp = parseInt(tempMin) + '' + '°f / ' + '' + parseInt(tempMax) + '°f';
    $(".card-temp").html(dailyTemp);

    //display description
    let weatherCondition = data.daily[0].weather[0].description;
    $(".card-descript").html("Description: " + weatherCondition);

    //display humidity
    let humidity = data.daily[0].humidity;
    $(".card-humidity").html("Humidity: " + humidity);

    //display wind speed
    let wind = data.daily[0].wind_speed;
    $(".card-wind").html("Wind speed: " + wind);

    //display pressure
    let pressure = data.daily[0].pressure;
    $(".card-pressure").html("Pressure: " + pressure);


    let dailyIcon = data.daily[0].weather[0].icon;
    let iconLink = "http://openweathermap.org/img.wn/" + dailyIcon + "@2x.png";
    $(".weather-icon").src.html(iconLink)

});

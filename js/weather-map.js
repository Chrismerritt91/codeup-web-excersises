// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });
$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    // console.log(data.current.weather[0].description)
    // data.daily.forEach(function(dailyforecast, index){
    //     if(index < 5)
    //     console.log(dailyforecast.temp.max)
    //     console.log(dailyforecast.temp.min)
    // })

    console.log('A step further - information for tomorrow: ', data.daily[1]);
});
$(function () {

    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: 30.097162,
        lon: -95.616055,
        units: "imperial"
    }).done(cardCreate)

        function cardCreate (data) {
        console.log('The entire response:', data);
        $("#card-list").html("");
        data.daily.forEach(function (element, index) {
            if (index < 5) {

                //displays date in spot on card
                let date = new Date(element.dt * 1000).toDateString()


                //displays the temperature
                let tempMin = element.temp.min;
                let tempMax = element.temp.max;
                let dailyTemp = parseInt(tempMin) + '' + '°f / ' + '' + parseInt(tempMax) + '°f';


                //display description
                let weatherCondition = element.weather[0].description;
                // $(".card-descript").html("Description: " + weatherCondition);

                //display humidity
                let humidity = element.humidity;
                // $(".card-humidity").html("Humidity: " + humidity);

                //display wind speed
                let wind = element.wind_speed;
                // $(".card-wind").html("Wind speed: " + wind);

                //display pressure
                let pressure = element.pressure;
                // $(".card-pressure").html("Pressure: " + pressure);


                let dailyIcon = element.weather[0].icon;
                let iconLink = "http://openweathermap.org/img/wn/" + dailyIcon + "@2x.png";

                $("#card-list").append(
                    "<div class=\"card col-8 col-sm-4 col-lg-2 justify-content-around\">" +
                    "<div class=\"card-top d-flex flex-column p-0 h-100\">" +
                    "<p class=\"card-date text-center bg-light my-0\">" + date + "</p>" +
                    "<p class=\"card-temp text-center my-1 p-0\">" + dailyTemp + "</p>" +
                    "<img class=\"weather-icon align-self-center\" src=\"" + iconLink + "\" alt=\"weather-icon\">" +
                    "<p class=\"card-descript mb-1 ms-1\">" + "Description: " + weatherCondition + "</p>" +
                    "<p class=\"card-humidity my-1 ms-1\">" + "Humidity: " + humidity + "</p>" +
                    "<hr class=\"m-0\">" +
                    "<p class=\"card-wind my-1 ms-1\">" + "Wind: " + wind + "</p>" +
                    "<hr class=\"m-0\">" +
                    "<p class=\"card-pressure my-1 ms-1\">" + "Pressure: " + pressure + "</p>" +
                    "</div></div>");

            }
        });

    }
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-95.616055, 30.097162], // starting position [lng, lat]
        zoom: 11 // starting zoom
    });

    const Marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-95.616055, 30.097162])
        .addTo(map);

    function onDragEnd() {
        const lngLat = Marker.getLngLat();
        console.log(lngLat)

        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_APPID,
            lat: lngLat.lng,
            lon: lnglat.lat,
            units: "imperial"
        }).done(cardCreate);
    }

    Marker.on('dragend', onDragEnd);


    $(".search-button").click(function(e){
        e.preventDefault()
        Marker.remove()
        const searchInput = $("#location-input").val()
        if(searchInput !== ''){
            geocode(searchInput, MAPBOX_API_TOKEN).then(function(result){
                map.setCenter(result);
                map.setZoom(12);

                const Marker = new mapboxgl.Marker({
                    draggable: true
                })
                    .setLngLat(result)
                    .addTo(map);

                reverseGeocode({lng: result[0], lat: result[1]}, MAPBOX_API_TOKEN).then(function(city){
                    $("#current-city").text(city)
                });


                $.get("http://api.openweathermap.org/data/2.5/onecall", {
                    APPID: OPEN_WEATHER_APPID,
                    lat: result[1],
                    lon: result[0],
                    units: "imperial"
                }).done(cardCreate);


            });

        }
    });
    // click to get lnglat coords
    // function add_marker (event) {
    //     var coordinates = event.lngLat;
    //     console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
    //     marker.setLngLat(coordinates).addTo(map);
    // }
    // map.on('click', add_marker);
});

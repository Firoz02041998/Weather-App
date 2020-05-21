window.addEventListener("load", ()=>{
    let lon;
    let lat;
    let tempDesc = document.querySelector(".temp-desc");
    let tempDegree = document.querySelector(".degree")
    let location = document.querySelector(".loc-time")
    let updatedIcon = document.querySelector(".icon")
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position=>{
            console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `http://api.weatherstack.com/current?access_key=fc31c255f2032749aaeb10fff12a8995&query=India`
            fetch(api)
            .then(data => {
                return data.json();
            })
            .then(response=>{
                console.log(response)
                const temp = response.current.temperature
                const time = response.current.weather_descriptions
                const loc = response.location.name
                const icon = response.weather_icons

                tempDegree.textContent = temp;
                tempDesc.textContent = time;
                location.textContent = loc;
            })
        });
    }

    function Icon(icon,iconID)
    {
        const skycons = new Skycons({"color": "pink"});
        skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);

    }
});
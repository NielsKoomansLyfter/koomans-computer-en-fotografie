const weather_text = document.getElementById('weathertext');
const forecast = document.getElementById('forecast');
let location_id = GetCookie('location-id');

GetForecast();
GetWeatherText();


let days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
let months = ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];

function GetForecast(){
    EmptyForecast();

    fetch(`https://forecast.buienradar.nl/2.0/forecast/${location_id.Value}`)
        .then((response) => (response.json()))
        .then((data) => {
            for(day of data['days']){
                let item = document.createElement('div');
                item.className = 'forecast-item';

                let pdate = new Date(day['datetime']);

                let date = document.createElement('span');
                date.className = 'forecast-date';
                date.innerText = `${days[pdate.getDay()]} ${pdate.getDate()} ${months[pdate.getMonth()]}`;
                item.appendChild(date);

                let icon_container = document.createElement('div');
                icon_container.id = 'forecast-icon-container';

                let icon = document.createElement('img');
                icon.className = 'forecast-icon';
                icon.setAttribute('src',`https://cdn.buienradar.nl/resources/images/icons/weather/116x116/${day['iconcode']}.png`);
                icon_container.appendChild(icon);

                item.appendChild(icon_container);

                let tempcontainer = document.createElement('div');
                tempcontainer.id = "forecast-temp";

                let high = document.createElement('span');
                high.className = 'forecast-temperature-high';
                high.innerText = `${day['maxtemp']}°`
                tempcontainer.appendChild(high);

                let low = document.createElement('span');
                low.className = 'forecast-temperature-low';
                low.innerText = `${day['mintemp']}°`;
                tempcontainer.appendChild(low);

                item.appendChild(tempcontainer);

                let windcontainer = document.createElement('div');
                let windicon = document.createElement('span');

                windcontainer.id = 'forecast-wind';

                windicon.id = 'forecast-wind-icon';
                windicon.innerHTML = '<i class="fa-sharp fa-regular fa-arrow-down"></i>';
                windicon.style = `transform: rotate(${day['winddirectiondegrees']}deg);`
                windcontainer.appendChild(windicon);

                let windspeed = document.createElement('span');
                windspeed.id = 'forecast-wind-speed';
                windspeed.innerText = `${day['windspeed']} Bft`;
                windcontainer.appendChild(windspeed);

                item.appendChild(windcontainer);

                forecast.appendChild(item);
            }
        });
}

function GetWeatherText(){
    fetch('https://data.buienradar.nl/1.1/content/weatherreport/NL')
        .then((response) => (response.json()))
        .then((data) => {
            weather_text.innerHTML = data['body'];
        });
}

function EmptyForecast(){
    while(forecast.firstChild){
        forecast.removeChild(forecast.firstChild);
    }
}

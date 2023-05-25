const forecast = document.getElementById('forecast');
let location_id = GetCookie('location-id');

GetForecast();

function GetForecast(){
    EmptyResults();

    fetch(`https://forecast.buienradar.nl/2.0/forecast/${location_id.Value}`)
        .then((response) => (response.json()))
        .then((data) => {
            for(day of data['days']){
                let item = document.createElement('div');
                item.className = 'forecast-item';

                let pdate = ParseTime(day['datetime']);
                let date = document.createElement('span');
                date.classname = 'forecast-date';
                date.innerText = `${pdate.Day} - ${pdate.Month}`;
                item.appendChild(date);

                let icon = document.createElement('img');
                icon.className = 'forecast-icon';
                icon.setAttribute('src',`https://cdn.buienradar.nl/resources/images/icons/weather/116x116/${day['iconcode']}.png`);
                item.appendChild(icon);

                let tempcontainer = document.createElement('div');
                let high = document.createElement('span');
                high.className = 'forecast-temperature-high';
                high.innerText = `${day['maxtemp']}`
                tempcontainer.appendChild(high);

                let low = document.createElement('span');
                low.className = 'forecast-temperature-low';
                low.innerText = `${day['mintemp']}`;
                tempcontainer.appendChild(low);

                item.appendChild(tempcontainer);
                forecast.appendChild(item);
            }
        });
}

function EmptyResults(){
    for(child of forecast.children){
        forecast.removeChild(child);
    }
}

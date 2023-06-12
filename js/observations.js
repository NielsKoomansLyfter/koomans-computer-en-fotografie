let station_id = GetCookie('station-id');

const current_icon = document.getElementById('current-icon');
const current_location = document.getElementById('current-location');
const current_temperature = document.getElementById('current-temperature');
const refresh_button = document.getElementById('refresh-button');
refresh_button.addEventListener('click', () => {
    GetObservations();
    GetForecast();
});

GetObservations();

function GetObservations(){
    if (station_id == null){
        return 'There was an error';
    }

    fetch(`https://observations.buienradar.nl/1.0/actual/weatherstation/${station_id.Value}`)
        .then((response) => (response.json())
        .then((data) => {
            current_icon.setAttribute('src',`https://cdn.buienradar.nl/resources/images/icons/weather/116x116/${data['iconcode']}.png`)
            current_location.innerText = data['stationname'];
            current_temperature.innerText = `${data['temperature']}°`;
        }));
}
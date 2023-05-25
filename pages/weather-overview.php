<section class="weather-overview">
    <div id="button-bar">
        <select id="charts">
            <optgroup label="Radarkaarten">
                <option data-type="Regen" value="RadarMapRain5mNL">Regen</option>
                <option data-type="Regen" value="RadarMapLightning5mNL">Onweer</option>
                <option data-type="Regen" value="RadarMapSnow5mNL">Sneeuw</option>
                <option data-type="Regen" value="RadarMapHail5mNL">Hagel</option>
            </optgroup>
            <optgroup label="Temperatuurkaarten">
                <option data-type="Regen" value="WeatherMapTemperatureActualNL">Actuele temperatuur</option>
                <option data-type="Regen" value="WeatherMapTemperatureFeelNL">Gevoelstemperatuur</option>
                <option data-type="Regen" value="WeatherMapTemperatureGroundNL">Grondtemperatuur</option>
                <option data-type="Regen" value="WeatherMapTemperatureGroundMinNL">Minimale grondtemperatuur</option>
                <option data-type="Regen" value="WeatherMapTemperatureMinNL">Minimale temperatuur</option>
                <option data-type="Regen" value="WeatherMapTemperatureMaxNL">Maximale temperatuur</option>
            </optgroup>
            <optgroup label="Windkaarten">
                <option data-type="Regen" value="WeatherMapWindNL">Windrichting en -kracht</option>
                <option data-type="Regen" value="WeatherMapWindMaxNL">Maximale windkracht</option>
                <option data-type="Regen" value="WeatherMapWindGustsNL">Windstoten</option>
                <option data-type="Regen" value="WeatherMapWindGustsMaxNL">Maximale windstoten</option>
            </optgroup>
            <optgroup label="Neerslagkaarten">
                <option data-type="Regen" value="WeatherMapRainfallLastHourNL">Regen laatste uur</option>
                <option data-type="Regen" value="WeatherMapRainfallLast24HoursNL">Regen laatste 24u</option>
            </optgroup>
            <optgroup label="Overige weerkaarten">
                <option data-type="Regen" value="WeatherMapSunshineNL">Zonuren</option>
                <option data-type="Regen" value="WeatherMapVisibilityNL">Zicht</option>
                <option data-type="Regen" value="WeatherMapHumidityNL">Vochtigheid</option>
                <option data-type="Regen" value="WeatherMapAirQualityLKINL">Algemene luchtkwaliteit</option>
                <option data-type="Regen" value="WeatherMapAirQualityOzoneNL">Ozon</option>
                <option data-type="Regen" value="WeatherMapAirQualityNO2NL">Stikstof</option>
                <option data-type="Regen" value="WeatherMapAirQualityPM10NL">Fijnstofconcentratie</option>
            </optgroup>
        </select>
    </div>
    <div id="radar">
        <img id="current-chart">
        <div id="chart-map">
            <span id="timestamp"></span>
        </div>
        <div id="radar-controls">
            <button id="play-pause-button"><i class="fa-sharp fa-solid fa-play"></i></button>
            <button id="previous-chart-button"><i class="fa-sharp fa-solid fa-backward"></i></button>
            <input type="range" id="slider">
            <button id="next-chart-button"><i class="fa-sharp fa-solid fa-forward"></i></button>
        </div>
    </div>
    <div id="forecast"></div>
</section>
<section class="weather-overview">
    <div id="button-bar">
        <div id="charts-pill">
            <select id="charts">
                <optgroup label="Radarkaarten">
                    <option data-type="Regen" data-domain="image-lite" value="RadarMapRain5mNL">Regen</option>
                    <option data-type="Regen" data-domain="image-lite" value="RadarMapLightning5mNL">Onweer</option>
                    <option data-type="Regen" data-domain="image-lite" value="RadarMapSnow5mNL">Sneeuw</option>
                    <option data-type="Regen" data-domain="image-lite" value="RadarMapHail5mNL">Hagel</option>
                </optgroup>
                <optgroup label="Temperatuurkaarten">
                    <option data-type="Regen" data-domain="image-lite" value="WeatherMapActualTemperature10mNL">Actuele temperatuur</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapTemperatureFeelNL">Gevoelstemperatuur</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapTemperatureGroundNL">Grondtemperatuur</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapTemperatureGroundMinNL">Minimale grondtemperatuur</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapTemperatureMinNL">Minimale temperatuur</option>
                    <option data-type="Regen" data-domain="image"value="WeatherMapTemperatureMaxNL">Maximale temperatuur</option>
                </optgroup>
                <optgroup label="Windkaarten">
                    <option data-type="Regen" data-domain="image" value="WeatherMapWindNL">Windrichting en -kracht</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapWindMaxNL">Maximale windkracht</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapWindGustsNL">Windstoten</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapWindGustsMaxNL">Maximale windstoten</option>
                </optgroup>
                <optgroup label="Neerslagkaarten">
                    <option data-type="Regen" data-domain="image-lite" value="WeatherMapRain1Hour10mNL">Regen laatste uur</option>
                    <option data-type="Regen" data-domain="image-lite" value="WeatherMapRain24Hours10mNL">Regen laatste 24u</option>
                </optgroup>
                <optgroup label="Overige weerkaarten">
                    <option data-type="Regen" data-domain="image" value="WeatherMapSunshineNL">Zonuren</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapVisibilityNL">Zicht</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapHumidityNL">Vochtigheid</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapAirQualityLKINL">Algemene luchtkwaliteit</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapAirQualityOzoneNL">Ozon</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapAirQualityNO2NL">Stikstof</option>
                    <option data-type="Regen" data-domain="image" value="WeatherMapAirQualityPM10NL">Fijnstofconcentratie</option>
                </optgroup>
            </select>
        </div>
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
</section>
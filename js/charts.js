
class Timestamp{
    constructor(year,month,day,hour,minute,second){
        this.Year = year;
        this.Month = month;
        this.Day = day;
        this.Hour = hour;
        this.Minutes = minute;
        this.Seconds = second;
    }
}

class ChartTime{
    constructor(time,url){
        this.Time = time;
        this.Url = url;
    }
}

let images = [];
let isLoading = false;

const timestamp = document.getElementById('timestamp');
const chart_selector = document.getElementById('charts');
chart_selector.addEventListener('change', () =>{
    let selectedOption = chart_selector.options[chart_selector.selectedIndex];
    GetCharts(selectedOption.getAttribute('data-domain'),selectedOption.getAttribute('value'),24,0,false,true);
});

const slider = document.getElementById('slider');
slider.addEventListener('input', () => {
    if (images != null && images.length > 0 && !isLoading) {
        current_chart.setAttribute('src',images[slider.value].Url);

        let date = ParseTime(images[slider.value].Time);

        timestamp.innerText = `${date.Hour}:${date.Minutes}`;
    }
});

const current_chart = document.getElementById('current-chart');

let selectedOption = chart_selector.options[chart_selector.selectedIndex];
GetCharts(selectedOption.getAttribute('data-domain'), selectedOption.getAttribute('value'),24,0,false,true);

function GetCharts(domain, type, history, forecast, renderText, renderBackground) {
    isLoading=true;
    images = [];

    let url = domain.indexOf('image-lite') >= 0 ? `https://image-lite.buienradar.nl/3.0/metadata/${type}` : `https://image.buienradar.nl/2.0/metadata/sprite/${type}`;
    url += `?history=${history}`;
    url += `&forecast=${forecast}`;
    url += `&size=Full`;
    url += `&renderText=${renderText}`;
    url += `&renderBackground=${renderBackground}`;

    if (type.indexOf('RadarMap') >= 0){
        current_chart.style = 'background-image: url(\'https://image-lite.buienradar.nl/3.0/background/MapWebmercatorNL?size=Full\')'
    }
    else{
        current_chart.style = 'background-image:none'
    }

    fetch(url)
        .then((response) => (response.json()))
        .then((data) => {
            for(time of data['times']){
               images.push(new ChartTime(time['timestamp'],time['url']));
            }
        })
        .finally(() => {
            slider.value = 0;
            slider.max = images.length;
           
            current_chart.setAttribute('src',images[0].Url);
            let date = ParseTime(images[0].Time);

            timestamp.innerText = `${date.Hour}:${date.Minutes}`;

            isLoading=false;
        });  
}

function ParseTime(time){
    let parts = time.split('T');
    let datepart = parts[0];
    let timepart = parts[1];

    let year = FixInt(parseInt(datepart.split('-')[0]));
    let month = FixInt(parseInt(datepart.split('-')[1]));
    let day = FixInt(parseInt(datepart.split('-')[2]));

    let hour = FixInt(parseInt(timepart.split(':')[0]) + 2);
    let minutes = FixInt(parseInt(timepart.split(':')[1]));
    let seconds = FixInt(parseInt(timepart.split(':')[2]));

    return new Timestamp(year,month,day,hour,minutes,seconds);
}

function FixInt(int){
    if (int < 10){
        return `0${int}`;
    }

    return int;
}

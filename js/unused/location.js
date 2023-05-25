let isOnResults = false;
let isOnInput = false;

const results = document.getElementById('search-results');
const query = document.getElementById('location-query');
query.addEventListener('keydown', (event) => {
    if (event.key == 'Enter'){
        results.style = 'display:table';
        SearchLocation(query.value);
    }
});
query.setAttribute('onclick','OpenResults');

document.addEventListener('click', () => {
    if (!isOnResults && !isOnInput){
        results.style = 'display:none';
    }
});

function SearchLocation(query){
    fetch(`https://location.buienradar.nl/1.1/location/search?query=${query}`)
        .then((response) => (response.json()))
        .then((data) => {
            EmptyResults();

            for(result of data){
                let listItem = document.createElement('li');
                listItem.innerText = result['name']

                listItem.setAttribute('aria-station-id',result['weatherstationid']);
                listItem.setAttribute('aria-location-id',result['id']);
                listItem.setAttribute('aria-country-code',result['countrycode']);
                listItem.setAttribute('onclick','ResultClick(this)');

                let arrow = document.createElement('i');
                arrow.className = 'fa-solid fa-arrow-right';
                listItem.appendChild(arrow);
                
                results.appendChild(listItem);
            }
        });
}

function ResultClick(item){
    document.cookie = `name=${item.innerText}`;
    document.cookie = `location-id=${item.getAttribute('aria-location-id')}`
    document.cookie = `station-id=${item.getAttribute('aria-station-id')}`
    document.cookie = `country-code=${item.getAttribute('aria-country-code')}`

    results.style = 'display:none';
}

function EmptyResults(){
    for(child of results.children){
        results.removeChild(child);
    }
}

function OpenResults(){
    results.style = 'display:table';
}

class SearchResult{
    constructor(name,stationId,locationId,countryCode){
        this.Name = name;
        this.StationId = stationId;
        this.LocationId = locationId;
        this.CountryCode = countryCode;
    }
}

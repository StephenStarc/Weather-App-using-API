const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
// const place = 'pondicherry'

//DOM elements -- 
const input = document.getElementById('input')
const Search = document.getElementById('Search')
const celeies = document.getElementById('celeies')
const cityInput = document.getElementById('cityInput')
const weatherreport = document.getElementById('weatherreport')
const country = document.getElementById('country')
const lat = document.getElementById('lat')
const lon = document.getElementById('lon')
// const tempCel = document.getElementById('tempCel')
const windMph = document.getElementById('windMph')
const humidity = document.getElementById('humidity')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aed0ab734emshd56fe0467051e93p1d29ccjsn638007335fe6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const weather = async (newsearch) => {
try {
	const response = await fetch(`${url}${newsearch}`, options);
	const result = await response.json();
    console.log(result)
	weatherInfo(result);
} catch (error) {
	console.error(error);
}
}
weatherInfo = (result) => {
    cityInput.innerText = `${result.location.name}`
    weatherreport.innerText = `${result.current.condition.text}`
    celeies.innerHTML = `<h1 id="deg">${result.current.temp_c}°</h1><p id="cel">Celsies</p>`
    country.innerText = `${result.location.country}`
    lat.innerText = `Lat: ${result.location.lat}`
    lon.innerText = `Long: ${result.location.lon}`
    // tempCel.innerText = ` Temp - Celsius: ${result.current.temp_c}°`
    windMph.innerText = `Wind MPH: ${result.current.temp_f}`
    humidity.innerText = `Humidity: ${result.current.humidity}`
}

Search.addEventListener('click', newsearch = () => {
    newsearch = input.value
    weather(newsearch)
    console.log(newsearch)
})

window.addEventListener('load', weather('Pondicherry'))

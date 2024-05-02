// HTML den verileri çekme
const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");


/* addEventListener
! olay ne olduğunda gerçekleşecek ?
!olay gerçekleştikten sonra ne  olacak ?
*/

btn.addEventListener("click", () => {
    const cityName = cityInput.value

    getData(cityName)
});


function getData(name) {

    const API = "10eb3c0f4dfa4ecbf3bccea9fa01cac0";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;

    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            const { name, sys: { country }, main: { temp, feels_like, humidity }, weather: [{ description }], wind: { speed } } = data

            // verileri js'e çekme
            const city = document.querySelector(".city")
            const temperature = document.querySelector(".temp")
            const hum = document.querySelector(".humidity")
            const wind = document.querySelector(".wind")
            const weatherDesc = document.querySelector(".weather")
            const feeling = document.querySelector(".feeling")
            console.log(city, temperature, hum, wind, weatherDesc, feeling)

            // js'e çekilen elemanları yerine yerleştirme
            city.textContent = `${name}, ${country}`;
            temperature.innerText = `${temp.toFixed(0)}°`;
            hum.textContent = `Nem: %${humidity}`
            wind.innerHTML = `Rüzgar: ${speed}km/s`;
            weatherDesc.innerHTML = `<i>${description.toUpperCase()}</i>`
            feeling.textContent = `Hissedilen : ${feels_like}`
        })
        .catch(err => console.log(err))
        // inputun içeriğini boşalt
    cityInput.value = "";
    // inputa odaklanır
    cityInput.focus();
    

};


























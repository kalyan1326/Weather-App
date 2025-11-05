console.log("lets start");

const apiKey = "f0bb3bd85b1ec81e3685fc5354da8ddc"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName = document.querySelector("input")
let search = document.querySelector("button")
let sunImg = document.querySelector("#sunImg")
let des = document.querySelector("#des")
let hum = document.querySelector("#humidity")
let win = document.querySelector("#wind")
let temp = document.querySelector("#tempa")
let cityname = document.querySelector(".city")
let datee = document.querySelector("#date")
const today = new Date();
console.log(today);
let date = today.toLocaleDateString();


// https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=f0bb3bd85b1ec81e3685fc5354da8ddc

const checkWeather = async (city) => {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);   
        const data = await response.json();
        console.log(data);
        const temperature = Math.round(data.main.temp);
        const weatherDescription = data.weather[0].description;
        const wind = data.wind.speed
        const weatherMain = data.weather[0].main
        const humidity = data.main.humidity
        cityname.innerHTML = data.name
        datee.innerHTML = date
        temp.innerHTML = `${temperature}°C`
        des.innerHTML = weatherDescription
        hum.innerHTML = `${humidity}%`
        win.innerHTML = `${wind}km/h`

        console.log(weatherMain)
        // sunImg.src  = "images/clouds.png"

        if(weatherMain == "Clouds"){
            sunImg.src  = "images/clouds.png"
        }
        else if(weatherMain == "clear"){
            sunImg.src  = "images/clear.png"
        }
        else if(weatherMain == "drizzle"){
            sunImg.src  = "images/drizzle.png"
        }
        else if(weatherMain == "mist"){
            sunImg.src  = "images/mist.png"
        }
        else if(weatherMain == "rain"){
            sunImg.src  = "images/rain.png"
        }

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }   
};
// checkWeather();



search.addEventListener("click", ()=>{
    // console.log(cityName.value)

    checkWeather(cityName.value)
    cityName.value= ""

})
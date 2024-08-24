// let weatherTemp = document.getElementsByClassName("weather-temp");
// let precipitation = document.getElementsByClassName("precipitation");
// let humidity = document.getElementsByClassName("humidity");
// let wind = document.getElementsByClassName("wind");
 

const apikey = "e374cae37fbf9ba76c083a33f830dda7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-container input");
const SearchBtn = document.querySelector(".search-container button");   

        async function checkWeather(city) {
            const res = await fetch(apiUrl + city + `&appid=${apikey}`);
            let data = await res.json();
            console.log(data);
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".weather-temp").innerHTML = data.main.temp + "°C";
            document.querySelector(".value").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind .value").innerHTML = data.wind.speed + "km/h";
            let now = new Date();
            let today = now.getDate()  + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
            // console.log(today);
            // $('#datePicker').val(today);
        
            document.querySelector(".date-day").innerHTML = today
        }

        SearchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        }) 




      
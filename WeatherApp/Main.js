//Constants for openweather api
const apiKey = "2daf8e9175af8bbaa6e342aa02443bac";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=";

//Const. for user input
const userInput = document.querySelector(".input1");

//Const. for button
const userClick = document.querySelector(".button1");

//Icon displayed depending on the current weather
const icons = document.querySelector(".weatherIcon");

//Param: City Name
async function weatherChecker(location){
    //Get response from api and put in to variable 'data'
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    //If there is an error let user know
    if(data.cod=="404"){
        document.querySelector(".location").innerHTML = "Invalid City Input, Try Again";
        document.querySelector(".temps").innerHTML = "-";
        document.querySelector(".Humidity").innerHTML = "-";
        document.querySelector(".Wind").innerHTML ="-";   
        icons.src = "";
    }
    //else output the data for city
    else{
    document.querySelector(".location").innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".temps").innerHTML = Math.round(data.main.temp) + "°c" ;
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";
    }

    //Change the icon based of current weather
    if(data.weather[0].main == "Clouds"){
        icons.src = "images/Clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        icons.src = "images/Clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        icons.src = "images/Rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        icons.src = "images/Drizzle.png";
    }
    else if (data.weather[0].main == "Thunderstorm"){
        icons.src = "images/Thunderstorm.png";
    }
    else {
        icons.src = "images/Mist.png";
    }
}

//If search icon clicked check the weather
userClick.addEventListener("click", ()=>{
    weatherChecker(userInput.value);
    }
);

//if enter is pressed check the weather
const input = document.querySelector("input");
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    weatherChecker(userInput.value);
  }
});


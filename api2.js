let request = new XMLHttpRequest();
let city = "Dublin";
let APIKEY = "9b6e9334febd361b203e92c066725b28";

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    console.log(newData);
    let htmlString = "<div><strong>City:</strong> " + newData.name + "</div>";
    htmlString += "<div><strong>Current Weather:</strong> " + newData.weather[0].description + "</div>";
    htmlString += "<div><strong>Temperature:</strong> " + (+newData.main.temp - 273.15).toFixed(2) + "</div>";
    document.getElementById("data").innerHTML = htmlString;
}

function submitCity() {
    city = document.getElementById("cityForm")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKEY)

        request.send();
}

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
    }
    if (this.readyState == 4 && this.status == 404) {
        document.getElementById("data").innerHTML = "<strong>City not found. Please try again!</strong>";
    }
}

request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKEY);

request.send();

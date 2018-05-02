let request = new XMLHttpRequest();

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    let htmlString = "<div><strong>Name:</strong> " + newData.name + "</div>";  
    htmlString += "<div><strong>Height:</strong> " + newData.height + "</div>";
    htmlString += "<div><strong>Mass:</strong> " + newData.mass + "</div>";
    htmlString += "<div><strong>Hair_color:</strong> " + newData.hair_color + "</div>";
    htmlString += "<div><strong>Skin_color:</strong> " + newData.skin_color + "</div>";
    htmlString += "<div><strong>Eye_color:</strong> " + newData.eye_color + "</div>";
    htmlString += "<div><strong>Birth_year:</strong> " + newData.birth_year + "</div>";
    document.getElementById("data").innerHTML = htmlString
}

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
    }
}

request.open("GET", "https://swapi.co/api/people/1/")
request.send()

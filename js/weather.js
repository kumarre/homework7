function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style["display"] = "block";

    //Set default location if one isn't provided
    let place = "ann arbor";
    let country = "us";

    // Your code here.
    let location = document.querySelector("#location").value;
    if (location.length == 0) {
        location = "ann arbor";
    }
    else if (location.split(",").length == 1) {
        place = location;
    }
    else {
        let loc_array = location.split(",");
        place = loc_array[0];
        country = loc_array[1];
    }
    
    console.log("Location is : " + place + ", " + country);


  
    //set default temperature format if one isn't provided
    let format;

    // Your code here.
    if (document.querySelector("input[name=temp]:checked") == null) {
        format = "imperial"
    }
    else {
        format = document.querySelectorAll("input[name=temp]:checked")[0].value;
    }
    console.log("Format is :" + format);



    //set the query  
    let query;
    // Your code here.
    let appid =  "cbdfac893fa4a8707a6ce38a25f57314";

    console.log("place is city name: " + isNaN(place));
    if (isNaN(place)) {
        //city name
        query = 'https://api.openweathermap.org/data/2.5/weather?q='+place+','+country+'&units='+format+'&appid='+appid;

    }
    else {
        //zip code
        query = 'https://api.openweathermap.org/data/2.5/weather?zip='+place+','+country+'&units='+format+'&appid='+appid;        
    }

    console.log("Query is :" + query);
    //Create and set variables for each of the elements you
    //need to update, location, highs and lows, 
    //the image, etc.

    let loc;
    let temp;
    let description;
    let tempImg;
    // Your code here.
    $.getJSON(query,function(json){
        // Use returned json to update the values of the three 
        // elements in HTML.  
        // I would print the JSON to the console
        // Your code here.
        loc = json["name"];
        temp = json["main"]["temp"];
        description = json["weather"][0]["description"];
        tempImg = "http://openweathermap.org/img/wn/"+json["weather"][0]["icon"]+".png";

        console.log(JSON.stringify(json));

        // Update the value for the location.  You should show the CITY name, even if the zip code is entered.
        document.querySelector("#loc").innerHTML = loc;

        // Update the value for the temperature and weather conditions.
        document.querySelector("#temp").innerHTML = temp + " with " + description;

        // Update the value for the weather icon, making sure to include the alt text.
        document.querySelector("#tempImg").src = tempImg;
        document.querySelector("#tempImg").title = description;
        document.querySelector("#tempImg").alt = description;
    });
};

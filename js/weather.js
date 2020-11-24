function gettingJSON(){
    //Display the forecast
    // Your code here.

    document.querySelector("#getIt").addEventListener("click", function() {
        //Set default location if one isn't provided
        let location;

        // Your code here.

        location = document.querySelector("#location").value;
        if (location.length == 0) {
            location = "ann arbor, us";
        }
        console.log("Location is : " + location);

        let loc_array = location.split(",");

        let item1 = loc_array[0].toLowerCase();
        // console.log("item 1 is: "+item1);

<<<<<<< Updated upstream
    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.
=======
        let item2 = loc_array[1].toLowerCase();
>>>>>>> Stashed changes

        item2 = item2.trim();

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
        let api =  "cbdfac893fa4a8707a6ce38a25f57314";

        console.log("item1 is city name: " + isNaN(item1));
        if (isNaN(item1)) {
            //city name
            query = 'https://api.openweathermap.org/data/2.5/weather?q='+item1+','+item2+'&units='+format+'&appid='+api;

        }
        else {
            //zip code
            query = 'https://api.openweathermap.org/data/2.5/weather?zip='+item1+','+item2+'&units='+format+'&appid='+api;        
        }

        console.log("Query is :" + query);
        //Create and set variables for each of the elements you
        //need to update, location, highs and lows, 
        //the image, etc.

        let loc;
        let temp;
        let tempImg;
        // Your code here.
        $.getJSON(query,function(json){
            // Use returned json to update the values of the three 
            // elements in HTML.  
            // I would print the JSON to the console
            // Your code here.
            console.log(JSON.stringify(json));
            // Change the div with the weather information so that it is now visible.
            document.querySelector("#forecast").style["display"] = "block";
            // Update the value for the location.  You should show the CITY name, even if the zip code is entered.
            document.querySelector("#loc").innerHTML = json["name"];

            // Update the value for the temperature and weather conditions.
            document.querySelector("#temp").innerHTML = json["main"]["temp"] + " with " + json["weather"][0]["description"];

            // Update the value for the weather icon, making sure to include the alt text.
            document.querySelector("#tempImg").src = "http://openweathermap.org/img/wn/"+json["weather"][0]["icon"]+"@2x.png";
            document.querySelector("#tempImg").title = json["weather"][0]["description"];
            document.querySelector("#tempImg").alt = json["weather"][0]["description"];
        });
    })
}

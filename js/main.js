/* One ring to rule them all */

//global variables
var foodItemList;
var topItemListURL= "http://";
var hotelInfoURL="http://10.10.1.193:8080/Food/service/hotel?";
//var geoLocation=getLocation();


function showTopItemList(){
    $.ajax({ // ajax call starts
        type:"GET",
        url: topItemListURL, // Rest call for the top item list
        //data: geoLocation, // Send value of the geo location of the user
        dataType: 'json', // Choosing a JSON datatype
        success: function(data) // Variable data contains the data we get from serverside
        {

        },
        error:function(data)
        {

        }
    });
}

function showHotelInfo(){
    $.ajax({ // ajax call starts
        type:"GET",
        url: hotelInfoURL+"name=IMAX", // Rest call for the top item list
        //data:data , // Send value of the geo location of the user
        dataType: 'jsonp', // Choosing a JSON datatype
        success: function(data) // Variable data contains the data we get from serverside
        {
               alert(data.hotelId);
        },
        error:function(data)
        {
            alert(data.hotelId);
        }
    });
}
//Main function on load
$(document).ready(function(){
    //showTopItemList();
    showHotelInfo();
});

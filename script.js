$(document).ready(function () {
    var m = moment();
    var currentDate = m.format("MMMM Do YYYY");
    var currentDay = m.format("dddd");
    var currentTime = m.format("h:mm:ss a");
    var currentHour = moment().hours();
    const block = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];


//---Saving the current day and date to the header of the html file.
    $("#currentDay").text(currentDay + ", " + currentDate);
//---Click event listner to save calendar event to local storage.
    $(".saveBtn").on("click", function() {
       var onClick = $(this).attr("data-value");
       var calEvent = $(onClick).val();
       localStorage.setItem(onClick, calEvent);
    });

   
  
     
  



    
});
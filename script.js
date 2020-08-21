$(document).ready(function () {
    var m = moment();
    var currentDate = m.format("MMMM Do YYYY");
    var currentDay = m.format("dddd");
    var currentTime = m.format("h:mm:ss a");
    var currentHour = moment().hours();
    const block = ["#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17"];
    console.log(currentHour)
    //var eventLog = document.querySelector("textarea");
//---Saving the current day and date to the header of the html file.
    $("#currentDay").text(currentDay + ", " + currentDate);

//----Changing the color of the time blocks based on current time.
function timeBlockColor() {
    for (let i = 6; i < 18; i++) {

        let hour = '#' + i;
        let calendarHour = parseInt($(hour).attr("id"));
        $(hour).removeClass();
        if (
            calendarHour > currentHour) {
            $(hour).attr("class", "row future col-10");
        }
        else if (
            calendarHour === currentHour) {
            $(hour).attr("class", "row present col-10");
        }
        else if (
            calendarHour < currentHour) {
            $(hour).attr("class", "row past col-10");
        }

    };
}
timeBlockColor();

  
//---Click event listner to save calendar event to local storage.
    $(".saveBtn").on("click", function() {
       var onClick = $(this).attr("data-value");
       var calEvent = $(onClick).val();
       localStorage.setItem(onClick, calEvent);
    });

//---On page refresh it pulls data from local storage.
for (let i = 0; i < block.length; i++) {        
    $(block[i]).val(localStorage.getItem(block[i]));
    };    

    
     
  



    
});
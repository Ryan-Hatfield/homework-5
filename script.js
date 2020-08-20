$(document).ready(function () {
    var m = moment();
    var currentDate = m.format("MMMM Do YYYY");
    var currentDay = m.format("dddd");
    var currentTime = m.format("h:mm:ss a");
    var currentHour = moment().hours();

    $("#currentDay").text(currentDay + ", " + currentDate);
    
});

$(document).ready(function () {
  // get current time from day.js
  $("#currentDay").text(dayjs().format("MMMM D YYYY, h:mm:ss a"));
  // when save button is clicked, set this time & event text to local storage
  $(".saveBtn").on('click', function (e) {
    
    var thisTime = $(this).parent().attr('id');
    var thisEvent = $(this).siblings('.description').val();

    localStorage.setItem(thisTime, thisEvent);
  });

  // get local storage items
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));


  // assign classes based off time
  function currentTime() {

    var currentHour = dayjs().hour();
    console.log(currentHour);
    
    $(".time-block").each(function () {
        
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log( blockHour, currentHour)

        if (blockHour < currentHour) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        }
        else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
    })
}

// call the function to check the time
currentTime();

});

 

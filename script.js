//Setting up Date 
var date = document.getElementById("currentDay");
date = moment().format('LLLL');
    //document.getElementById('currentDay').innerHTML = "Today is " + date;
    $('#currentDay').html("Today is " + date)
//Setting up If Date is

    

//Setting up Saving an item to Local Storage
$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        var timeSave = $(this).parent().attr("id");
        var textSave= $(this).siblings(".user-text").val();
        localStorage.setItem(timeSave, textSave);
        //localStorage.getItem('timeSave');
    })
});

//Making sure Text will stay on screen when page is refreshed.
//document.getElementsByClassName("user-text").innerHTML = localStorage.getItem("timeSave");
//$('.user-text').html(localStorage.timeSave);
//localStorage.getItem('timeSave');


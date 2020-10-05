$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        var timeSave = $(this).parent().attr("id");
        var textSave= $(this).siblings(".user-text").val();
        localStorage.setItem(timeSave, textSave);
    })
});



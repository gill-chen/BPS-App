$(document).ready(function() {
    $(".result").hide(); 
});

/*Enters wound-type to stage*/
$("#wound-type").on("click", "a", function(){
    var value = $(this).text();
    $("#selected-type").text(value);
});

/*Enters wound-condition to stage*/
$("#wound-condition").on("click", "a", function(){
    var value = $(this).text();
    $("#selected-condition").text(value);
});

/*Enters exudate level to stage*/
$("#exudate-level").on("click", "a", function(){
    var value = $(this).text();
    $("#selected-exudate").text(value);
});
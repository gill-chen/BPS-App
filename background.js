
var query = "";

/*Enters wound-type to stage*/
$("#wound-type").on("click", "a", function(){
    var value = $(this).text();
    query = value; 
    $("#selected-type").text(query); 
    $("#wound-type").attr("hidden", true);
    $("#wound-condition").attr("hidden", false);
});

/*Enters wound-condition to stage*/
$("#wound-condition").on("click", "a", function(){
    var value = query + "+" + $(this).text();
    query = value;
    $("#selected-condition").text(query);
    $("#wound-condition").attr("hidden", true);
    $("#exudate-level").attr("hidden", false);
});

/*Enters exudate level to stage*/
$("#exudate-level").on("click", "a", function(){
    var value = query + "+" + $(this).text() + " Exudate";
    query = value;
    $("#selected-query").text(query);
    $("#exudate-level").attr("hidden", true);
    $("#confirmation").attr("hidden", false);
});

// Confirm query and cleans up query to match id 
$("#get-recommendations").on("click", function(){
    var result = query.toLowerCase();
    result = result.replace("exudate", "")
    result = result.trim();
    result = result.replace("+", "-");
    result = result.replace("+", "-");
    result = result.replace("/", "");
    $("#"+result).attr("hidden", false);
    $("#info").attr("hidden", false);
});

$("#change-wound-type").on("click", function(){
    window.location.reload(false);  
});




var query = "";

/*Enters wound-type to stage*/
$("#wound-type").on("click", "a", function(){
    var value = $(this).text();
    query = value; 
    $("#selected-type").text(value);
    $("#wound-type").hide();
    $("#wound-condition").removeAttr("hidden");
});

/*Enters wound-condition to stage*/
$("#wound-condition").on("click", "a", function(){
    var value = query + "+" + $(this).text();
    query = value;
    $("#selected-condition").text(query);
    $("#wound-condition").hide();
    $("#exudate-level").removeAttr("hidden");
});

/*Enters exudate level to stage*/
$("#exudate-level").on("click", "a", function(){
    var value = query + "+" + $(this).text() + " Exudate";
    query = value;
    $("#selected-query").text(query);
    $("#exudate-level").hide();
    $("#confirmation").removeAttr("hidden");
});

// Confirm query and cleans up query to match id 
$("#confirmation").on("click", "a", function(){
    var result = query.toLowerCase();
    result = result.replace("exudate", "")
    result = result.trim();
    result = result.replace("+", "-");
    result = result.replace("+", "-");
    result = result.replace("/", "");
    $("#"+result).removeAttr("hidden");
    $("#info").removeAttr("hidden");
});

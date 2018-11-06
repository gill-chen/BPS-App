
var type = "";
var condition = "";
var exudate = "";
var query = "";  

/*Enters wound-type to stage*/
$("#wound-type").on("click", "a", function(){
// fades out other buttons 
    $("#wound-type a").addClass("fade-button");
    $(this).removeClass("fade-button");

// stores query  
    type = $(this).text();
    $("#selected-type").text(type); 
    $("#wound-condition").attr("hidden", false);
    $("#confirmation").attr("hidden", false);
    if (type != "" && condition !="" && exudate != ""){
        $("#get-recommendations").attr("hidden", false);
    }
    return false;
});

/*Enters wound-condition to stage*/
$("#wound-condition").on("click", "a", function(){
// fades out other buttons 
    $("#wound-condition a").addClass("fade-button");
    $(this).removeClass("fade-button");
// stores query
    if (condition == ""){
        $( "<center><p>+</p></center>" ).insertBefore("#selected-condition");
    }  
    condition = $(this).text();
    $("#selected-condition").text(condition);
    $("#exudate-level").attr("hidden", false);
    if (type != "" && condition !="" && exudate != ""){
        $("#get-recommendations").attr("hidden", false);
    }
    return false;
});

/*Enters exudate level to stage*/
$("#exudate-level").on("click", "a", function(){
// fades out other buttons 
    $("#exudate-level a").addClass("fade-button");
    $(this).removeClass("fade-button");
// stores query 
    if (exudate == ""){
        $( "<center><p>+</p></center>" ).insertBefore("#selected-exudate");
    }  
    exudate = $(this).text() + " exudate";
    $("#selected-exudate").text(exudate);
    $("#confirmation").attr("hidden", false);
    if (type != "" && condition !="" && exudate != ""){
        $("#get-recommendations").attr("hidden", false);
    }
    return false;
});

// Confirm query and cleans up query to match id 
$("#get-recommendations").on("click", function(){
// cleans up query to look up results 
    query = type + "-" + condition + "-" + exudate;
    var result = query.toLowerCase();
    result = result.replace("exudate", "");
    result = result.trim();
    result = result.replace("/", "");
// shows hidden results
    $("#"+result).attr("hidden", false);
    $("#info").attr("hidden", false);
//hides selection divs 
    $("#wound-type").attr("hidden", true);
    $("#wound-condition").attr("hidden", true);
    $("#exudate-level").attr("hidden", true);
    $("#get-recommendations").attr("hidden", true);
    $("#change-wound-type").attr("hidden", false);
});

$("#change-wound-type").on("click", function(){
    window.location.reload(false);  
});




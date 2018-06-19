(function(){
    "use strict";

    var $pickButton = $("#pickButton");
    var $otherButton = $("#otherButton");

    $("#reasonDropdown li a").on("click", function(){
        var reason = $(this).text();
        $pickButton.text(reason);        
    });

    $("#othersDropdown li a").on("click", function(){
        var other = $(this).text();
        $otherButton.text(other);
    });

})();
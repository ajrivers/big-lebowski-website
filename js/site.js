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

    var $sentDialog = $("#sentDialog");

    $("#contactForm").on("submit", function(){
        $sentDialog.modal('show');
        return false;
    });

    var $sentAlert = $("#sentAlert");

    $sentDialog.on("hidden.bs.modal", function(){
        //alert("close");
        $sentAlert.show();
    });

    $sentAlert.on("close.bs.alert", function(){
        $sentAlert.hide();
        return false;
    });

    $("#contactForm input[type=submit]").tooltip({
        placement: "left",
        delay: {
            show: 500,
            hide: 0
        }
    });

    $("#theCarousel").carousel();

})();
$("document").ready(function() {
    // MENU-BUTTON & MENU
    var screenWidth = $(window).width();
    if (screenWidth < 850) {
        $(".menu-button").show();
        $(".menu").hide();
    }
    $(window).resize(function() {
        screenWidth = $(window).width();
        if (screenWidth < 850) {
            $(".menu-button").show();
            $(".menu").hide();
        } else {
            $(".menu-button").hide();
            $(".menu").show(); 
        }
    });
    $(".menu-button").on("click", function(e) {
        $(".menu").slideToggle("slow");
        e.preventDefault();
    });
    
    
    
    
});

/*


*/
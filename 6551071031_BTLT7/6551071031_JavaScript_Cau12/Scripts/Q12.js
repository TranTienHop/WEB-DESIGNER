$(document).ready(function() {
    $(".checkme").on("change", function() {
        let card = $(this).closest(".checkbox-card"); 

        if ($(this).is(":checked")) {
            card.find(".passport-box, .apply-box").slideDown(); 
        } else {
            card.find(".passport-box, .apply-box").slideUp();  
        }
    });
});

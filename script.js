$(document).ready(function() {
    // Load nav into each page
    $('nav#desktop').load('/components/nav.html');
    $('nav#mobile').load('/components/nav_mobile.html', function() {

        // Show mobile-friendly nav when clicking menu button
        $("nav#mobile img#menu").click(function() {
            $("nav#mobile ul").css("display", "flex");
        });

        // Hide mobile-friendly nav when clicking nav background
        $("nav#mobile ul").click(function(e) {
            if(e.target == this) {
                $("nav#mobile ul").css("display", "none");
            }
        });
    });
});
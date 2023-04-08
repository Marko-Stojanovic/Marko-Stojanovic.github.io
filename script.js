$(document).ready(function() {
    // Load nav into each page
    $('nav#desktop').load('/components/nav.html');
    $('nav#mobile').load('/components/nav_mobile.html', function() {
        $("nav#mobile img#menu").click(function() {
            $("nav#mobile ul").css("display", "flex");
        });

        $("nav#mobile ul").click(function() {
            $("nav#mobile ul").css("display", "none");
        });
    });
});
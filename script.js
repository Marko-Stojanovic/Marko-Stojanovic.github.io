$(document).ready(function() {
    // Load nav into each page
    $('nav#desktop').load('/components/nav.html');
    $('nav#mobile').load('/components/nav_mobile.html', function() {

        // Change nav link color to blue for current page
        if (window.location.pathname == '/') { $("nav ul li:nth-child(1) a").css('color', 'var(--color-blue-light)'); }
        if (window.location.pathname == '/events.html') { $("nav ul li:nth-child(2) a").css('color', 'var(--color-blue-light)'); }
        if (window.location.pathname == '/about.html') { $("nav ul li:nth-child(3) a").css('color', 'var(--color-blue-light)'); }

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
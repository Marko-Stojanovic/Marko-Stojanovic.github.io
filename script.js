$(document).ready(function() {
    // Load nav and footer into each page
    $('nav').load('/components/nav.html');
    $('footer').load('/components/footer.html');
});

// Toggle dropdown when clicking dropdown button
function toggleDropdown() {
    $("#nav-dropdown-links").toggle();
};

// Hide dropdown when clicking outside dropdown menu
$(document).click((event) => {
    if (!$(event.target).closest('#nav-dropdown').length) {
        $("#nav-dropdown-links").hide();
    }
});
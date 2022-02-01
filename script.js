// Toggle dropdown when clicking dropdown button
$(document).ready(function(){
    $("#nav-dropdown").click(function(){
        $("#nav-dropdown-links").toggle();
    });
});

// Hide dropdown when clicking outside dropdown menu
$(document).click((event) => {
    if (!$(event.target).closest('#nav-dropdown').length) {
        $("#nav-dropdown-links").hide();
    }
});
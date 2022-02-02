$(document).ready(function() {
    // Load nav and footer into each page
    $('nav').load('/components/nav.html');
    $('footer').load('/components/footer.html');
});

// Show modal when clicking log in button
function showModal() {
    $("#nav-log-in-modal").show(150);
    $("#nav-log-in-modal-tint").show();
};

function hideModal() {
    $("#nav-log-in-modal").hide(150);
    $("#nav-log-in-modal-tint").hide();
};

// Toggle dropdown when clicking dropdown button
function toggleDropdown() {
    $("#nav-dropdown-links").toggle(150);
};

// Hide dropdown when clicking outside dropdown menu
$(document).click((event) => {
    if (!$(event.target).closest('#nav-dropdown').length) {
        $("#nav-dropdown-links").hide(150);
    }
});
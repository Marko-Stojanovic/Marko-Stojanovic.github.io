$(document).ready(function() {
    // Load nav and footer into each page
    $('nav').load('/components/nav.html', function() {
        if (sessionStorage.getItem("logInStatus") == "true") {
            $("#nav-log-in").hide();
            $("#nav-sign-out").show();
            console.log("blue");
        }
    });
    $('footer').load('/components/footer.html');
});

// Show modal when clicking log in button
function showModal() {
    $("#nav-modal").show(150);
    $("#nav-modal-tint").show();
};

function hideModal() {
    $("#nav-modal").hide(150);
    $("#nav-modal-tint").hide();
    $("#nav-modal h3").hide(150);
    $("#nav-modal #name").val("");
    $("#nav-modal #pass").val("");
};

// Toggle dropdown when clicking dropdown button
function toggleDropdown() {
    $("#nav-dropdown-links").toggle(150);
};

function logIn() {
    if ($("#nav-modal #name").val() == "marko-stojanovic" &&
        $("#nav-modal #pass").val() == "supdup134") {
            sessionStorage.setItem("logInStatus", "true");
            location.reload();
    }
    else {
        $("#nav-modal h3").show(150);
    }
};

function signOut() {
    sessionStorage.setItem("logInStatus", "false");
    location.reload();
};

// Hide dropdown when clicking outside dropdown menu
$(document).click((event) => {
    if (!$(event.target).closest('#nav-dropdown').length) {
        $("#nav-dropdown-links").hide(150);
    }
});
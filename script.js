// Admin usernames
const names = ["marko-stojanovic", 
               "maddy-meier", 
               "karen-mosquera",
               "nahid-akter"];

$(document).ready(function() {
    // Load nav and footer into each page
    $('nav').load('/components/nav.html', function() {
        if (sessionStorage.getItem("logInStatus") == "true") {
            // Show admin features
            $("#nav-log-in").hide();
            $("#nav-sign-out").show();
            $(".delete").show();
        }
    });
    $('footer').load('/components/footer.html');

    // Load comments
    if (document.location.href.match(/[^\/]+$/)[0] == "inquiries.html") {
        $.getJSON("/data/inquiries.json", function(json) {
            json.comments.forEach(function (comment, i) {
                $.get("/components/comment.html", function(data) {
                    var $data = $(data);
                    if (comment.reply == "true") $data.addClass("reply");
                    if (comment.admin == "true") $data.addClass("admin");
                    $data.find("#name").text(comment.name);
                    $data.find("#time").text(comment.time);
                    $data.find("#text").text(comment.text);
                    $("#width-limit").append($data);
                });
            });
        });
    }

    // Toggle accordion
    $(".accordion-button").click(function() {
        $(this).prev().toggleClass("rotate");
        $(this).next().slideToggle(150);
    });
});

// Hide dropdown when clicking outside dropdown menu
$(document).click((event) => {
    if (!$(event.target).closest('#nav-dropdown').length) {
        $("#nav-dropdown-links").slideUp(150);
    }
});

// Show modal when clicking log in button
function showModal() {
    $("#nav-modal").show(150);
    $("#nav-modal-tint").show();
};

// Hide modal when clicking on cancel button
function hideModal() {
    $("#nav-modal").hide(150);
    $("#nav-modal-tint").hide();
    $("#nav-modal h3").hide(150);
    $("#nav-modal #name").val("");
    $("#nav-modal #pass").val("");
};

// Toggle dropdown when clicking dropdown button
function toggleDropdown() {
    $("#nav-dropdown-links").slideToggle(150);
};

// Check username and password when clicking log in button
function logIn() {
    var name = $("#nav-modal #name").val();
    var pass = $("#nav-modal #pass").val()
    if (jQuery.inArray(name, names) !== -1 &&
        pass == "nyhfb") {
            sessionStorage.setItem("logInStatus", "true");
            location.reload();
    }
    else {
        $("#nav-modal h3").show(150);
    }
};

// Reload page when clicking sign out button
function signOut() {
    sessionStorage.setItem("logInStatus", "false");
    location.reload();
};
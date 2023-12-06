// Menu function for navigation menu
var toggle = document.querySelector('#toggle');
var menu = document.querySelector('#myMenu');
var menuItems = document.querySelectorAll('#myMenu li a');

toggle.addEventListener('click', function(){
    if (menu.classList.contains("is-active")) {
        this.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-active');
    }else {
        menu.classList.add("is-active");
        this.setAttribute('aria-expanded', 'true');
    }
});

/* document.addEventListener("DOMContentLoaded", function() {
    const largeText = document.getElementById("largeText");
    const myStart_button = document.getElementById("start_button"); // get the ID for my start button.

    // The iniatial phase of the home page.
    largeText.style.display = "none";

    // Then event listener add for when user click on button
    myStart_button.addEventListener("click", function() {
        myStart_button.style.display = "none";
        updateLargeText();
        myStart_button.classList.add("clicked!"); // add a class to trigger the button animation.
        largeText.classList.add("appear");        // Add a class to trigger the text appear animation.

    });

    // Update the state of large text display to my little text, transition (will add or change to CSS animation later).
    function updateLargeText() {
        largeText.style.display = "block";
    };
});
 */
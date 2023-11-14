document.addEventListener("DOMContentLoaded", function() {
    const hoverText = document.getElementById("hoverText");
    const largeText = document.getElementById("largeText");
    const nameInput = document.getElementById("name");

    // Initial state
    hoverText.style.display = "block";
    largeText.style.display = "none";

    let timeoutId;

    nameInput.addEventListener("input", function() {
        clearTimeout(timeoutId); // Clear the previous timeout if any
        updateHoverText();
    });

    function updateHoverText() {
        const name = nameInput.value.trim();

        if (name) {
            // If a name is entered, switch to the largeText state after 3 seconds
            timeoutId = setTimeout(function() {
                hoverText.style.display = "none";
                largeText.style.display = "block";
            }, 2000);
        } else {
            // Otherwise, update the hover text
            hoverText.querySelector("span").textContent = `Are you ready, ${nameInput.value}?`;
        }
    }
});


function changeTheme() {

    // Select the body element
    const body = document.body;

    // Select the theme button
    const button = document.getElementById("themeBtn");

    // Toggle dark mode
    body.classList.toggle("dark");

    // Change button icon
    if (body.classList.contains("dark")) {
        button.innerHTML = "☀️";
    } else {
        button.innerHTML = "🌙";
    }
}

// Welcome message
window.onload = function() {
    console.log("Welcome to Aashlesha's Portfolio!");
};

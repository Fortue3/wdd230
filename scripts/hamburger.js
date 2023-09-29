function toggleMenu() {
    var navbarMenu = document.getElementById("navbarMenu");

    if (navbarMenu.style.display === "none") {
        navbarMenu.style.display = "flex";
    } else {
        navbarMenu.style.display = "none";
    }
}

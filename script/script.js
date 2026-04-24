var btnmenu = document.getElementById("btnmenu");

btnmenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.display === "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }

}
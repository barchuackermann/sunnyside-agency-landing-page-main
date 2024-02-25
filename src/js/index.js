const menuMobile = () => {
    let windowWidth = window.innerWidth;
    let menuToggler = document.querySelector(".menu-toggler");
    let menuContainer = document.querySelector(".menu-container");

    if (windowWidth < 1440){
        menuToggler.addEventListener("click", (e) => {
            menuContainer.classList.toggle("show");
        });
    } else {
        menuContainer.classList.remove("show");
    }

}

window.onload = function() {
    menuMobile();
};

window.onresize = function() {
    menuMobile();
}
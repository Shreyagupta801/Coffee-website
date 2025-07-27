const menuOpenButton = document.querySelectorAll("#menu-open-button");
const menuCloseButton = document.querySelectorAll("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => menuCloseButton.click());


 
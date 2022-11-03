const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("link"))
.forEach((item, index) => {
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;
    }
});
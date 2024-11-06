// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'


// setupCounter(document.querySelector('#counter'))
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const menuToogle = document.getElementById("menu-toggle");
    const menusTitle = document.querySelectorAll(".menu-title");
    const screenWidth = window.innerWidth;

    if (screenWidth < 1500) {
        menusTitle.forEach(item => {
            item.style.display = "none"

        });
        menu.style.width = "60px";
    } else {
        menusTitle.forEach(item => {
            item.style.display = "flex"
        });
        menu.style.width = "260px"
    }

    window.addEventListener('resize', () => {
        if (screenWidth < 1500) {
            menusTitle.forEach(item => {
                item.style.display = "none"

            });
            menu.style.width = "60px";
        } else {
            menusTitle.forEach(item => {
                item.style.display = "flex"
            });
            menu.style.width = "260px"
        }
    })

    menuToogle.addEventListener("click", () => {
        if (menu.style.width === "260px") {
            menusTitle.forEach(item => {
                item.style.display = "none"

            });
            menu.style.width = "60px";
        } else {
            menusTitle.forEach(item => {
                item.style.display = "flex"
            });
            menu.style.width = "260px"
        }
    })

})
// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'


// setupCounter(document.querySelector('#counter'))

const navigateTo = (url) => {
    history.pushState(null, null, url)
    router();
}

const loadHTML = async (route, container) => {
    fetch(route)
        .then(response => {
            if (response.ok){
                return response.text();
            } else {
                throw new Error(`Error al cargar ${url}: ${response.statusText}`)
            } 
        })
        .then(htmlContent => {
            document.getElementById(container).innerHTML = htmlContent;
        })
}

const router = async () => {
    const routes = [
        {path: "/", view: () => loadHTML("./src/homepage.html","container")},
        {path: "/catalog", view: () => loadHTML("./src/catalog.html","container")},
        {path: "/product", view: () => loadHTML("./src/product.html","container")}
    ];

    const potentialMatches = routes.map(route => ({
        route,
        isMatch: location.pathname === route.path,
    }));

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {route: routes[0], isMatch: true}
    }

    match.route.view();
} 
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const menuToogle = document.getElementById("menu-toggle");
    const menusTitle = document.querySelectorAll(".menu-title");
    const screenWidth = window.innerWidth;

    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router()

    if (screenWidth < 1200) {
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
        if (screenWidth < 1200) {
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
document.addEventListener("DOMContentLoaded", ()=> {
    const searchIcon = document.querySelector("#search-icon");
    const searchBar = document.querySelector(".search-bar");
    const clicked = false;


    searchIcon.addEventListener("click", (event) => {
        if (clicked) {
            searchBar.setAttribute("visibility", "hidden");
            clicked = false;
        } else {
            searchBar.setAttribute("visibility", "visible");
            clicked = true;
        }
    })
});

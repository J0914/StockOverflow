document.addEventListener("DOMContentLoaded", ()=> {
    const searchIcon = document.querySelector("#search-icon");
    const searchBar = document.querySelector(".search-bar");
    let clicked = false;


    searchIcon.addEventListener("click", (event) => {
        if (clicked) {
            searchBar.style.visibility = "hidden";
            clicked = false;
        } else {
            searchBar.style.visibility = "visible";
            clicked = true;
        }
    })
});

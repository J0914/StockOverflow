document.addEventListener("DOMContentLoaded", ()=> {
    const searchIcon = document.querySelector("#search-icon");
    const searchBar = document.querySelector(".search-bar");
    let clicked = false;


    searchIcon.addEventListener("click", (event) => {
        if (clicked) {
            console.log("clicked true")
            searchBar.style.visibility = "hidden";
            clicked = false;
        } else {
            console.log("clicked false")
            searchBar.style.visibility = "visible";
            clicked = true;
        }
    })
});

document.addEventListener("DOMContentLoaded", ()=> {
    const searchIcon = document.querySelector("#search-icon");
    const searchBar = document.querySelector(".search-bar");
    let clicked = false;


    searchIcon.addEventListener("click", () => {
        if (clicked) {
            searchBar.style.visibility = "hidden";
            clicked = false;
        } else {
            searchBar.style.visibility = "visible";
            clicked = true;
        }
    })

    const searchBarField = document.querySelector(".search-bar-field");
    const searchSubmitButton = document.querySelector(".search-submit");

    searchBarField.addEventListener("keyup", (event) => {
        if(event.keyCode === 13) {
            searchSubmitButton.click();
        }
    })
});
